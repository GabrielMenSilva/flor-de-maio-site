// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
// Quando o site for indexável: npm i @astrojs/sitemap, descomente o import e a integração.
// import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Site de projeto no GitHub Pages. Com domínio próprio: site = 'https://SEU-DOMINIO.com.br' e remova o base.
  site: 'https://GabrielMenSilva.github.io',
  base: '/flor-de-maio-site',
  // integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
