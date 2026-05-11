import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/projetos", label: "Projetos" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const getLinkClassName = ({ isActive }: { isActive: boolean }) =>
    [
      "px-4 py-1.5 text-sm font-medium rounded-full transition-colors hover:bg-foreground hover:text-background",
      isActive ? "bg-foreground text-background" : "",
    ].join(" ");

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-12 py-6">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid place-items-center h-10 w-10 rounded-lg bg-foreground text-background font-display font-bold text-lg group-hover:rotate-6 transition-transform">
            OC
          </span>
          <span className="font-display font-bold text-xl tracking-tight">
            <span className="text-primary">/</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 rounded-full border border-border bg-background/70 backdrop-blur px-2 py-1.5">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={getLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden grid place-items-center h-10 w-10 rounded-lg bg-foreground text-background"
          aria-label="Menu"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-6 rounded-2xl border border-border bg-background p-4 shadow-xl">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg font-medium hover:bg-muted"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
