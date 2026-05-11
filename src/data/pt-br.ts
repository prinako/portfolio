import type { PageData } from "./types.ts";
import {
  alternateLanguages,
  sharedSiteInfo,
  technologySets,
} from "./shared.ts";

export const ptBRData: PageData = {
  language: "pt-br",
  htmlLang: "pt-BR",
  stylesheet: "/styles.pt-br.css",
  alternateLanguages,
  siteInfo: {
    ...sharedSiteInfo,
    role: "Estudante de Engenharia da Computação e Desenvolvedor de Software",
    location: "Brasil · Universidade Federal do Pará",
    availability:
      "Criando projetos de pesquisa, aplicativos móveis e infraestrutura",
    focus:
      "visão computacional, aplicativos móveis e sistemas de comunicação resilientes",
    summary:
      "Sou estudante de Engenharia da Computação na UFPA, com experiência em suporte de TI, desenvolvimento de software e pesquisa em reconhecimento de imagens com drones. Meu trabalho conecta produtos móveis práticos, experimentos com IA, infraestrutura baseada em Docker e ferramentas de comunicação offline-first.",
  },
  text: {
    metaDescription:
      "Portfólio profissional de desenvolvedor com foco em pesquisa de IA, comunicação semântica, destilação de conhecimento e infraestrutura self-hosted.",
    navigationAria: "Navegação principal",
    homeAriaSuffix: "início",
    navigation: {
      skills: "Competências",
      projects: "Projetos",
      process: "Processo",
      contact: "Contato",
    },
    heroEyebrow: "Pesquisa em IA + sistemas em produção",
    heroPrimaryAction: "Ver projetos",
    heroSecondaryAction: "Iniciar conversa",
    languageLabel: "Idioma",
    snapshotAria: "Resumo do perfil",
    snapshot: {
      name: "nome",
      focus: "foco",
      stack: "stack",
      status: "status",
    },
    skillsEyebrow: "Competências principais",
    skillsHeading:
      "Base em engenharia da computação com entrega prática de produtos.",
    projectsEyebrow: "Sistemas selecionados",
    projectsHeading:
      "Projetos moldados por necessidades do campus, perguntas de pesquisa e infraestrutura confiável.",
    selectedProject: "Projeto selecionado",
    technologiesAria: "Tecnologias usadas",
    processEyebrow: "Fluxo de trabalho",
    processHeading:
      "Um caminho prático do problema local ao software funcionando.",
    contactEyebrow: "Contato",
    contactHeading:
      "Vamos construir software útil a partir de pesquisa, infraestrutura e necessidades reais.",
    footerSuffix: "Criado com Deno e TypeScript puro.",
  },
  skills: [
    {
      name: "Pesquisa em IA",
      skills: [
        "YOLOv8",
        "Reconhecimento de imagens com drones",
        "Reconhecimento de vegetação",
        "PyTorch",
        "Visão computacional",
        "Prototipagem de pesquisa",
      ],
    },
    {
      name: "Infraestrutura",
      skills: [
        "Docker",
        "Linux",
        "Redes",
        "Sistemas self-hosted",
        "Observabilidade",
      ],
    },
    {
      name: "Engenharia de Software",
      skills: [...technologySets.softwareEngineering],
    },
    {
      name: "Backend e Dados",
      skills: [...technologySets.backendData],
    },
    {
      name: "Mobile e Web",
      skills: [...technologySets.mobileWeb],
    },
  ],
  projects: [
    {
      name: "RU Digital UFPA",
      summary:
        "Aplicativo móvel em Flutter que ajuda estudantes da UFPA a acessar o cardápio diário do Restaurante Universitário, horários de atendimento e notificações de atualização.",
      impact:
        "Construído para um fluxo real do campus, aproximando informações úteis do restaurante universitário dos estudantes em uma experiência móvel focada.",
      technologies: [...technologySets.ruDigital],
    },
    {
      name: "Pesquisa de Reconhecimento de Vegetação",
      summary:
        "Projeto de pesquisa em visão computacional focado no reconhecimento de vegetação usando imagens de drones e YOLOv8.",
      impact:
        "Explora como a IA pode apoiar análises ambientais ao transformar imagens aéreas em fluxos estruturados de reconhecimento.",
      technologies: ["YOLOv8", "Python", "Visão computacional", "Drones"],
    },
    {
      name: "WhyDisconnected",
      summary:
        "Aplicativo de comunicação offline e online construído com Socket.io e WebRTC para cenários de conectividade local-first.",
      impact:
        "Investiga padrões de comunicação resilientes para momentos em que o acesso convencional à internet não é confiável.",
      technologies: [...technologySets.whyDisconnected, "Redes"],
    },
    {
      name: "RU Server Docker",
      summary:
        "Trabalho de servidor baseado em Docker para o RU Digital UFPA, focado em servir dados atualizados de cardápio e atendimento.",
      impact:
        "Conecta a entrega de produto móvel a uma infraestrutura backend sustentável para um serviço voltado aos estudantes.",
      technologies: [...technologySets.ruServerDocker],
    },
  ],
  experience: [
    {
      stage: "01",
      title: "Investigar problemas reais",
      description:
        "Partir de contextos práticos como serviços do campus, comunicação offline e reconhecimento de imagens com drones.",
    },
    {
      stage: "02",
      title: "Prototipar com a stack certa",
      description:
        "Usar Flutter, Python, Docker, Linux, Node.js e ferramentas de rede para sair do conceito e chegar a um sistema funcional.",
    },
    {
      stage: "03",
      title: "Publicar, manter e melhorar",
      description:
        "Manter projetos úteis depois do lançamento com cuidado de infraestrutura, documentação e evolução contínua de funcionalidades.",
    },
  ],
};
