import { useEffect, useRef } from 'react';
import { useThemeColors, useReducedMotion } from '../hooks/useThemeColors.js';

// Fundo do hero: feixes de linhas em L (territórios) e linhas de fuga
// que escapam deles e atravessam o mapa devagar.
export default function FlightLines({ className = '' }) {
  const ref = useRef(null);
  const colors = useThemeColors(['--rule', '--rule-blue']);
  const reduced = useReducedMotion();

  useEffect(() => {
    const cv = ref.current;
    const ctx = cv.getContext('2d');
    const palette = { rule: colors['--rule'], blue: colors['--rule-blue'] };
    let W = 0, H = 0, bundles = [], flights = [], raf = 0;
    const GAP = 7;

    function layout() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = cv.getBoundingClientRect();
      W = r.width; H = r.height;
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const s = Math.min(W, H);
      bundles = [
        { cx: W * 0.02, cy: H * 0.02, dx: 1, dy: 1, n: 14, len: s * 0.55, c: 'blue' },
        { cx: W * 0.98, cy: H * 0.04, dx: -1, dy: 1, n: 16, len: s * 0.75, c: 'rule' },
        { cx: W * 0.97, cy: H * 0.98, dx: -1, dy: -1, n: 12, len: s * 0.6, c: 'blue' },
        { cx: W * 0.03, cy: H * 0.97, dx: 1, dy: -1, n: 11, len: s * 0.5, c: 'rule' },
        { cx: W * 0.62, cy: H * 0.55, dx: 1, dy: 1, n: 9, len: s * 0.32, c: 'rule' },
      ];
      flights = [
        { b: 1, i: 3, to: [W * 0.55, H * 0.98], k: 0.0 },
        { b: 0, i: 6, to: [W * 0.92, H * 0.62], k: 0.33 },
        { b: 2, i: 2, to: [W * 0.18, H * 0.3], k: 0.66 },
      ];
    }

    function drawBundle(b, t) {
      ctx.strokeStyle = palette[b.c];
      ctx.lineWidth = 1;
      for (let i = 0; i < b.n; i++) {
        const breathe = reduced ? 0 : Math.sin(t * 0.00025 + i * 0.45) * 1.6;
        const d = i * GAP + breathe;
        ctx.globalAlpha = 0.95 - i / (b.n * 1.6);
        ctx.beginPath();
        ctx.moveTo(b.cx + b.dx * d, b.cy + b.dy * (b.len + d));
        ctx.lineTo(b.cx + b.dx * d, b.cy + b.dy * d);
        ctx.lineTo(b.cx + b.dx * (b.len + d), b.cy + b.dy * d);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }

    function drawFlight(f, t) {
      const b = bundles[f.b];
      const d = f.i * GAP;
      const sx = b.cx + b.dx * (b.len + d), sy = b.cy + b.dy * d;
      const [ex, ey] = f.to;
      const c1x = sx + b.dx * 120, c1y = sy;
      const c2x = ex - (ex - sx) * 0.2, c2y = ey - (ey - sy) * 0.7;
      const p = reduced ? 0.7 : ((t / 26000) + f.k) % 1;
      const drawn = Math.min(1, p / 0.55);
      const fade = p > 0.8 ? 1 - (p - 0.8) / 0.2 : 1;
      const steps = 80, upto = Math.floor(steps * drawn);
      ctx.strokeStyle = palette.blue;
      ctx.globalAlpha = 0.9 * fade;
      ctx.beginPath();
      for (let s = 0; s <= upto; s++) {
        const u = s / steps, v = 1 - u;
        const x = v * v * v * sx + 3 * v * v * u * c1x + 3 * v * u * u * c2x + u * u * u * ex;
        const y = v * v * v * sy + 3 * v * v * u * c1y + 3 * v * u * u * c2y + u * u * u * ey;
        s === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    function frame(t) {
      ctx.clearRect(0, 0, W, H);
      bundles.forEach((b) => drawBundle(b, t));
      flights.forEach((f) => drawFlight(f, t));
      if (!reduced) raf = requestAnimationFrame(frame);
    }

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { layout(); if (reduced) frame(0); }, 150);
    };

    layout();
    frame(performance.now());
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
    };
  }, [colors, reduced]);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
