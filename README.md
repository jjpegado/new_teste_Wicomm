# AMAKHA - HOME | Teste Wicomm

Reprodução responsiva da página inicial da AMAKHA, desenvolvida como teste técnico para a Wicomm, utilizando HTML5, CSS puro e TypeScript.

O projeto foi organizado em componentes independentes, com foco em organização, responsividade e funcionalidades de navegação e interação.

## Tecnologias utilizadas

- HTML5
- CSS3
- TypeScript
- Vite
- Node.js
- npm

## Histórico de desenvolvimento — 5 fases

### Fase 1 — Inicialização e estrutura do projeto

**Commit:** `chore: inicializa estrutura do projeto`

Nesta primeira etapa foi realizada a configuração inicial do projeto e a organização dos arquivos.

Implementações:
- Configuração do ambiente com Vite e TypeScript.
- Criação da estrutura inicial de pastas.
- Configuração do arquivo `index.html`.
- Definição dos pontos de montagem para Header, Main e Footer.
- Organização inicial dos arquivos e dependências.

### Fase 2 — Desenvolvimento do Header

**Commit:** `feat(header): implementa cabeçalho da página`

Nesta etapa foi desenvolvido o cabeçalho da página, incluindo os principais elementos de navegação.

Implementações:
- Estrutura HTML do cabeçalho.
- Logotipo e elementos de navegação.
- Campo de pesquisa.
- Botões de conta e carrinho.
- Menu responsivo para dispositivos móveis.
- Implementação das interações do cabeçalho com TypeScript.

### Fase 3 — Desenvolvimento do Main

**Commit:** `feat(main): implementa conteúdo principal e vitrines`

Nesta etapa foi desenvolvido o conteúdo principal da página, incluindo banners, vitrines e apresentação dos produtos.

Implementações:
- Banner principal (Hero).
- Seções promocionais e benefícios.
- Vitrines de produtos.
- Renderização dinâmica dos cards utilizando TypeScript.
- Catálogo demonstrativo de produtos.
- Carrosséis com navegação por setas.
- Navegação horizontal adaptada para dispositivos móveis.
- Seções de banners e conteúdo do blog.

### Fase 4 — Desenvolvimento do Footer

**Commit:** `feat(footer): implementa rodapé da página`

Nesta etapa foi desenvolvido o rodapé, complementando a estrutura visual da página.

Implementações:
- Estrutura HTML do Footer.
- Seções institucionais.
- Área de redes sociais.
- Formulário demonstrativo de newsletter.
- Informações de pagamento.
- Informações complementares e direitos autorais.
- Organização das imagens utilizadas no rodapé.

### Fase 5 — Implementação do Carrinho e finalização

**Commit:** `feat(cart): implementa carrinho e finaliza projeto`

Nesta última etapa foram implementadas as funcionalidades do carrinho e realizados os ajustes finais do projeto.

Implementações:
- Adicionar produtos ao carrinho através dos cards.
- Abertura automática do carrinho após adicionar um produto.
- Atualização dinâmica do contador de itens.
- Exibição de imagem, nome, quantidade e subtotal.
- Cálculo automático do valor total.
- Remoção de produtos do carrinho.
- Abertura e fechamento do painel lateral.
- Ajustes de responsividade e organização final.
- Revisão da estrutura e funcionamento da página.

## Como executar o projeto

### Pré-requisitos

É necessário ter instalado:

- [Node.js](https://nodejs.org/)
- npm (instalado junto com o Node.js).

### Instalação

Abra o terminal na pasta raiz do projeto e execute:

```bash
npm install
```

### Executar em desenvolvimento

```bash
npm run dev
```

Após iniciar o Vite, abra no navegador o endereço local exibido no terminal, normalmente:

```text
http://localhost:5173/
```

### Gerar versão de produção

```bash
npm run build
```

### Visualizar versão de produção

```bash
npm run preview
```

## Organização das pastas

```text
amakha-wicomm-v2/
├── index.html
├── public/
│   └── images/
│       ├── header/
│       ├── main/
│       │   ├── banners/
│       │   ├── blog/
│       │   └── products/
│       └── footer/
├── src/
│   ├── partials/
│   │   ├── header.html
│   │   ├── main.html
│   │   └── footer.html
│   ├── styles/
│   │   └── main.css
│   └── ts/
│       ├── components/
│       │   ├── cart.ts
│       │   ├── header.ts
│       │   ├── main.ts
│       │   └── products.ts
│       ├── data/
│       │   └── products.ts
│       └── main.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
```

## Funcionalidades implementadas

- Layout responsivo para diferentes tamanhos de tela.
- Header com menu e campo de pesquisa.
- Vitrines com navegação por carrossel.
- Cards de produtos com interação.
- Carrinho lateral com atualização dinâmica.
- Cálculo de quantidade, subtotal e total.
- Remoção de produtos do carrinho.
- Footer com newsletter e informações institucionais.
