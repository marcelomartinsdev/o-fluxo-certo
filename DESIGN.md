---
name: "O Fluxo Certo"
description: "Sistema visual técnico para transformar rastros de mercado em decisões legíveis."
colors:
  ink: "#030504"
  ink-soft: "#050806"
  graphite: "#08100c"
  graphite-2: "#0d1711"
  paper: "#f4f6f4"
  paper-dim: "#dfe5e1"
  muted: "#a7b0aa"
  signal: "#15e575"
  signal-deep: "#00c95b"
  signal-hover: "#35f58e"
  risk: "#e18a7f"
  line: "rgba(167, 176, 170, 0.18)"
  line-strong: "rgba(167, 176, 170, 0.35)"
  proof-canvas: "#e9ecea"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(4.4rem, 7.25vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(3.25rem, 6.2vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(1.65rem, 3vw, 2.7rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.65rem"
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: "0.1em"
rounded:
  action: "12px 3px 12px 12px"
  action-compact: "9px 2px 9px 9px"
  frame: "14px"
  circular: "50%"
  pill: "999px"
spacing:
  control-sm: "12px"
  control-md: "20px"
  control-lg: "28px"
  shell-mobile: "16px"
  shell-tablet: "20px"
  shell-desktop: "24px"
  section-mobile: "120px"
  section-desktop: "180px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.action}"
    padding: "0 28px"
    height: "58px"
  button-primary-hover:
    backgroundColor: "{colors.signal-hover}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.action}"
    padding: "0 28px"
    height: "58px"
  button-header:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.action-compact}"
    padding: "0 19px"
    height: "42px"
  button-inverse:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.action}"
    padding: "0 28px"
    height: "58px"
  link-text:
    backgroundColor: "transparent"
    textColor: "{colors.signal}"
    typography: "{typography.label}"
    rounded: "0"
    padding: "0"
  nav-brand:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    padding: "0 24px"
    height: "86px"
  card-proof:
    backgroundColor: "{colors.proof-canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.frame}"
    padding: "0"
  control-circular:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.circular}"
    size: "42px"
  pipeline-step:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.title}"
    rounded: "0"
    padding: "48px 24px"
  disclosure:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.title}"
    rounded: "0"
    padding: "0"
    height: "94px"
---

# Design System: O Fluxo Certo

## Overview

**Creative North Star: "A Bancada de Calibração do Fluxo"**

O mercado deixa um rastro legível, e a interface trata cada trecho da rolagem como uma bancada onde esse rastro é observado, medido e explicado. A atmosfera nasce de vidro óptico preto, grafite técnico, off-white e um verde-sinal raro; fotografia e gráficos se fundem ao campo, enquanto linhas, escalas e números tornam a leitura disciplinada sem transformar o produto em ficção científica.

A voz visual é técnica, humana, sóbria e premium. A densidade alterna grandes afirmações editoriais com áreas de respiro e instrumentos compactos. Painéis aparecem apenas quando carregam evidência, regras ou estado; a página recusa tanto a neutralidade de um template genérico quanto a teatralidade neon de um funil cripto.

**Key Characteristics:**

- Contraste profundo com sinal verde raro e funcional.
- Tipografia condensada de alta presença apoiada por texto humano e legível.
- Linhas medidas, escalas, rastros e numeração como gramática recorrente.
- Fotografia real fundida à instrumentação, sem molduras promocionais gratuitas.
- Prova técnica identificada com transparência, nunca convertida em promessa.

## Colors

A paleta se comporta como uma bancada escura: neutros quase pretos constroem profundidade, off-whites preservam leitura e o verde indica somente direção, ação ou estado confirmado.

### Primary

- **Verde-Sinal:** reservado para CTAs, trajetórias vivas, marcadores de processo e estados ativos.
- **Verde-Sinal Profundo:** sustenta progressos, scrollbars e traços que precisam de menos luminosidade.
- **Verde de Ativação:** aparece no hover das ações principais e somente nesse estado de resposta.

### Secondary

- **Risco Contido:** marca contrapontos, falhas e negativas sem competir com o sinal principal.

### Neutral

