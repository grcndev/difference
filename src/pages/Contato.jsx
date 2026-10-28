import ClosingCTA from '../components/ClosingCTA.jsx';
import { usePageTitle } from '../hooks/usePageTitle.js';
import './Contato.css';

const passos = [
  { titulo: 'Uma mensagem', texto: 'Você escreve pelo WhatsApp contando, do jeito que conseguir, o que te trouxe até aqui.' },
  { titulo: 'Uma primeira conversa', texto: 'Conversamos sobre o seu momento e sobre o que você quer, prefere ou precisa.' },
  { titulo: 'Um formato combinado', texto: 'Definimos juntos frequência, valores e se o encontro será online, em sala ou em movimento.' },
];

export default function Contato() {
  usePageTitle('Contato');

  return (
    <>
      <ClosingCTA as="h1" />

      <section aria-labelledby="como-comeca">
        <div className="wrap">
          <div className="grid">
            <div className="steps-head">
              <span className="label">Como começa</span>
              <h2 id="como-comeca">Do primeiro contato ao primeiro encontro</h2>
            </div>
            <ol className="steps">
              {passos.map((p, i) => (
                <li key={p.titulo}>
                  <span className="n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
