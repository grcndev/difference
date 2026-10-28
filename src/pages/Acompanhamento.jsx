import PageHead from '../components/PageHead.jsx';
import ClosingCTA from '../components/ClosingCTA.jsx';
import NextPage from '../components/NextPage.jsx';
import { usePageTitle } from '../hooks/usePageTitle.js';
import './Acompanhamento.css';

const conceitos = [
  {
    titulo: 'Deslocamento',
    termo: 'movimento',
    texto: 'O processo terapêutico não precisa ficar preso a um divã ou a um protocolo estático. Ele pode sair do lugar quando a sua vida pede.',
    glyph: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="2" y="16" width="12" height="12" />
        <path d="M14 22 C 24 22, 26 10, 42 6" />
        <path d="M36 4 L42 6 L39 11" />
      </svg>
    ),
  },
  {
    titulo: 'Cartografia',
    termo: 'mapa',
    texto: 'Mapear o sofrimento, os desejos e as forças que atuam sobre a sua vida cotidiana. Não para fixar um diagnóstico, mas para ver por onde as coisas passam e onde travam.',
    glyph: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M2 12 H42 M2 22 H42 M2 32 H42 M12 2 V42 M22 2 V42 M32 2 V42" opacity=".35" />
        <path d="M5 38 C 12 30, 14 20, 22 22 S 34 10, 40 5" />
        <circle cx="22" cy="22" r="2.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    titulo: 'Singularidade',
    neq: true,
    termo: 'diferença',
    texto: 'Criar saídas e modos de existir que façam sentido para a sua trajetória, sem impor normas sobre como você deveria ser.',
    glyph: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M6 17 H38 M6 27 H38" />
        <path d="M30 6 L14 38" stroke="var(--violet)" strokeWidth="1.6" />
      </svg>
    ),
  },
];

export default function Acompanhamento() {
  usePageTitle('Acompanhamento');

  return (
    <>
      <PageHead
        label="Por que acompanhamento"
        title={<>Um espaço que <em>se move</em> com você</>}
      />

      <section>
        <div className="wrap">
          <div className="grid">
            <p className="concept-lead">
              Prefiro chamar de acompanhamento psicológico o que costuma ser chamado de clínica. A palavra muda porque o
              trabalho também muda: ele não cabe apenas em salas, protocolos ou escopos rígidos.
            </p>
            <p className="etym">
              <i>Clínica</i> vem do grego <i>klinikós</i>, o que se faz junto ao leito, com alguém deitado e imóvel.
              {' '}<i>Acompanhar</i> é seguir junto, no passo e no caminho de quem anda.
            </p>
          </div>

          <div className="keys">
            {conceitos.map((c) => (
              <article className="key" key={c.titulo}>
                <div className="glyph" aria-hidden="true">{c.glyph}</div>
                <h2>
                  {c.titulo}
                  {c.neq && <span className="neq"> ≠</span>}
                </h2>
                <p>{c.texto}</p>
                <span className="term" aria-hidden="true">{c.termo}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA />
      <NextPage to="/formatos" label="Próxima página" title="Onde e como o acompanhamento acontece" />
    </>
  );
}