- **Vidro Óptico Preto:** campo dominante, base do hero e fundo de componentes.
- **Preto Suave:** camada imediatamente acima do campo e superfície do diálogo.
- **Grafite Técnico:** superfície de prova e variação tonal de seção.
- **Grafite de Calibração:** camada de apoio para risco e estados inversos.
- **Papel de Leitura:** texto principal e foco de alto contraste.
- **Papel Atenuado:** grande superfície clara e texto de apoio sobre fundos escuros.
- **Cinza de Instrumento:** metadados, microcopy e informação secundária.
- **Linha Medida / Linha Medida Forte:** divisores de baixa opacidade; organizam sem formar caixas pesadas.
- **Tela de Evidência:** fundo claro reservado ao conteúdo técnico dos registros.

### Named Rules

**The One Signal Rule.** O verde aparece em uma fração pequena da tela e sempre significa direção, ação, progresso ou confirmação; sua raridade é parte da hierarquia.

**The No Gradient Type Rule.** Gradientes pertencem à luz, à profundidade e aos rastros — nunca ao preenchimento tipográfico.

## Typography

**Display Font:** Barlow Condensed (com fallback sans-serif)  
**Body Font:** Manrope (com fallback sans-serif)

**Character:** Barlow Condensed comprime energia editorial em blocos incisivos, enquanto Manrope desacelera a leitura e mantém explicações, ressalvas e microcopy humanas. O contraste entre as duas famílias substitui ornamento.

### Hierarchy

- **Display** (700, fluido de 4.4rem a 6rem, 0.88): hero e frases de decisão; poucas palavras, quebras deliberadas e contraste de cor pontual.
- **Headline** (700, fluido de 3.25rem a 6rem, 0.94): títulos de seção com presença editorial e largura controlada.
- **Title** (600, fluido de 1.65rem a 2.7rem, 1): registros, etapas e perguntas; mantém a voz condensada em escala funcional.
- **Body** (400, 1rem, 1.65): explicações e contexto, normalmente limitados a 70ch.
- **Label** (700, 0.65rem, 0.1em, caixa alta): índices, controles, estados e metadados de instrumento.

### Named Rules

**The Legibility Before Drama Rule.** Use a condensada para decisão e estrutura; qualquer explicação, limitação ou prova permanece em Manrope com entrelinha confortável.

## Layout

O shell principal alcança 1440px com 24px de respiro lateral. Abaixo de 1120px, ele passa a 1024px com 20px; até 820px, torna-se uma coluna fluida com 16px. Seções editoriais usam ritmo vertical amplo — tipicamente 150–180px no desktop e cerca de 110–120px no mobile — e grids assimétricos que colocam tese e evidência em tensão, não em cartões equivalentes.

O primeiro viewport é a expressão mais explícita da bancada: copy no terço esquerdo, Antony dominando o campo direito, traço vivo costurando os dois e CTA antes da dobra. Isso é uma composição de abertura, não um template para todas as telas. Em mobile, a ordem narrativa é preservada, a fotografia migra para trás da copy, os grids empilham e o CTA passa a ocupar a largura útil.

Galerias de prova permanecem trilhos horizontais: aproximadamente 68vw por registro no desktop e 88–90vw no mobile. Processos podem usar cinco colunas medidas no desktop, mas viram uma sequência vertical contínua abaixo de 820px.

### Named Rules

**The Calibrated Rhythm Rule.** Cada bloco precisa parecer medido por alinhamentos, linhas ou intervalos; não preencha o espaço vazio com cards repetidos.

## Elevation & Depth

O sistema é plano por padrão e constrói profundidade por camadas tonais, vinhetas, transparência e vidro óptico. Sombras ambientais aparecem somente quando uma ação responde, quando uma prova precisa se separar do trilho ou quando um diálogo realmente se eleva sobre o documento.

### Shadow Vocabulary

- **Ação em repouso** (`0 18px 50px rgba(0, 201, 91, 0.2)`): halo difuso sob o CTA verde.
- **Ação em hover** (`0 24px 62px rgba(0, 201, 91, 0.28)`): elevação breve combinada ao deslocamento vertical.
- **Prova sobre trilho** (`0 28px 70px rgba(0, 0, 0, 0.28)`): separa o registro claro do grafite sem transformá-lo em card decorativo.
- **Diálogo modal** (`0 40px 120px rgba(0, 0, 0, 0.65)`): único nível estrutural alto, reforçado por backdrop escuro e blur.
- **Sinal luminoso** (`0 0 18px rgba(21, 229, 117, 0.35)`): usado apenas em nós, cursores e traços ativos.

