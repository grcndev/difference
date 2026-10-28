import { Link } from 'react-router-dom';

// Botão com fill escuro (solid) ou contorno (ghost).
// `to` navega dentro do site; `href` abre um link externo.
export default function Button({ to, href, variant = 'solid', arrow = false, children, ...rest }) {
  const className = `btn btn-${variant}`;
  const content = (
    <>
      {children}
      {arrow && <span className="arrow" aria-hidden="true" />}
    </>
  );
  if (href) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {content}
      </a>
    );
  }
  return (
    <Link className={className} to={to} {...rest}>
      {content}
    </Link>
  );
}
