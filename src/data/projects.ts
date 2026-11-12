export interface ShowcaseProject {
  slug: string;
  repoUrl: string;
  demoUrl: string | null;
  stack: string[];
  screenshots: string[];
}

export const PROJECTS: ShowcaseProject[] = [
  {
    slug: "prospec-man",
    repoUrl: "https://github.com/silassantos21/prospec-man",
    demoUrl: null,
    stack: ["Python", "FastAPI", "Claude", "Groq Whisper", "Next.js", "Expo"],
    screenshots: [
      "01-tela-inicial.png",
      "02-geracao-ia.png",
      "03-resultado.png",
      "04-historico.png",
    ],
  },
  {
    slug: "rotineira-app",
    repoUrl: "https://github.com/silassantos21/rotineira-app",
    demoUrl: null,
    stack: ["React Native", "Expo", "FastAPI", "Gemini", "Supabase"],
    screenshots: [
      "01-login.png",
      "02-home.png",
      "03-cardapio-semanal.png",
      "04-cardapio-porcoes-por-membro.png",
      "05-lista-compras.png",
      "06-guia-montagem.png",
    ],
  },
  {
    slug: "nucleo-estar-bem",
    repoUrl:
      "https://github.com/silassantos21/clinica-estar-bem/tree/main/clientes/clinica-estar-bem/sistema",
    demoUrl: "https://clinica-estar-bem-sigma.vercel.app",
    stack: ["Next.js", "Fastify", "Supabase", "SendGrid", "Baileys"],
    screenshots: [
      "01-login.png",
      "02-dashboard-admin.png",
      "03-salas.png",
      "04-bloqueios.png",
      "05-relatorios.png",
      "06-profissionais.png",
      "07-dashboard-psicologo.png",
      "08-nova-reserva.png",
    ],
  },
  {
    slug: "magnus-imoveis",
    repoUrl: "https://github.com/silassantos21/magnus-imoveis",
    demoUrl: "https://magnus-imoveis.vercel.app",
    stack: ["HTML5", "CSS3", "JavaScript", "Supabase", "Cloudinary"],
    screenshots: [
      "01-home.png",
      "02-detalhes-imovel.png",
      "03-login-admin.png",
      "04-painel-admin.png",
      "05-trabalhe-conosco.png",
    ],
  },
  {
    slug: "mapinha",
    repoUrl: "https://github.com/silassantos21/map-pinha",
    demoUrl: "https://mapinha-iota.vercel.app",
    stack: ["Next.js", "FastAPI", "PostGIS", "Claude", "Leaflet"],
    screenshots: [
      "01-mapa-inicial.png",
      "02-criar-poi.png",
      "03-poi-detalhe.png",
      "04-rota.png",
      "05-perfil.png",
      "06-pagina-publica.png",
      "07-mobile-mapa.png",
    ],
  },
];
