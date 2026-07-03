import { MapPin, Mail, Check } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { whatsappLink, site } from "@/lib/site"

  const urgentItems = [
    "Prisão em Flagrante e Audiência de Custódia em Maracaju",
    "Habeas Corpus em Maracaju",
    "Defesa em Processos Criminais na Região de Maracaju",
    "Recursos Criminais Especializados",
  ]

export function ContactSection() {
  return (
    <section id="contato" className="border-t border-white/5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Fale conosco
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-balance text-foreground md:text-4xl">
            Seus Direitos e Sua Liberdade Merecem uma Defesa Criminal Especializada em Maracaju
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Não deixe sua liberdade em risco. Fale agora com Carlos Alberto Advocacia e descubra como o advogado criminalista em Maracaju pode proteger você.
          </p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-foreground/90">
            {urgentItems.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            CHAMAR NO WHATSAPP AGORA PARA DEFESA CRIMINAL EM MARACAJU
          </a>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-primary/30 bg-primary/5 p-5 transition-colors hover:bg-primary/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">
                  WhatsApp 24h
                </span>
                <span className="block font-semibold text-foreground">
                  {site.phoneDisplay}
                </span>
              </span>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-4 rounded-2xl border border-white/8 bg-card p-5 transition-colors hover:border-primary/30"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">
                  E-mail
                </span>
                <span className="block font-semibold text-foreground">
                  {site.email}
                </span>
              </span>
            </a>

            <a
              href={site.address.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/8 bg-card p-5 transition-colors hover:border-primary/30"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">
                  Escritório
                </span>
                <span className="block font-semibold text-foreground">
                  {site.address.line1}
                </span>
                <span className="block text-sm text-muted-foreground">
                  {site.address.line2}
                </span>
              </span>
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Localização do escritório - Maringá-PR"
              src={site.address.embed}
              className="h-full min-h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
