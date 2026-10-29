# Flor de Maio Festas e Eventos

Site institucional de um salão de festas em Curitiba/PR. Feito com Astro e Tailwind, 100% estático (sem backend).

Versão de revisão no ar: https://GabrielMenSilva.github.io/flor-de-maio-site/ (oculta para o Google enquanto o cliente revisa).

## Como rodar

```
npm install
npm run dev      # desenvolvimento: http://localhost:4321/flor-de-maio-site/
npm run build    # gera a pasta dist/
npm run preview  # testa o build
```

Em desenvolvimento e no preview, o site responde no subcaminho `/flor-de-maio-site/` (por causa do `base` em `astro.config.mjs`).

## Onde ficam fotos, vídeos e textos

| O quê | Onde |
| --- | --- |
| Logo (também no favicon e no rodapé) | `src/assets/logo.jpg` |
| Foto da fachada (topo) | `src/assets/hero.webp` |
| Fotos do espaço | `src/assets/espaco/` (ordem alfabética: `01-`, `02-`...) |
| Fotos de eventos | `src/assets/eventos/` (idem) |
| Vídeos e posters | `public/videos/espaco/` e `public/videos/eventos/` |
| Textos, links, comodidades, lista de vídeos | `src/data/site.ts` |
| Intensidade das animações | topo de `src/styles/motion.css` |

Fotos novas aparecem sozinhas. Vídeos novos precisam ser listados em `src/data/site.ts`.

Animações: se o sistema do visitante estiver com "reduzir movimento" ativo, o site fica sem animação. Para conferir as animações assim mesmo, abra o site com `?animacao=on` (`?animacao=off` desfaz).

## Atualizar o site no ar

Cada push na branch `main` publica automaticamente (GitHub Actions, em 1 a 2 minutos):

```
git add .
git commit -m "Descreva a alteração"
git push
```

O andamento aparece na aba Actions do repositório.

## Liberar a indexação do Google (ao lançar de verdade)

Hoje o site está oculto para buscadores. Para liberar:

1. Em `src/data/site.ts`, troque `indexavel` para `true` (remove a meta `noindex`).
2. Em `public/robots.txt`, troque `Disallow: /` por `Allow: /` e, se quiser, adicione a linha `Sitemap:` com o endereço final.
3. Opcional: instale `@astrojs/sitemap` (`npm i @astrojs/sitemap`) e ative a integração em `astro.config.mjs`.
4. Faça commit e push.

## Migrar para domínio próprio

1. Em `astro.config.mjs`, ajuste `site` para o domínio (ex.: `https://www.flordemaio.com.br`) e remova a linha `base` (ou use `base: '/'`).
2. Crie o arquivo `public/CNAME` com o domínio, em uma linha (ex.: `www.flordemaio.com.br`).
3. No DNS do domínio, aponte um registro CNAME de `www` para `GabrielMenSilva.github.io` (para domínio sem `www`, use os registros A indicados na documentação do GitHub Pages).
4. Em Settings → Pages do repositório, informe o domínio e marque "Enforce HTTPS".
5. Faça commit e push.
