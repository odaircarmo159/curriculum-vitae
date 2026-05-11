import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="px-6 md:px-12 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-3xl font-bold leading-tight">
            Soluções digitais
            <br />
            com <span className="text-secondary">clareza e confiança</span>.
          </h3>
          <p className="mt-4 text-background/70 text-sm max-w-xs">
            Desenvolvimento, organização técnica e visão prática para projetos que precisam sair do papel.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-background/50 mb-4">Navegar</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-secondary">Início</Link></li>
            <li><Link to="/sobre" className="hover:text-secondary">Sobre</Link></li>
            <li><Link to="/projetos" className="hover:text-secondary">Projetos</Link></li>
            <li><Link to="/contato" className="hover:text-secondary">Contato</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-background/50 mb-4">Onde me encontrar</p>
          <ul className="space-y-2 text-sm">
            <li><a href="https://github.com/odaircarmo159" target="_blank" rel="noreferrer" className="hover:text-secondary">GitHub ↗</a></li>
            <li><a href="https://www.linkedin.com/in/odair-carmo-463984218/" target="_blank" rel="noreferrer" className="hover:text-secondary">LinkedIn ↗</a></li>
            <li><a href="mailto:odair.developer@gmail.com" className="hover:text-secondary">E-mail ↗</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between text-xs text-background/50">
        <p>© {new Date().getFullYear()} Odair Carmo — Tecnologia aplicada com responsabilidade.</p>
        <p className="font-mono">Dev | Soluções | Resultado</p>
      </div>
    </footer>
  );
}
