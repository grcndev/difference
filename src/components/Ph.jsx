import { profissional } from '../data/profissional.js';

// Marca um dado provisório com contorno tracejado enquanto
// `profissional.placeholder` for true em src/data/profissional.js.
export default function Ph({ children }) {
  if (!profissional.placeholder) return <>{children}</>;
  return <span className="ph">{children}</span>;
}
