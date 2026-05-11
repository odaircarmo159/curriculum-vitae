import { SiteHeader } from "../componentes/SiteHeader";
import { SiteFooter } from "../componentes/SiteFooter";
import { ZigZag, Stairs } from "../componentes/Shapes";
import profilePhoto from "../assets/foto.jpeg";

const timeline = [
  {
    year: "2024",
    role: "Auxiliar administrativo",
    place: "Lar Cooperativa Agroindustrial",
    desc: "Atuação no desenvolvimento de soluções voltadas ao apoio operacional e analítico, envolvendo software web e desktop, automação, dados e BI.",
  },
  {
    year: "2023",
    role: "Aprendiz Assistente Administrativo",
    place: "Lar Cooperativa Agroindustrial",
    desc: "Participação em atividades técnicas com foco em desenvolvimento de software, automação e apoio a soluções de Business Intelligence.",
  },
  {
    year: "2023",
    role: "Sistemas de Informação",
    place: "UFGD",
    desc: "Formação que fortalece minha base em desenvolvimento, sistemas, lógica, estrutura de dados e resolução de problemas.",
  },
  {
    year: "2021",
    role: "Desenvolvedor web estagiário",
    place: "OK Desenvolvimento de Software",
    desc: "Experiência prática com desenvolvimento web e contato com banco de dados em ambiente remoto.",
  },
];

const values = [
  { t: "Clareza", d: "Gosto de soluções que sejam úteis, bem estruturadas e fáceis de entender para quem usa e para quem mantém." },
  { t: "Versatilidade", d: "Consigo atuar em diferentes frentes do desenvolvimento e me adaptar ao que o projeto realmente precisa." },
  { t: "Compromisso", d: "Valorizo entregas responsáveis, comunicação direta e tecnologia aplicada para gerar resultado." },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative pt-36 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">[ /sobre ]</p>
        <h1 className="mt-4 font-display font-bold text-6xl md:text-8xl leading-[0.95]">
          Sou o <span className="text-primary">Odair</span>,
          <br />
          profissional de <span className="text-stroke">tecnologia</span>
          <br />
          com foco em <span className="text-secondary bg-foreground px-3">soluções bem construídas</span>.
        </h1>
        <ZigZag className="absolute right-12 top-40 w-32 text-primary hidden md:block" />
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-24 grid md:grid-cols-[300px_1fr] gap-12 items-start">
        <div className="relative">
          <div className="absolute -inset-4 bg-secondary -translate-x-3 translate-y-3" />
          <div className="relative w-full max-w-[300px] aspect-[15/19] ring-4 ring-foreground bg-primary overflow-hidden">
            <img
              src={profilePhoto}
              alt="Foto de perfil de Odair Carmo"
              className="h-full w-full select-none object-cover"
              draggable={false}
              onContextMenu={(event) => event.preventDefault()}
              onDragStart={(event) => event.preventDefault()}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent px-6 pb-6 pt-16 text-background">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">perfil</p>
              <p className="mt-3 font-display text-4xl font-bold">Odair</p>
            </div>
          </div>
          <Stairs className="absolute -right-10 -bottom-6 w-12 text-primary" />
          </div>
<div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
  <p>
    Minha trajetória mistura desenvolvimento, dados e tecnologia aplicada no dia a dia das operações.
    Ao longo do tempo, fui passando por diferentes áreas e isso acabou me dando uma visão mais prática
    sobre como as soluções realmente funcionam fora da tela.
  </p>

  <p>
    Tenho uma conexão maior com front-end e com a experiência de quem vai usar a solução, então gosto
    bastante de pensar em interface, organização e usabilidade. Mas também curto entender a lógica por
    trás das coisas, os dados, os processos e como tudo se conecta.
  </p>

  <p>
    Além do desenvolvimento web, também trabalho com análise de dados, SQL e Power BI, principalmente
    criando dashboards e ferramentas que ajudam na tomada de decisão. No fim, o que mais me motiva é
    conseguir transformar problemas reais em soluções úteis, simples de usar e que façam sentido no dia a dia.
  </p>
</div>
      </section>

      <section className="bg-foreground text-background py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-secondary">[ valores ]</p>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-6xl">Como eu trabalho.</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={v.t} className="border-t-2 border-secondary pt-6">
                <p className="font-mono text-secondary text-sm">0{i + 1}</p>
                <h3 className="mt-2 font-display font-bold text-3xl">{v.t}</h3>
                <p className="mt-3 text-background/70">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">[ trajetória ]</p>
        <h2 className="mt-4 font-display font-bold text-4xl md:text-6xl">Experiência e base técnica.</h2>
        <div className="mt-12 space-y-2">
          {timeline.map((t) => (
            <div key={`${t.year}-${t.role}`} className="grid grid-cols-[80px_1fr_auto] gap-6 items-baseline border-b border-border py-6 group hover:bg-secondary/20 transition-colors px-2 -mx-2 rounded-lg">
              <p className="font-mono text-2xl font-bold text-primary">{t.year}</p>
              <div>
                <h3 className="font-display font-bold text-2xl">{t.role}</h3>
                <p className="text-muted-foreground mt-1">{t.desc}</p>
              </div>
              <p className="text-sm text-muted-foreground hidden md:block">{t.place}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