### Named Rules

**The Flat-by-Default Rule.** Superfícies em repouso se distinguem por tom, borda e transparência; sombra não é decoração de container.

**The Evidence Earns Elevation Rule.** Somente estado, prova e sobreposição conquistam profundidade física.

## Shapes

A forma dominante é retangular, precisa e levemente assimétrica. CTAs usam um canto superior direito mais agudo, como uma peça calibrada; fotografias, frames de prova e diálogos recebem curvas contidas. Círculos ficam reservados a controles, nós e pontos de leitura, enquanto bordas de 1px funcionam como escalas e divisores.

### Named Rules

**The Measured Corner Rule.** A curva deve indicar função: assimetria para ação, 14px para mídia/prova, círculo para controle e zero para estrutura.

## Components

### Buttons

- **Shape:** peça assimétrica e firme; a ação principal usa raio 12px 3px 12px 12px, enquanto a versão compacta usa 9px 2px 9px 9px.
- **Primary:** verde-sinal sobre vidro preto, altura mínima de 58px, padding horizontal de 28px e label em caixa alta.
- **Hover / Focus:** sobe 3px, clareia para o verde de ativação e amplia o halo; foco visível é um contorno de 3px em papel com offset de 4px.
- **Inverse:** vidro preto sobre seção verde, mantendo forma, peso e comportamento.
- **Text:** verde, sublinhado sutil e ícone diagonal; usado apenas quando a ação é secundária à prova presente.

### Cards / Containers

- **Corner Style:** frames de prova, fotografia e modal usam curva contida de 14px; estruturas de processo permanecem retas.
- **Background:** camadas de preto/grafite para contexto e tela clara somente dentro do registro técnico.
- **Shadow Strategy:** segue a elevação por evidência; containers comuns não recebem sombra.
- **Border:** linha fria de 1px em baixa opacidade.
- **Internal Padding:** legendas usam 28px; painéis instrumentais compactos usam cerca de 18–20px.

### Navigation

O cabeçalho fixo é transparente no topo e assume vidro preto com blur após 24px de rolagem. A marca combina bloco de sinal, Barlow Condensed em caixa alta e autoria discreta; a ação compacta permanece à direita. Em mobile, a autoria e o ícone da ação cedem espaço, mas marca e CTA nunca desaparecem.

### Proof Gallery

O registro técnico é um frame claro em trilho grafite, com controle circular de expansão, scanline discreta, índice verde e legenda que identifica a natureza da evidência. O diálogo preserva o conteúdo inteiro com `object-fit: contain`; não recorta gráficos para parecerem mais dramáticos.

### Calibration Pipeline

Etapas são células conectadas por linhas e nós verdes, numeradas com dígitos tabulares. No desktop formam uma escala horizontal; no mobile, uma sequência vertical com os mesmos conectores e ordem.

### FAQ Disclosure

Perguntas usam uma única linha estrutural, título condensado e ícone verde que gira 45° no estado aberto. A resposta permanece em Manrope e cinza de instrumento; não há card, preenchimento ou sombra.

## Do's and Don'ts

### Do:

- Do reserve o verde para ação, direção, progresso, nó ativo ou confirmação.
- Do use fotografia real fundida ao campo e gráficos corretamente identificados como evidência.
- Do mantenha linhas, escalas, índices e números alinhados como parte da hierarquia.
- Do preserve contraste, foco visível e uma experiência completa com movimento reduzido.
- Do alterne afirmações grandes com áreas de leitura e respiro.

### Don't:

- Don't use layout genérico de IA, grid repetitivo de cards ou painéis sem informação mensurável.
- Don't transforme a interface em funil cripto neon, cassino ou espetáculo de riqueza.
- Don't use gradient text, halos verdes indiscriminados ou sombras em toda superfície.
- Don't fabrique resultados, depoimentos, urgência, garantias ou qualquer aparência de prova real a partir de simulação.
- Don't recorte ou estilize evidência técnica de modo que esconda sua natureza.
