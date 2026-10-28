import { Link } from 'react-router-dom';
import FlightLines from '../components/FlightLines.jsx';
import Button from '../components/Button.jsx';
import ClosingCTA from '../components/ClosingCTA.jsx';
import { usePageTitle } from '../hooks/usePageTitle.js';
import './Inicio.css';

const percurso = [
  { to: '/acompanhamento', label: 'Conceito', title: 'Um espaço que se move com você', text: 'Por que acompanhamento, e não apenas clínica.' },
  { to: '/formatos', label: 'Territórios', title: 'Onde e como acontece', text: 'Online, em sala, na cidade, caminhando ou sentando.' },
  { to: '/para-quem', label: 'Para quem', title: 'Quando procurar', text: 'Padrões que sufocam, transições, a busca por outra escuta.' },
  { to: '/sobre', label: 'Sobre', title: 'Acompanhamento & escuta', text: 'Trajetória, percurso analítico e compromisso ético.' },
];

export default function Inicio() {
  usePageTitle();

  return (
    <>
      <section className="hero" style={{ paddingBlock: 0 }}>
        <FlightLines className="hero-flight" />
        <div className="hero-watermark" aria-hidden="true">≠</div>
        <div className="wrap">
          <div className="grid">
            <div className="hero-text">
              <div className="hero-plate">
                <span className="label">Acompanhamento Psicológico <span className="coord">≠</span></span>
                <h1>Para além dos escopos <em>rígidos</em> da clínica.</h1>
                <p className="sub">
                  O que costumamos chamar de clínica é, na verdade, um acompanhamento. Um processo que não cabe em
                  quatro paredes nem em modelos fechados. Ele se constrói no encontro, no movimento e naquilo que
                  você precisa mapear.
                </p>
                <div className="ctas">
                  <Button to="/contato" arrow>Iniciar conversa</Button>
                  <Button to="/formatos" variant="ghost">Entender o formato</Button>
                </div>
              </div>
            </div>
            <div className="hero-coords" aria-hidden="true">Orientação<br />esquizoanalítica<br />Online · Presencial</div>
          </div>
        </div>
      </section>

      <section className="question" aria-labelledby="pergunta">
        <div className="bigneq" aria-hidden="true">≠</div>
        <div className="wrap">
          <div className="divider"><span className="neq" aria-hidden="true">≠</span></div>
          <blockquote id="pergunta">
            O que você <span className="w">quer</span>, <span className="w">prefere</span> ou <span className="w">precisa</span>?
          </blockquote>
          <p>
            O acompanhamento começa por essa escuta. Não há um ponto de partida padronizado. Há a sua demanda,
            singular, no momento presente.
          </p>
        </div>
      </section>

      <section className="atlas tinted" aria-labelledby="atlas-title">
        <div className="wrap">
          <div className="grid">
            <div className="atlas-head">
              <span className="label">Índice do mapa</span>
              <h2 id="atlas-title">Por onde começar a ler</h2>
            </div>
            <ul className="atlas-list">
              {percurso.map((p) => (
                <li key={p.to}>
                  <Link to={p.to}>
                    <span className="label">{p.label}</span>
                    <strong>{p.title}</strong>
                    <span className="txt">{p.text}</span>
                    <svg viewBox="0 0 48 14" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                      <path d="M0 7 H30 C 38 7, 40 2, 47 2" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
