import { Link } from "react-router-dom";
import { type FormEvent, useState } from "react";
import { SiteHeader } from "../componentes/SiteHeader";
import { SiteFooter } from "../componentes/SiteFooter";
import { ZigZag } from "../componentes/Shapes";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export function ContactPage() {
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      setSubmitState("error");
      setFeedbackMessage("O formulário ainda não está configurado para envio. Falta adicionar a chave do Web3Forms.");
      return;
    }

    setSubmitState("sending");
    setFeedbackMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("from_name", "Portfólio Odair Carmo");
    formData.append("replyto", String(formData.get("email") ?? ""));
    formData.append("botcheck", "");

    if (!formData.get("subject")) {
      formData.set("subject", "Novo contato pelo portfólio");
    }

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        form.reset();
        setSubmitState("success");
        setFeedbackMessage("Mensagem enviada com sucesso. Vou te responder o mais rápido possível.");
        return;
      }

      setSubmitState("error");
      setFeedbackMessage(result.message ?? "Não foi possível enviar a mensagem agora. Tente novamente em instantes.");
    } catch {
      setSubmitState("error");
      setFeedbackMessage("Falha ao enviar a mensagem. Verifique sua conexão e tente novamente.");
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="pt-36 pb-20 px-6 md:px-12 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">[ /contato ]</p>
          <h1 className="mt-4 font-display font-bold text-6xl md:text-8xl leading-[0.95]">
            Vamos <span className="text-primary">conversar</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md">
            Se quiser falar sobre front-end, desenvolvimento web, análise de dados,
            Power BI ou oportunidades na área de tecnologia, estou sempre aberto a trocar ideia.
          </p>

          <div className="mt-12 space-y-4">
            <a href="mailto:odair.developer@gmail.com" className="flex items-center justify-between p-5 border-2 border-foreground rounded-2xl hover:bg-secondary transition-colors group">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">e-mail</p>
                <p className="font-display font-bold text-xl">odair.developer@gmail.com</p>
              </div>
              <span className="grid place-items-center h-10 w-10 rounded-full bg-foreground text-background group-hover:rotate-45 transition-transform">↗</span>
            </a>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "GitHub", href: "https://github.com/odaircarmo159" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/odair-carmo-463984218/" },
                { label: "Portfólio", href: "/projetos" },
              ].map((item) => (
                item.href.startsWith("/") ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="p-4 border border-border rounded-2xl text-center hover:bg-foreground hover:text-background transition-colors text-sm font-semibold"
                  >
                    {item.label}
                  </Link>
                ) : (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="p-4 border border-border rounded-2xl text-center hover:bg-foreground hover:text-background transition-colors text-sm font-semibold"
                >
                  {item.label}
                </a>
                )
              ))}
            </div>
          </div>
          <ZigZag className="absolute -right-4 top-12 w-20 text-secondary hidden md:block" />
        </div>

        <form onSubmit={handleSubmit} className="bg-foreground text-background p-8 md:p-10 rounded-3xl space-y-5">
          <p className="font-mono text-xs uppercase tracking-widest text-secondary">[ mensagem ]</p>
          <h2 className="font-display font-bold text-3xl">Me chama para conversar.</h2>

          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Nome" name="name" />
            <Field label="E-mail" name="email" type="email" />
          </div>
          <Field label="Assunto" name="subject" />
          <div>
            <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-background/70">Mensagem</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-2 w-full bg-transparent border-b-2 border-background/30 focus:border-secondary py-2 outline-none resize-none"
            />
          </div>

          {submitState !== "idle" && (
            <div className={`rounded-2xl border px-4 py-3 text-sm ${submitState === "success" ? "border-secondary/50 text-secondary" : "border-red-400/40 text-red-200"}`}>
              {feedbackMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={submitState === "sending"}
            className="w-full bg-secondary text-secondary-foreground font-semibold py-4 rounded-full hover:bg-background hover:text-foreground transition-colors disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitState === "sending" ? "Enviando..." : "Enviar mensagem →"}
          </button>
        </form>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="font-mono text-xs uppercase tracking-widest text-background/70">{label}</label>
      <input id={name} name={name} type={type} required className="mt-2 w-full bg-transparent border-b-2 border-background/30 focus:border-secondary py-2 outline-none" />
    </div>
  );
}
