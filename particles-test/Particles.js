/* ══ Particles ════════════════════════════════════════════
   A shape made of dots. Move over it and the dots are pushed
   away from the pointer and spring home behind it; press and a
   shockwave throws them out, and they gather again into the
   NEXT shape — circle, square, flower, round again.

   ── ONE SET OF DOTS, MANY SHAPES ────────────────────────
   The dots never change, only where home is. Every shape is
   sampled to the same number of points, and a change of shape
   pairs each dot with a new home by angle round the middle, so
   the swarm sweeps round into the new outline rather than
   crossing itself.

   ── STRETCHED BY SPEED ──────────────────────────────────
   A dot at rest is round; a moving one is drawn a little long
   along the way it is going, which is what makes a burst read
   as a splash rather than a scatter of points.

   Standalone, dependency-free port of Bencho's React component.
   Original: https://bencho.dev/blocks/particles (MIT licence).
   This file is NOT loaded by the production jf.js. */

/* ── inlined from lab/spring ──────────────────────── */
/* ── one spring, for everything that settles ───────────────
   The maths was already on this bench twice, copied by hand:
   Humidity's wheel and Brightness's column both accumulate
   velocity toward a target, damp it, and snap when both the
   delta and the velocity fall under 0.02. Two copies is a
   coincidence; five would be a policy, so it comes out here
   before the elastic blocks are written against it.

   The two shipped copies are deliberately NOT refactored onto
   this. They work, they are tuned, and rewriting the innards
   of two live components to prove a point about duplication
   is how a good afternoon becomes a bad one. This is the one
   new code uses.

   Frames, not milliseconds. `dt` is expressed in sixtieths of
   a second and the damping is RAISED to it rather than
   multiplied by it, so a dropped frame decays the same amount
   of energy as the two frames it replaced. Multiplying is the
   version that makes a spring behave differently on a busy
   page, which is the hardest kind of bug to see.

   The loop parks itself the moment the value has settled.
   CLAUDE.md is not complimentary about the one permanent
   requestAnimationFrame already on this bench and there is no
   case for five more. */

