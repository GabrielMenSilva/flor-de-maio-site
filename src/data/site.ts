// Todo o conteúdo editável do site fica aqui.

// Enquanto o cliente apenas revisa, o site fica oculto para buscadores (noindex).
// Ao lançar de verdade, troque para true e ajuste public/robots.txt (veja o README).
export const indexavel = false;

// Prefixa caminhos de public/ com o base do Astro (ex.: /flor-de-maio-site/videos/...).
export const comBase = (caminho: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${caminho.replace(/^\//, "")}`;

export const site = {
  nome: "Flor de Maio Festas e Eventos",
  nomeCurto: "Flor de Maio",
  subtitulo: "festas e eventos",
  descricao:
    "Salão de festas em Curitiba/PR, no Capão da Imbuia. Espaço completo para aniversários, festas de 15 anos, casamentos e outras celebrações.",

  endereco: {
    rua: "Rua Sebastião Francisco Correia, 14",
    bairro: "Capão da Imbuia",
    cidade: "Curitiba",
    uf: "PR",
    cep: "82810-090",
    lat: -25.4371098,
    lng: -49.218725,
  },
  whatsapp: {
    exibicao: "(41) 99238-4225",
    tel: "+5541992384225",
    link: "https://wa.me/5541992384225?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Flor%20de%20Maio%20Festas%20e%20Eventos.",
  },
  instagram: {
    usuario: "@flordemaiofestaseventos",
    link: "https://www.instagram.com/flordemaiofestaseventos",
  },

  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Espaço", href: "#espaco" },
    { label: "Eventos", href: "#eventos" },
    { label: "Sobre nós", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ],

  hero: {
    frase: "Seu evento pode ser mais especial na Flor de Maio",
    subtitulo:
      "Um espaço completo para celebrar seus momentos mais importantes em Curitiba.",
  },

  espaco: {
    titulo: "O Espaço",
    texto:
      "Um lugar novo, pensado para receber quem você ama com conforto e cuidado. Cada ambiente foi planejado para que a sua celebração aconteça com leveza, do primeiro convidado ao último brinde.",
    localizacao: "Capão da Imbuia, Curitiba/PR",
    // icone: nome definido em src/components/Icon.astro
    // Vídeos do espaço: arquivos em public/videos/espaco/
    videos: [
      { arquivo: "videoespaco.mp4", legenda: "Visão geral do espaço" },
      { arquivo: "cozinha.mp4", legenda: "Cozinha" },
      { arquivo: "banheiro.mp4", legenda: "Banheiros" },
      { arquivo: "playgroud.mp4", legenda: "Playground" },
      { arquivo: "brinquedosexterno.mp4", legenda: "Brinquedos externos" },
      { arquivo: "faixa.mp4", legenda: "Área da faixa" },
    ] as { arquivo: string; poster?: string; legenda: string }[],
    comodidades: [
      { icone: "users", titulo: "Capacidade", texto: "Até 80 convidados" },
      { icone: "car", titulo: "Estacionamento", texto: "Para você e seus convidados" },
      { icone: "playground", titulo: "Playground", texto: "Diversão para as crianças" },
      { icone: "grill", titulo: "Churrasqueira", texto: "Para reunir a família" },
      { icone: "dice", titulo: "Mesas de jogos", texto: "Entretenimento para todas as idades" },
    ],
  },

  eventos: {
    titulo: "Eventos que já celebramos",
    texto: "Alguns momentos especiais que aconteceram aqui.",
    // Fotos: basta colocar arquivos em src/assets/eventos/ (ordem alfabética).
    // Vídeos: coloque o arquivo em public/videos/eventos/ e liste abaixo.
    // poster (opcional): nome de uma imagem na mesma pasta, ex.: "aniversario1ano.jpg".
    videos: [
      { arquivo: "aniversario1ano.mp4", poster: "", legenda: "Aniversário de 1 ano" },
      { arquivo: "aniversario10anos.mp4", poster: "", legenda: "Aniversário de 10 anos" },
      { arquivo: "aniversario50anos.mp4", poster: "", legenda: "Aniversário de 50 anos" },
      { arquivo: "decoracaobranca.mp4", poster: "", legenda: "Decoração branca" },
    ] as { arquivo: string; poster?: string; legenda: string }[],
  },

  sobre: {
    titulo: "Sobre nós",
    destaque:
      "Flor de maio é vista como um símbolo de amor e gratidão. Ela pode ser oferecida como presente a alguém que amamos ou que queremos agradecer por algo especial.",
    paragrafos: [
      "É com esse espírito que o Flor de Maio recebe cada evento: com carinho, atenção e vontade de fazer parte do seu momento.",
      "O espaço é novo e foi planejado nos detalhes. Nosso atendimento é próximo e acolhedor, e ajudamos na organização da festa e na indicação de fornecedores.",
      "Aniversários, festas de 15 anos, casamentos e outras celebrações encontram aqui o lugar certo para virar lembrança.",
    ],
  },

  contato: {
    titulo: "Contato",
    texto: "Fale com a gente e conte como é a sua festa.",
  },
};

export const enderecoCompleto = `${site.endereco.rua}, ${site.endereco.bairro}, ${site.endereco.cidade}/${site.endereco.uf}, CEP ${site.endereco.cep}`;

const consultaMapa = encodeURIComponent(
  "Flor de Maio festas e eventos, Rua Sebastião Francisco Correia, 14, Capão da Imbuia, Curitiba - PR, 82810-090",
);
export const mapaEmbed = `https://www.google.com/maps?q=${consultaMapa}&ll=${site.endereco.lat},${site.endereco.lng}&z=16&output=embed`;
export const mapaLink = `https://www.google.com/maps/search/?api=1&query=${consultaMapa}`;
