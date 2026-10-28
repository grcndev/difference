import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Ph from './Ph.jsx';
import { profissional } from '../data/profissional.js';
import './Header.css';

export const paginas = [
  { to: '/acompanhamento', label: 'Acompanhamento' },
  { to: '/formatos', label: 'Formatos' },
  { to: '/para-quem', label: 'Para quem' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`site-header${open ? ' is-open' : ''}`}>
      <div className="wrap">
        <Link className="mark" to="/" aria-label="Página inicial">
          <span className="neq" aria-hidden="true">≠</span>
          <b><Ph>{profissional.nome}</Ph></b>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span>{open ? 'Fechar' : 'Menu'}</span>
          <i aria-hidden="true" />
        </button>

        <nav id="site-nav" aria-label="Páginas">
          {paginas.map((p) => (
            <NavLink key={p.to} to={p.to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
              {p.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
