import Image from "next/image"
import { Award, Clock, Siren, Lock, Scale } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { whatsappLink } from "@/lib/site"

const credentials = [
  {
    icon: Award,
    text: "Atuação exclusiva em Direito Criminal em Maracaju, com foco em Tráfico, Júri e Maria da Penha.",
  },
  {
    icon: Clock,
    text: "Atendimento personalizado e humanizado para clientes de Maracaju/MS.",
  },
  {
    icon: Siren,
    text: "Defesa estratégica em todas as fases do processo criminal.",
  },
  {
    icon: Lock,
    text: "Foco na proteção da liberdade e dos direitos do cliente em Maracaju.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="border-t border-white/5 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={`/images/dr-carlos-alberto.png`}
              alt="Dr. Carlos Alberto em seu escritório de advocacia"
              width={1200}
              height={800}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            O Especialista
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-balance text-foreground md:text-4xl">
            Carlos Alberto: Tradição e Compromisso com a Defesa Criminal em Maracaju/MS
          </h2>
          <p className="mt-1 text-sm font-medium text-primary">Carlos Alberto é um advogado criminalista em Maracaju/MS com vasta experiência e profundo conhecimento da legislação penal, dedicado à defesa da liberdade de seus clientes, especialmente nas áreas de Tráfico, Tribunal do Júri e Lei Maria da Penha. Com uma trajetória marcada pela ética, transparência e um atendimento próximo, ele compreende a delicadeza de cada caso e atua com a seriedade que a sua defesa criminal exige na região de Maracaju.</p>

          <ul className="mt-8 space-y-4">
            {credentials.map((item) => (
              <li key={item.text} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="text-sm leading-relaxed text-foreground/90">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] sm:w-auto"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar com Dr. Carlos Alberto
          </a>
        </div>
      </div>
    </section>
  )
}
