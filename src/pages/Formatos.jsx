import PageHead from '../components/PageHead.jsx';
import LandscapePlate from '../components/LandscapePlate.jsx';
import ClosingCTA from '../components/ClosingCTA.jsx';
import NextPage from '../components/NextPage.jsx';
import { usePageTitle } from '../hooks/usePageTitle.js';
import './Formatos.css';

const territorios = [
  {
    tag: 'Online',
    titulo: 'No seu espaço',
    texto: 'O acompanhamento pode ser feito online, desde que você tenha privacidade e um lugar seguro para falar, elaborar e estar presente.',
    escala: [20, 20],
    legenda: 'uma tela · um quarto · uma porta fechada',
  },
  {
    tag: 'Presencial',
    titulo: 'No espaço urbano e no encontro',
    texto: 'Também pode ser presencial: em uma sala, em outros espaços, caminhando ou sentando. A cidade e o movimento também podem fazer parte da análise.',
    escala: [20, 40, 80],
    legenda: 'sala · praça · rua',
  },
];

export default function Formatos() {
  usePageTitle('Formatos');

  return (
    <>
      <PageHead
        label="Territórios e formatos"
        title={<>Onde e como o acompanhamento <em>acontece</em></>}
        intro="A escuta se adapta à sua realidade e às suas possibilidades de presença."
      />

      <section>
        <div className="wrap">
          <div className="territories">
            {territorios.map((t) => (
              <article className="territory" key={t.tag}>
                <span className="tag">{t.tag}</span>
                <h2>{t.titulo}</h2>
                <p>{t.texto}</p>
                <div className="scale" aria-hidden="true">
                  {t.escala.map((w, i) => <i key={i} style={{ width: w }} />)}
                  <span>{t.legenda}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="grid">
            <div className="plate-col">
              <LandscapePlate />
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA />
      <NextPage to="/para-quem" label="Próxima página" title="Quando procurar o acompanhamento?" />
    </>
  );
}
