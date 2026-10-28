import './CartoGrid.css';

// Grade de 12 colunas em hairline, fixa ao fundo: a folha cartográfica.
export default function CartoGrid() {
  return (
    <div className="cartogrid" aria-hidden="true">
      <div className="wrap">
        <div className="grid">
          {Array.from({ length: 12 }, (_, i) => <span key={i} />)}
        </div>
      </div>
    </div>
  );
}
