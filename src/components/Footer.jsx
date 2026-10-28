import Ph from './Ph.jsx';
import { profissional, linkWhatsApp } from '../data/profissional.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>
          <span className="neq">≠</span>&nbsp; <Ph>{profissional.nome}</Ph> · {profissional.titulo} · CRP <Ph>{profissional.crp}</Ph>
        </span>
        <span>
          WhatsApp{' '}
          <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer">
            <Ph>{profissional.whatsappExibicao}</Ph>
          </a>
        </span>
        <span>Acompanhamento psicológico · orientação esquizoanalítica</span>
      </div>
    </footer>
  );
}
