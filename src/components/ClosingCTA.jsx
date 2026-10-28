import { useRef, useState } from 'react';
import Button from './Button.jsx';
import Ph from './Ph.jsx';
import { profissional, linkWhatsApp } from '../data/profissional.js';
import './ClosingCTA.css';

export default function ClosingCTA({ titulo = 'Vamos conversar?', as: Tag = 'h2' }) {
  const phoneRef = useRef(null);
  const [copyLabel, setCopyLabel] = useState('Copiar número');

  const reset = () => setTimeout(() => setCopyLabel('Copiar número'), 1800);
  const selectNumber = () => {
    const sel = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(phoneRef.current);
    sel.removeAllRanges();
    sel.addRange(range);
    setCopyLabel('Selecionado');
    reset();
  };
  const copy = () => {
    try {
      navigator.clipboard
        .writeText(profissional.whatsappExibicao)
        .then(() => { setCopyLabel('Copiado'); reset(); }, selectNumber);
    } catch {
      selectNumber();
    }
  };

  return (
    <section className="closing tinted" aria-labelledby="closing-title">
      <div className="wrap">
        <div className="grid">
          <div className="closing-in">
            <Tag id="closing-title">{titulo}</Tag>
            <div className="act">
              <p>Se você quer entender como o acompanhamento pode se organizar para o seu momento atual, entre em contato.</p>
              <div>
                <Button href={linkWhatsApp()} arrow>Conversar pelo WhatsApp</Button>
              </div>
              <div className="contact-line">
                <span>WhatsApp</span>
                <span ref={phoneRef}><Ph>{profissional.whatsappExibicao}</Ph></span>
                <button className="copy" type="button" onClick={copy}>{copyLabel}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
