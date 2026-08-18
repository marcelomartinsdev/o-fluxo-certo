# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js estável com App Router, React, TypeScript e ESLint. A implementação deve usar `next/image`, `next/font` e uma interface customizada, sem biblioteca genérica de componentes.

## Users

Pessoas que já têm familiaridade ou curiosidade real sobre trading, muitas das quais já estudaram métodos, tomaram stops, hesitaram, entraram atrasadas ou perceberam interferência emocional na execução.

## Product Purpose

O Fluxo Certo é o método desenvolvido por Antony para acompanhar o fluxo do mercado e executar uma estratégia segundo critérios definidos. A landing page tem um único objetivo: levar o visitante ao grupo oficial de WhatsApp, onde acontecerá uma aula/reunião de apresentação do robô com posterior oferta de compra.

## Positioning

Em vez de tentar adivinhar quando o mercado está caro ou barato, a abordagem acompanha a força indicada pelo fluxo. O robô transforma essa leitura em execução automatizada, com regras e cálculo automático de risco, reduzindo interferência emocional sem prometer acerto ou rentabilidade.

## Operating Context

O visitante chega por uma campanha, conhece a história e a lógica de Antony, vê registros técnicos identificados corretamente e entra no grupo de WhatsApp para receber as informações da apresentação. A landing page não vende o robô diretamente, não usa formulário e não divulga preço, configuração completa ou parâmetros da estratégia.

## Capabilities and Constraints

- Todo CTA principal usa `NEXT_PUBLIC_WHATSAPP_GROUP_URL` por um helper único e recebe `data-cta-location`.
- A página prepara GA, GTM e Meta Pixel por variáveis opcionais sem quebrar quando ausentes.
- UTMs são preservadas no clique para o WhatsApp.
- Não há data confirmada, countdown, preço, URL de grupo ou domínio canônico fornecidos.
- A aula não será chamada de gratuita até confirmação explícita.
- Não inventar resultados, depoimentos, membros, urgência, parcerias, regulamentação ou garantias financeiras.
- Backtests e simulações devem ser identificados como tais; os registros disponíveis não serão apresentados como conta real.
- Não fazer deploy sem autorização do usuário.

## Brand Commitments

- Nome público confirmado: Antony.
- Marca e método: O Fluxo Certo.
- Voz: confiante, direta, inteligente, provocadora e transparente; nunca guru, cassino ou enriquecimento rápido.
- Paleta vinculante: preto profundo, grafite, off-white e verde `#15E575`/`#00C95B` usado como sinal, direção e ação.
- A imagem panorâmica criada para o hero, `imagens/ChatGPT Image 17 de ago. de 2026, 11_54_58.png`, é a direção visual obrigatória do hero desktop.

## Evidence on Hand

- Sete fotografias de Antony em `imagens/`, incluindo a composição panorâmica do hero.
- Duas referências locais em `imagens/inspiracao.jpg` e `imagens/inspiracao2.jpg`.
- Seis registros técnicos em `imagens/imagens operacao/`: relatórios/curvas de backtest e telas do indicador no TradingView.
- Três transcrições da história e visão de mercado de Antony em `transcricoes/TurboScribe Export 265559730/`.
- Não há depoimentos, números de alunos/membros, certificação, comprovação de operação real ou dados jurídicos fornecidos.

## Product Principles

1. Persuadir com mecanismo, demonstração e transparência, nunca com promessa de retorno.
2. Fazer uma única ação dominar a jornada: entrar no grupo para participar da apresentação.
3. Tornar a diferença entre decisão emocional e execução por regras imediatamente compreensível.
4. Usar a história e os materiais reais de Antony como autoridade, sem fabricar prova social.
5. Manter risco e limitações legíveis como parte da credibilidade do produto.

## Accessibility & Inclusion

Contraste AA sempre que possível, navegação por teclado, foco visível, semântica correta, áreas de toque grandes e experiência completa com `prefers-reduced-motion`.
