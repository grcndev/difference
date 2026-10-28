import Ph from '../components/Ph.jsx';
import ClosingCTA from '../components/ClosingCTA.jsx';
import NextPage from '../components/NextPage.jsx';
import { profissional, linkWhatsApp } from '../data/profissional.js';
import { usePageTitle } from '../hooks/usePageTitle.js';
import './Sobre.css';

export default function Sobre() {
  usePageTitle('Sobre');

  return (
    <>
      <section className="about">
        <div className="wrap">
          <div className="grid">
            <figure className="about-portrait">
              <div className="portrait">
                <img
                  src="/retrato.jpg"
                  width="732"
                  height="644"
                  alt={`Retrato de ${profissional.nome}, em três tomadas sobrepostas a uma colagem em preto e branco de olhos, boca e edifícios.`}
                />
              </div>
              <figcaption><Ph>{profissional.nome}</Ph> · CRP <Ph>{profissional.crp}</Ph></figcaption>
            </figure>

            <div className="about-text">
              <span className="label">Sobre</span>
              <h1>Acompanhamento &amp; escuta</h1>
              <p className="name"><Ph>{profissional.nome}</Ph>, {profissional.titulo.toLowerCase()}</p>
              <p>
                {profissional.titulo} formado(a) pela <Ph>{profissional.instituicao}</Ph>, com percurso analítico
                construído junto à esquizoanálise e às filosofias da diferença. Minha prática passa por{' '}
                <Ph>{profissional.percurso}</Ph>, sempre atenta ao que cada encontro produz.
              </p>
              <p>
                O compromisso ético deste trabalho é acompanhar pessoas em seus processos de singularização e
                transformação, sem enquadrá-las em modelos prontos e sem tratar a diferença como desvio.
              </p>
              <dl className="facts">
                <div><dt>Registro</dt><dd>CRP <Ph>{profissional.crp}</Ph></dd></div>
                <div><dt>Orientação</dt><dd>Esquizoanálise</dd></div>
                <div><dt>Formatos</dt><dd>Online e presencial</dd></div>
                <div>
                  <dt>WhatsApp</dt>
                  <dd>
                    <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer">
                      <Ph>{profissional.whatsappExibicao}</Ph>
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA />
      <NextPage to="/" label="Voltar ao início" title="O que você quer, prefere ou precisa?" />
    </>
  );
}
