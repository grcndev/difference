import { useEffect, useRef } from 'react';
import { useThemeColors } from '../hooks/useThemeColors.js';
import './LandscapePlate.css';

// Gerador pseudoaleatório com semente: a paisagem sai sempre igual.
function rng(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function draw(g, w, h, ink, muted) {
  const R = rng(7);
  g.clearRect(0, 0, w, h);
  g.lineCap = 'round';
  g.lineJoin = 'round';
  const horizon = h * 0.6;

  // Cordilheiras: três planos, do fundo para a frente
  const layers = [
    { base: horizon - h * 0.08, amp: h * 0.36, peaks: 4, alpha: 0.45, hatch: 9 },
    { base: horizon - h * 0.02, amp: h * 0.22, peaks: 5, alpha: 0.7, hatch: 6 },
    { base: horizon + 1, amp: h * 0.13, peaks: 3, alpha: 0.9, hatch: 4 },
  ];
  layers.forEach((L, li) => {
    const pk = [];
    for (let j = 0; j < L.peaks; j++) {
      const c = li === 2
        ? ((j + 0.2 + R() * 0.6) / L.peaks) * w * 0.5 + (R() > 0.5 ? 0 : w * 0.5)
        : ((j + 0.2 + R() * 0.6) / L.peaks) * w;
      pk.push({ c, a: (0.45 + R() * 0.55) * L.amp, s: w * (0.06 + R() * 0.08) });
    }
    const ridge = (x) => {
      let y = 0;
      pk.forEach((p) => { y = Math.max(y, p.a * Math.exp(-Math.pow((x - p.c) / p.s, 2))); });
      return L.base - y - Math.sin(x * 0.09 + li) * 1.2 - Math.sin(x * 0.031) * 2.5;
    };

    g.strokeStyle = ink; g.globalAlpha = L.alpha; g.lineWidth = 0.9;
    g.beginPath();
    for (let x = 0; x <= w; x += 2) { const y = ridge(x); x === 0 ? g.moveTo(x, y) : g.lineTo(x, y); }
    g.stroke();

    // Hachuras na encosta à sombra
    g.lineWidth = 0.6;
    for (let x = 0; x <= w; x += L.hatch * 0.5) {
      const y = ridge(x), slope = ridge(x + 2) - y;
      if (slope > 0.15 && L.base - y > 4) {
        const len = Math.min(L.base - y, (6 + R() * 18) * (1 + slope));
        g.globalAlpha = L.alpha * (0.35 + R() * 0.45);
        g.beginPath(); g.moveTo(x, y + 1.5); g.lineTo(x + len * 0.35, y + len); g.stroke();
      }
    }

    // Reflexo no lago
    if (li < 2) {
      g.setLineDash([3, 4]); g.globalAlpha = L.alpha * 0.35; g.lineWidth = 0.7;
      g.beginPath();
      for (let x = 0; x <= w; x += 3) {
        const y = horizon + (horizon - ridge(x)) * 0.32;
        x === 0 ? g.moveTo(x, y) : g.lineTo(x, y);
      }
      g.stroke(); g.setLineDash([]);
    }
  });

  // Horizonte com marcas de coordenada
  g.globalAlpha = 0.85; g.strokeStyle = ink; g.lineWidth = 0.8;
  g.beginPath(); g.moveTo(w * 0.04, horizon); g.lineTo(w * 0.96, horizon); g.stroke();
  [w * 0.04, w * 0.96].forEach((x) => { g.beginPath(); g.moveTo(x, horizon - 5); g.lineTo(x, horizon + 5); g.stroke(); });
  g.fillStyle = muted; g.globalAlpha = 0.9;
  g.font = `${Math.max(9, w * 0.016)}px "IBM Plex Mono", monospace`;
  g.fillText('H', w * 0.04 + 4, horizon - 6);
  g.fillText('H', w * 0.96 - 12, horizon - 6);

  // Superfície da água
  g.lineWidth = 0.6;
  for (let y = horizon + 6; y < h * 0.86; y += 3 + (y - horizon) * 0.06) {
    let x = R() * 30;
    while (x < w) {
      const seg = 8 + R() * 50, gap = 6 + R() * 40;
      g.globalAlpha = 0.18 + R() * 0.3;
      g.beginPath(); g.moveTo(x, y); g.lineTo(Math.min(w, x + seg), y); g.stroke();
      x += seg + gap;
    }
  }

  // Margens em primeiro plano
  const mass = (x0, x1, yTop, yBot, density) => {
    g.strokeStyle = ink; g.lineWidth = 0.6;
    for (let n = 0; n < density; n++) {
      const x = x0 + R() * (x1 - x0);
      const tn = (x - x0) / (x1 - x0);
      const top = yTop - Math.sin(tn * Math.PI) * 12 + (R() - 0.5) * 10;
      const y = top + Math.pow(R(), 0.6) * (yBot - top);
      const len = 3 + R() * 8, ang = -0.6 + R() * 0.5;
      g.globalAlpha = 0.25 + R() * 0.55;
      g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(ang) * len, y + Math.sin(ang) * len); g.stroke();
    }
  };
  mass(0, w * 0.32, h * 0.8, h, 900);
  mass(w * 0.62, w * 0.82, h * 0.74, h * 0.95, 700);
  mass(w * 0.84, w, h * 0.46, h, 1100);

  g.globalAlpha = 0.8; g.lineWidth = 0.8;
  g.beginPath(); g.moveTo(0, h * 0.95);
  for (let x = 0; x <= w; x += 6) g.lineTo(x, h * 0.95 + Math.sin(x * 0.05) * 2 + (R() - 0.5) * 2);
  g.stroke();
  g.globalAlpha = 1;
}

export default function LandscapePlate({ caption = 'Prancha I · paisagem em linhas', note = 'território, horizonte, margem' }) {
  const ref = useRef(null);
  const colors = useThemeColors(['--ink', '--ink-muted']);

  useEffect(() => {
    const cv = ref.current;
    const g = cv.getContext('2d');
    const render = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = cv.getBoundingClientRect();
      if (!width || !height) return;
      cv.width = Math.round(width * dpr);
      cv.height = Math.round(height * dpr);
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(g, width, height, colors['--ink'], colors['--ink-muted']);
    };
    render();
    document.fonts?.ready.then(render);
    const ro = new ResizeObserver(render);
    ro.observe(cv);
    return () => ro.disconnect();
  }, [colors]);

  return (
    <figure className="plate-figure">
      <div className="plate-frame">
        <div className="inner">
          <canvas ref={ref} role="img" aria-label="Desenho em linhas de uma paisagem: montanhas, um lago e margens com vegetação" />
        </div>
      </div>
      <figcaption>
        <span>{caption}</span>
        <span>{note}</span>
      </figcaption>
    </figure>
  );
}
