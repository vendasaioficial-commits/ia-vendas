# IA VENDAS — Landing Page

Landing page comercial do infoproduto **IA VENDAS**, construída com React + Vite + Tailwind CSS.

## Como instalar

```bash
npm install
```

## Como rodar em desenvolvimento

```bash
npm run dev
```

Acesse o endereço mostrado no terminal (normalmente `http://localhost:5173`).

## Como gerar a versão de produção

```bash
npm run build
```

Os arquivos finais ficam na pasta `dist/`, prontos para publicar em qualquer hospedagem estática
(Vercel, Netlify, Cloudflare Pages, etc).

## Onde alterar o link de checkout (Kiwify)

Todo o site usa uma única variável para os botões de compra. Abra:

```
src/config.js
```

e troque:

```js
export const CHECKOUT_URL = '#'
```

pelo link do seu checkout, por exemplo:

```js
export const CHECKOUT_URL = 'https://pay.kiwify.com.br/SEU-LINK-AQUI'
```

Todos os botões "Quero acessar" do site (header, hero, oferta, CTA final e menu mobile) vão apontar
automaticamente para esse link.

## O que ainda precisa ser preenchido

Alguns campos foram deixados como placeholder porque dependem de decisões suas ou da plataforma de
pagamento escolhida:

- `src/config.js` — link de checkout (`CHECKOUT_URL`)
- `src/components/Footer.jsx` — razão social / CNPJ / dados legais
- `src/components/Footer.jsx` — links de "Termos de Uso" e "Política de Privacidade" (hoje apontam para `#`)
- `src/components/FAQ.jsx` — respostas marcadas com `[A confirmar conforme a plataforma de pagamento]`
- `index.html` e `public/` — uma imagem real para `og:image` (hoje aponta para `/og-image.png`, que não existe ainda)

## Estrutura do projeto

```
src/
├── components/
│   ├── Header.jsx        → menu fixo + hambúrguer no mobile
│   ├── Hero.jsx           → primeira tela, headline e mockup do produto
│   ├── Problem.jsx        → seção de identificação do problema
│   ├── Solution.jsx       → apresentação da solução + fluxo do processo
│   ├── Method.jsx         → os 7 módulos do método
│   ├── PromptLibrary.jsx  → biblioteca de prompts por categoria
│   ├── Bonuses.jsx        → bônus inclusos
│   ├── Offer.jsx          → percepção de valor + preço + CTA
│   ├── Audience.jsx       → "para quem é" e "para quem não é"
│   ├── FAQ.jsx            → perguntas frequentes (acordeão)
│   ├── FinalCTA.jsx       → chamada final
│   ├── Footer.jsx         → rodapé
│   └── Reveal.jsx         → wrapper de animação de entrada ao rolar a página
│
├── App.jsx                → monta a página, na ordem da jornada de venda
├── main.jsx                → ponto de entrada do React
├── index.css                → estilos globais + Tailwind
└── config.js                 → CHECKOUT_URL, preço e nome do produto
```

## O que fazer depois

1. Rode `npm install` e `npm run dev` para conferir a página localmente.
2. Substitua `CHECKOUT_URL` em `src/config.js` pelo seu link da Kiwify.
3. Preencha os dados legais e links do rodapé.
4. Adicione uma imagem real em `public/og-image.png` para o compartilhamento em redes sociais (1200×630px).
5. Rode `npm run build` e publique a pasta `dist/` na hospedagem de sua escolha.
