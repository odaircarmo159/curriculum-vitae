import { Link } from "react-router-dom";
import { SiteHeader } from "../componentes/SiteHeader";
import { SiteFooter } from "../componentes/SiteFooter";

const projects = [
  {
    id: "01",
    title: "UISync",
    summary: "ERP voltada à organização de rotinas internas, centralização de informações e suporte às demandas operacionais do dia a dia.",
    description:
      "Projeto interno voltado à otimização de processos, organização de fluxos operacionais e visualização inteligente de informações, unindo clareza na interface, usabilidade e eficiência para o ambiente corporativo.",
    stack: ["JavaScript", "React", "SQL Server", "Node.js"],
    githubUrl: "#",
    contributors: [{ name: "Odair Carmo", linkedinUrl: "https://www.linkedin.com/in/odair-carmo-463984218/" }],
  },
  {
    id: "02",
    title: "Dashboards gerenciais em Power BI",
    summary: "Painel voltado à análise de indicadores e acompanhamento de dados para apoiar decisões com mais rapidez e segurança.",
    description:
      "Modelagem de dados, organização de métricas e construção de relatórios visuais para transformar dados brutos em informação útil para gestão e operação.",
    stack: ["Power BI", "DAX", "SQL", "Análise de Dados"],
    githubUrl: "#",
    contributors: [{ name: "Odair Carmo", linkedinUrl: "https://www.linkedin.com/in/odair-carmo-463984218/" },{ name: "Mario Henrique", linkedinUrl: "https://www.linkedin.com/in/mario-henrique-fonseca-36a073283/" }],
  },
  {
    id: "03",
    title: "Caramelando",
    summary:
      "Plataforma desenvolvida para conectar ONGs, adotantes e doadores, facilitando o processo de adoção responsável e divulgação de animais.",
    description:
      "Sistema voltado à adoção de animais, reunindo funcionalidades para cadastro, divulgação e gerenciamento de pets disponíveis para adoção. O projeto busca aproximar ONGs e adotantes por meio de uma interface acessível, intuitiva e focada em impacto social.",
    stack: ["JavaScript", "React", "Node.js"],
    githubUrl: "https://github.com/odaircarmo159/Caramelando",
    contributors: [{ name: "Odair Carmo", linkedinUrl: "https://www.linkedin.com/in/odair-carmo-463984218/", },{ name: "Stefany Zaia", linkedinUrl: "https://www.linkedin.com/in/stefanyzaia/", }, { name: "Ana Beatriz", linkedinUrl: "https://www.linkedin.com/in/ana-beatriz-leduino-braga-b84272200/", }],
  },
  {
    id: "04",
    title: "Logística Interna",
    summary:
      "Sistema desktop desenvolvido para gestão e controle operacional de pátio dentro da unidade industrial.",
    description:
      "Aplicação interna criada para otimizar os processos de logística e movimentação no pátio da unidade, centralizando informações operacionais, controle de fluxo e acompanhamento das atividades em tempo real. O projeto foi desenvolvido com foco em praticidade, confiabilidade e suporte às demandas do ambiente industrial.",
    stack: ["Python", "PySide6", "SQL"],
    githubUrl: "#",
    contributors: [
      {
        name: "Odair Carmo",
        linkedinUrl: "https://www.linkedin.com/in/odair-carmo-463984218/",
      },
      {
        name: "Jean Carlo",
        linkedinUrl: "https://www.linkedin.com/in/jean-carlo-astor/?locale=pt",
      },
    ],
  }
];

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="pt-36 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">[ /projetos ]</p>
        <h1 className="mt-4 font-display font-bold text-6xl md:text-8xl leading-[0.95]">
          Projetos com
          <br />
          <span className="text-stroke">estrutura e resultado</span>.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Uma seleção de trabalhos com foco em produto, dados, operação e experiência.
          A ideia aqui é mostrar contexto, contribuição, stack e links úteis sem perder a identidade visual do site.
        </p>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-24 space-y-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-[2rem] border border-border bg-white/75 p-8 md:p-10 shadow-[0_20px_60px_rgba(15,23,42,0.05)] backdrop-blur-sm"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-primary text-primary-foreground px-3 font-mono text-xs">
                    {project.id}
                  </span>
                </div>

                <h2 className="mt-5 font-display text-3xl md:text-4xl font-bold text-foreground">
                  {project.title}
                </h2>

                <p className="mt-4 text-lg text-foreground/85 leading-relaxed">
                  {project.summary}
                </p>

                <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                GitHub ↗
              </a>
            </div>

            <div className="mt-8 grid gap-8 border-t border-border pt-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Stack
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="inline-flex h-11 w-[180px] items-center justify-center rounded-full border border-border bg-background px-4 text-center text-sm font-semibold text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Contribuidores
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.contributors.map((contributor) => (
                    <a
                      key={contributor.name}
                      href={contributor.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                    >
                      {contributor.name} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="px-6 md:px-12 pb-32 text-center max-w-3xl mx-auto">
        <h2 className="font-display font-bold text-4xl md:text-5xl">
          Posso adaptar esse mesmo cuidado ao seu projeto.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Seja uma interface, uma solução interna, um dashboard ou uma ferramenta mais completa.
        </p>
        <Link to="/contato" className="mt-8 inline-flex items-center gap-3 bg-foreground text-background px-7 py-3.5 rounded-full font-semibold hover:gap-5 transition-all">
          Vamos conversar
          <span className="grid place-items-center h-7 w-7 rounded-full bg-secondary text-foreground">↗</span>
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
