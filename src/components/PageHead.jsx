// Abertura das páginas internas: rótulo, título e introdução, com ≠ como marca-d'água.
export default function PageHead({ label, title, intro }) {
  return (
    <header className="page-head">
      <div className="watermark" aria-hidden="true">≠</div>
      <div className="wrap">
        <div className="grid">
          <div className="inner">
            <span className="label">{label}</span>
            <h1>{title}</h1>
            {intro && <p className="intro">{intro}</p>}
          </div>
        </div>
      </div>
    </header>
  );
}
