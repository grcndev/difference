import { Link } from 'react-router-dom';

// Link para a próxima página do percurso, no pé de cada página.
export default function NextPage({ to, label, title }) {
  return (
    <div className="next-page">
      <div className="wrap">
        <Link to={to}>
          <span className="t">
            <span className="label">{label}</span>
            <strong>{title}</strong>
          </span>
          <svg viewBox="0 0 96 20" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
            <path d="M0 10 H60 C 72 10, 78 3, 94 3" />
            <path d="M88 0 L94 3 L89 8" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
