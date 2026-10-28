# Acompanhamento Psicológico ≠

Site de acompanhamento psicológico com orientação esquizoanalítica, feito em React + JavaScript (Vite).

## Como rodar

Precisa do Node.js 18 ou mais novo.

```bash
npm install      # instala as dependências (só na primeira vez)
npm run dev      # abre em http://localhost:5173
npm run build    # gera a versão final na pasta dist/
npm run preview  # testa a versão final localmente
```

## Páginas

| Endereço          | Arquivo                       | Conteúdo                                             |
|-------------------|-------------------------------|------------------------------------------------------|
| `/`               | `src/pages/Inicio.jsx`        | Hero, a pergunta central e o índice das páginas      |
| `/acompanhamento` | `src/pages/Acompanhamento.jsx`| Por que acompanhamento; Deslocamento, Cartografia, Singularidade |
| `/formatos`       | `src/pages/Formatos.jsx`      | Online e presencial, com a prancha de paisagem       |
| `/para-quem`      | `src/pages/ParaQuem.jsx`      | Quando procurar o acompanhamento                     |
| `/sobre`          | `src/pages/Sobre.jsx`         | Apresentação do profissional                         |
| `/contato`        | `src/pages/Contato.jsx`       | WhatsApp e como começa                               |

## Onde trocar os dados

Tudo que aparece com contorno violeta tracejado é provisório. Edite **`src/data/profissional.js`**:
nome, CRP, instituição, percurso e WhatsApp. Quando terminar, mude `placeholder: true` para `false`
e o contorno some.

Para o retrato, coloque a foto em `public/` (por exemplo `public/retrato.jpg`) e troque o bloco
indicado em `src/pages/Sobre.jsx` por `<img src="/retrato.jpg" alt="Retrato de ..." />`.

## Estrutura

```
src/
  data/profissional.js   dados do profissional (edite aqui)
  styles/tokens.css      cores, fontes, espaçamentos (tema claro e escuro)
  styles/global.css      base, grade, botões, rótulos
  components/            cabeçalho, rodapé, grade cartográfica, linhas de fuga,
                         prancha de paisagem, bloco de contato, botões
  pages/                 uma página por aba, cada uma com seu CSS
```

## Publicação

O site usa rotas no navegador (`/sobre`, `/contato`...). Ao hospedar, configure o servidor para
devolver `index.html` em qualquer endereço. Na Vercel e na Netlify isso já funciona com um
arquivo de redirecionamento; na Netlify, `public/_redirects` já está incluído.
