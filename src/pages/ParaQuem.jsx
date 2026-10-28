import PageHead from '../components/PageHead.jsx';
import ClosingCTA from '../components/ClosingCTA.jsx';
import NextPage from '../components/NextPage.jsx';
import { usePageTitle } from '../hooks/usePageTitle.js';
import './ParaQuem.css';

// Cada linha de fuga sai da horizontal para um destino diferente
const itens = [
  { texto: 'Para quem sente que a vida e as relações ficaram presas a padrões repetitivos ou sufocantes.', destino: 2 },
  { texto: 'Para quem atravessa momentos de transição, crises existenciais ou bloqueios criativos.', destino: 20 },
  { texto: 'Para quem busca uma escuta analítica sem o peso do diagnóstico reducionista.', destino: 6 },
  { texto: 'Para quem precisa inventar novas formas de estar no mundo e habitar os próprios territórios.', destino: 15 },
];

export default function ParaQuem() {
  usePageTitle('Para quem');

  return (
    <>
      <PageHead
        label="Para quem é"
        title={<>Quando procurar o <em>acompanhamento</em>?</>}
        intro="Não é preciso chegar com um nome para o que se sente. Basta perceber que algo pede passagem."
      />

      <section>
        <div className="wrap">
          <div className="grid">
            <ul className="who-list">
              {itens.map((item) => (
                <li key={item.destino}>
                  <svg viewBox="0 0 48 22" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                    <path d={`M0 11 H20 C 30 11, 34 ${item.destino}, 46 ${item.destino}`} />
                  </svg>
                  <span>{item.texto}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ClosingCTA />
      <NextPage to="/sobre" label="Próxima página" title="Acompanhamento & escuta" />
    </>
  );
}