(function () {
  'use strict';

  /* Read once, the way the wheel and the pill nav do. A
     preference, not a live input. */
  const still = typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const W = 480;
  const H = 400;
  const CX = W / 2;
  const CY = H / 2;
  /* how many dots every shape is sampled to */
  const N = 720;
  const SHAPES = ['Circle', 'Square', 'Flower'];
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const angle = (x, y) => Math.atan2(y - CY, x - CX);

  function outline(s) {
    const p = new Path2D();
    if (s === 'Circle') p.arc(CX, CY, 150, 0, Math.PI * 2);
    else if (s === 'Square') p.roundRect(CX - 140, CY - 140, 280, 280, 36);
    else {
      /* five round petals round a smaller middle — circles drawn
         the same way round, so the fill is their union. Petals
         just touching their neighbours, so the notches between
         them read at the dots' own grain */
      for (let i = 0; i < 5; i++) {
        const a = -Math.PI / 2 + (i * Math.PI * 2) / 5;
        const x = CX + Math.cos(a) * 104;
        const y = CY + 8 + Math.sin(a) * 104;
        p.moveTo(x + 60, y);
        p.arc(x, y, 60, 0, Math.PI * 2);
      }
      p.moveTo(CX + 58, CY + 8);
      p.arc(CX, CY + 8, 58, 0, Math.PI * 2);
    }
    return p;
  }

  /* ── N points, spread evenly over the inside of a shape ──
     A hex grid spaced so the shape holds about N of them — its
     area over N, which is the spacing that fills it evenly — then
     trimmed or topped up to exactly N. It was a fixed fine grid
     thinned by a stride, and the stride beat against the grid:
     the circle came out in zigzag bands. */
  function homes(s) {
    const c = document.createElement('canvas');
    c.width = W;
    c.height = H;
    const g = c.getContext('2d');
    if (!g) return [];
    const path = outline(s);
    let area = 0;
    for (let y = 1; y < H; y += 2)
      for (let x = 1; x < W; x += 2)
        if (g.isPointInPath(path, x, y)) area += 4;
    const sp = Math.sqrt((area / N) * (2 / Math.sqrt(3)));
    const rowH = (sp * Math.sqrt(3)) / 2;
    const pts = [];
    for (let y = rowH / 2, row = 0; y < H; y += rowH, row++) {
      for (let x = sp / 2 + (row % 2) * (sp / 2); x < W; x += sp) {
        if (g.isPointInPath(path, x, y)) pts.push([x, y]);
      }
    }
    /* within a few of N either way; drop evenly or repeat evenly */
    const out = [];
    for (let i = 0; i < N && pts.length; i++) out.push(pts[Math.floor((i * pts.length) / N)]);
    return out;
  }

  function mountParticles(canvas, config = {}) {
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas 2D is required');
    const knobs = {
      reach: config.reach ?? 80,
      force: config.force ?? 60,
      grain: config.grain ?? 'Fine',
    };
    let dots = [];
    let at = 'Circle';
    let hand = null;
    let raf = 0;
    let disposed = false;

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);

    /* ── give every dot a home in a shape ────────────────── */
    function become(s) {
      at = s;
      const next = homes(s);
      if (!dots.length) {
        dots = next.map(([x, y]) => ({ hx: x, hy: y, x, y, vx: 0, vy: 0 }));
        return;
      }
      /* pair by angle round the middle, so the swarm sweeps */
      const a = dots.map((d, i) => [angle(d.x, d.y), i]).sort((p, q) => p[0] - q[0]);
      const b = next.map((h, i) => [angle(h[0], h[1]), i]).sort((p, q) => p[0] - q[0]);
      a.forEach(([, di], k) => {
        const h = next[b[k][1]];
        dots[di].hx = h[0];
        dots[di].hy = h[1];
        if (still) { dots[di].x = h[0]; dots[di].y = h[1]; }
      });
    }

    function draw() {
      if (disposed) return;
      const k = canvas.width / W;
      ctx.setTransform(k, 0, 0, k, 0, 0);
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = getComputedStyle(canvas).color;
      const r = knobs.grain === 'Coarse' ? 2.7 : 1.9;
      ctx.beginPath();
      for (const d of dots) {
        const sp = Math.hypot(d.vx, d.vy);
        if (sp < 0.3) {
          ctx.moveTo(d.x + r, d.y);
          ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        } else {
          /* long along its path, a little thin across it */
          const s = Math.min(2.6, 1 + sp * 0.12);
          const rot = Math.atan2(d.vy, d.vx);
          ctx.moveTo(d.x + Math.cos(rot) * r * s, d.y + Math.sin(rot) * r * s);
          ctx.ellipse(d.x, d.y, r * s, r / Math.sqrt(s), rot, 0, Math.PI * 2);
        }
      }
      ctx.fill();
    }

    function run() {
      if (disposed || still || raf) return;
      let prev = 0;
      const tick = (t) => {
        const dt = prev ? clamp((t - prev) / 16.67, 0, 2.5) : 1;
        prev = t;
        let busy = !!hand;
        for (const d of dots) {
          if (hand) {
            const dx = d.x - hand.x;
            const dy = d.y - hand.y;
            const dd = Math.hypot(dx, dy);
            const R = clamp(knobs.reach, 30, 160);
            if (dd < R && dd > 0.01) {
              const S = (clamp(knobs.force, 0, 100) / 100) * 11;
              const f = Math.pow(1 - dd / R, 2) * S;
              d.vx += (dx / dd) * f * dt;
              d.vy += (dy / dd) * f * dt;
            }
          }
          d.vx = (d.vx + (d.hx - d.x) * 0.05 * dt) * Math.pow(0.84, dt);
          d.vy = (d.vy + (d.hy - d.y) * 0.05 * dt) * Math.pow(0.84, dt);
          d.x += d.vx * dt;
          d.y += d.vy * dt;
          if (Math.abs(d.hx - d.x) < 0.05 && Math.abs(d.hy - d.y) < 0.05 && Math.abs(d.vx) < 0.02 && Math.abs(d.vy) < 0.02) {
            d.x = d.hx; d.y = d.hy; d.vx = 0; d.vy = 0;
          } else busy = true;
        }
        draw();
        raf = busy ? requestAnimationFrame(tick) : 0;
      };
      raf = requestAnimationFrame(tick);
    }

    const where = (e) => {
      const r = canvas.getBoundingClientRect();
      /* CSS scales the entire canvas down on mobile; use its visible dimensions. */
      return { x: ((e.clientX - r.left) / r.width) * W, y: ((e.clientY - r.top) / r.height) * H };
    };

    function move(e) {
      if (still) return;
      hand = where(e);
      run();
    }
    function clearHand() { hand = null; run(); }
    function press(e) {
      /* the shockwave, then the next shape */
      const p = where(e);
      if (!still) {
        const S = 0.4 + (clamp(knobs.force, 0, 100) / 100) * 1.2;
        for (const d of dots) {
          const dx = d.x - p.x;
          const dy = d.y - p.y;
          const dd = Math.hypot(dx, dy);
          if (dd > 200 || dd < 0.01) continue;
          const f = (1 - dd / 200) * 30 * S;
          d.vx += (dx / dd) * f;
          d.vy += (dy / dd) * f;
        }
      }
      become(SHAPES[(SHAPES.indexOf(at) + 1) % SHAPES.length]);
      draw();
      run();
      config.onShapeChange?.(at);
    }
    function clearTouch(e) { if (e.pointerType !== 'mouse') clearHand(); }
    canvas.addEventListener('pointermove', move);
    canvas.addEventListener('pointerleave', clearHand);
    canvas.addEventListener('pointerdown', press);
    canvas.addEventListener('pointerup', clearTouch);
    canvas.addEventListener('pointercancel', clearTouch);

    become(SHAPES.includes(config.shape) ? config.shape : 'Circle');
    draw();
    run();

    return {
      get shape() { return at; },
      setShape(s) {
        if (!SHAPES.includes(s)) return;
        become(s);
        draw();
        run();
        config.onShapeChange?.(at);
      },
      setKnobs(values) {
        Object.assign(knobs, values);
        draw();
        run();
      },
      destroy() {
        disposed = true;
        cancelAnimationFrame(raf);
        raf = 0;
        canvas.removeEventListener('pointermove', move);
        canvas.removeEventListener('pointerleave', clearHand);
        canvas.removeEventListener('pointerdown', press);
        canvas.removeEventListener('pointerup', clearTouch);
        canvas.removeEventListener('pointercancel', clearTouch);
      }
    };
  }

  /* Only this test page opts in. There is no change to Wraptas or jf.js. */
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const status = document.getElementById('shape-now');
  const selected = document.getElementById('shape-control');
  const reach = document.getElementById('reach-control');
  const force = document.getElementById('force-control');
  const grain = document.getElementById('grain-control');
  const particles = mountParticles(canvas, {
    onShapeChange(s) { status.textContent = s; selected.value = s; },
  });
  selected.addEventListener('change', () => particles.setShape(selected.value));
  reach.addEventListener('input', () => { document.getElementById('reach-value').textContent = reach.value; particles.setKnobs({ reach: Number(reach.value) }); });
  force.addEventListener('input', () => { document.getElementById('force-value').textContent = force.value; particles.setKnobs({ force: Number(force.value) }); });
  grain.addEventListener('change', () => particles.setKnobs({ grain: grain.value }));
  window.addEventListener('pagehide', () => particles.destroy(), { once: true });
})();
