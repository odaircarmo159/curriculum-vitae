import { Link } from "react-router-dom";
import { SiteHeader } from "../componentes/SiteHeader";
import { SiteFooter } from "../componentes/SiteFooter";
import { ZigZag, Stairs, Diamonds } from "../componentes/Shapes";
import profilePhoto from "../assets/foto.jpeg";

const marqueeItems = [
  "Desenvolvimento Web",
  "React",
  "JavaScript",
  "TypeScript",
  "SQL",
  "Power BI",
  "Análise de Dados",
  "Interfaces",
  "Automação",
  "Soluções Digitais",
];

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-[1.3fr_1fr]">
        <div className="relative bg-primary text-primary-foreground overflow-hidden">
          <div className="pattern-grid absolute inset-0 text-primary-foreground/10" />
          <div className="relative z-10 px-6 md:px-12 pt-36 pb-20 lg:pb-32 max-w-2xl">
            <p className="font-mono text-sm uppercase tracking-widest text-secondary mb-6 cursor-blink">
              olá, eu sou.odair
            </p>
            <h1 className="font-display font-bold leading-[0.95] text-6xl md:text-8xl">
              Desenvolvedor
              <br />
              <span className="text-secondary">de Soluções Digitais</span>
              <span className="text-secondary">.</span>
            </h1>
            <p className="mt-8 text-lg max-w-md text-primary-foreground/80">
            Crio soluções digitais que unem visual, performance e experiência.
            Trabalho com desenvolvimento web, dados e automação de processos, sempre tentando 
            transformar problemas reais em soluções úteis e bem construídas.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-6 max-w-md text-sm">
              <div>
                <p className="font-mono text-secondary">[01]</p>
                <p className="mt-2 text-primary-foreground/80">
                  Atuo em diferentes frentes de desenvolvimento, do visual à lógica do produto.
                </p>
              </div>
              <div>
                <p className="font-mono text-secondary">[02]</p>
                <p className="mt-2 text-primary-foreground/80">
                Experiência com análise de dados, construção e desenvolvimento de dashboards BI voltados à tomada de decisão estratégica.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                to="/projetos"
                className="group inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold hover:gap-5 transition-all"
              >
                Ver projetos
                <span className="grid place-items-center h-7 w-7 rounded-full bg-foreground text-background group-hover:rotate-45 transition-transform">↗</span>
              </Link>
              <Link to="/contato" className="inline-flex items-center px-6 py-3 rounded-full border border-primary-foreground/30 hover:bg-primary-foreground/10 font-semibold">
                Entrar em contato
              </Link>
            </div>
          </div>

          <ZigZag className="absolute bottom-32 left-12 w-24 text-secondary/60 animate-floaty" />
          <div className="absolute top-40 right-8 pattern-dots w-32 h-32 text-secondary/40" />
        </div>

        <div className="relative bg-secondary overflow-hidden min-h-[500px]">
          <div className="pattern-dots absolute inset-0 text-foreground/15" />

          <div className="relative z-10 h-full grid place-items-center p-10">
            <div className="relative">
              <div className="absolute -inset-6 border-2 border-foreground/40 -translate-x-6 translate-y-6" />
              <div className="absolute -top-8 -left-8 pattern-dots w-24 h-24 text-foreground/40" />
              <div className="absolute -bottom-10 -right-6 pattern-dots w-32 h-24 text-foreground/40" />
              <div className="relative w-[280px] md:w-[340px] aspect-[4/5] bg-foreground shadow-2xl ring-4 ring-foreground overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Foto de Odair Carmo"
                  className="h-full w-full select-none object-cover"
                  draggable={false}
                  onContextMenu={(event) => event.preventDefault()}
                  onDragStart={(event) => event.preventDefault()}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground via-foreground/65 to-transparent px-6 pb-7 pt-16 text-background">
                  <p className="font-mono text-xs tracking-[0.3em] uppercase text-secondary">odair carmo</p>
                  <p className="mt-3 font-display text-3xl md:text-4xl font-bold">Dev & Soluções</p>
                </div>
              </div>
              <Stairs className="absolute -right-16 -top-4 w-16 text-foreground animate-floaty" />
              <Stairs className="absolute -left-20 bottom-10 w-14 text-foreground/70 rotate-180 animate-floaty" style={{ animationDelay: "1.5s" }} />
            </div>
          </div>

          <Diamonds className="absolute right-6 top-1/2 text-primary" />
        </div>
      </section>

      <section className="bg-foreground text-background py-6 overflow-hidden border-y-2 border-foreground">
        <div className="flex animate-marquee whitespace-nowrap gap-12 font-display text-3xl md:text-5xl font-bold">
          {[...marqueeItems, ...marqueeItems].map((s, i) => (
            <span key={i} className="flex items-center gap-12">
              {s}
              <span className="text-secondary">✦</span>
            </span>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              [ Sobre mim ]
            </p>
          </div>
          <div className="md:col-span-9 space-y-6">
            <h2 className="font-display font-bold text-4xl md:text-6xl leading-tight">
              Tecnologia com <span className="text-stroke">clareza</span>,
              execução e confiança.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
            Minha trajetória com tecnologia começou aos 14 anos, quando entrei no curso técnico de Informática para Internet no IFMS.
            Foi ali que tive os primeiros contatos com desenvolvimento web, explorando tanto front-end quanto back-end e entendendo
            como transformar ideias em sistemas funcionais. Com o tempo, também passei a atuar com análise de dados e desenvolvimento
            de dashboards voltados à tomada de decisão. Hoje, busco criar soluções que realmente facilitem processos do dia a dia,
            unindo desenvolvimento, dados e automação enquanto continuo aprendendo e compartilhando conhecimento.
            </p>
            <Link to="/sobre" className="inline-flex items-center gap-2 font-semibold border-b-2 border-foreground hover:gap-4 transition-all">
              Conhecer minha trajetória →
            </Link>
          </div>
        </div>
      </section>

      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="pattern-dots absolute inset-0 text-secondary/30" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
          <p className="font-mono text-sm uppercase tracking-widest text-secondary">[ Vamos conversar ]</p>
          <h2 className="mt-6 font-display font-bold text-5xl md:text-7xl leading-tight">
            Tem algum projeto em mente?
            <br />
            <span className="text-secondary">Bora Codar.</span>
          </h2>
          <Link
            to="/contato"
            className="mt-10 inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:gap-5 transition-all"
          >
            Falar comigo
            <span className="grid place-items-center h-9 w-9 rounded-full bg-foreground text-background">↗</span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
