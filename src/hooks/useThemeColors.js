import { useEffect, useState } from 'react';

// Lê os tokens de cor do CSS e atualiza quando o tema muda
// (preferência do sistema ou atributo data-theme no <html>).
export function useThemeColors(names) {
  const read = () => {
    const s = getComputedStyle(document.documentElement);
    return Object.fromEntries(names.map((n) => [n, s.getPropertyValue(n).trim()]));
  };
  const [colors, setColors] = useState(read);

  useEffect(() => {
    const update = () => setColors(read());
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', update);
    const mo = new MutationObserver(update);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => {
      mq.removeEventListener('change', update);
      mo.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return colors;
}

export function useReducedMotion() {
  const query = '(prefers-reduced-motion: reduce)';
  const [reduced, setReduced] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const fn = () => setReduced(mq.matches);
    mq.addEventListener('change', fn);
    return () => mq.removeEventListener('change', fn);
  }, []);
  return reduced;
}
