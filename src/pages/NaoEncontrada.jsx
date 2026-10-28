import PageHead from '../components/PageHead.jsx';
import Button from '../components/Button.jsx';
import { usePageTitle } from '../hooks/usePageTitle.js';

export default function NaoEncontrada() {
  usePageTitle('Página não encontrada');

  return (
    <>
      <PageHead
        label="Fora do mapa"
        title={<>Esta página <em>não existe</em>.</>}
        intro="O endereço pode ter mudado. Volte ao início para seguir por outro caminho."
      />
      <section style={{ paddingBlock: '3rem 6rem' }}>
        <div className="wrap">
          <Button to="/" arrow>Voltar ao início</Button>
        </div>
      </section>
    </>
  );
}
