import Image from "next/image"
import {
  Siren,
  Clock,
  KeyRound,
  Pill,
  ShieldAlert,
  EyeOff,
  Gavel,
  Landmark,
  Unlock,
} from "lucide-react"

const services = [
  {
    icon: Siren,
    title: "Tráfico de Drogas em Maracaju: Defesa Estratégica",
    desc: "Em casos de tráfico de drogas em Maracaju, a atuação de um advogado criminalista experiente é fundamental. Oferecemos defesa estratégica, analisando cada detalhe do processo para garantir a melhor representação legal e a proteção dos seus direitos.",
    highlight: true,
  },
  {
    icon: Gavel,
    title: "Tribunal do Júri em Maracaju: Atuação Decisiva",
    desc: "Para crimes dolosos contra a vida, a defesa no Tribunal do Júri em Maracaju exige preparo e oratória. O Dr. Carlos Alberto atua com firmeza e persuasão perante o conselho de sentença, buscando a justiça e a liberdade de seus clientes.",
  },
  {
    icon: ShieldAlert,
    title: "Lei Maria da Penha em Maracaju: Defesa Técnica e Sigilosa",
    desc: "Casos envolvendo a Lei Maria da Penha em Maracaju demandam sensibilidade e conhecimento técnico. Oferecemos defesa sigilosa e especializada, focada na proteção dos direitos do acusado e na busca por um processo justo.",
  },
  {
    icon: Siren,
    title: "Prisão em Flagrante e Audiência de Custódia em Maracaju",
    desc: "Atuação imediata e acompanhamento completo em delegacias e audiências de custódia em Maracaju, garantindo seus direitos e buscando a liberdade desde o primeiro contato com a justiça criminal.",
  },
  {
    icon: Clock,
    title: "Habeas Corpus em Maracaju",
    desc: "Medidas urgentes para reverter prisões ilegais ou abusivas em Maracaju/MS, com foco na sua imediata liberação e proteção da sua liberdade.",
  },
  {
    icon: Landmark,
    title: "Defesa em Processos Criminais na Região de Maracaju",
    desc: "Representação técnica e estratégica em todas as fases do processo criminal, desde a investigação até o julgamento, com o objetivo de assegurar sua liberdade e um julgamento justo em Maracaju e entorno.",
  },
  {
    icon: Unlock,
    title: "Recursos Criminais Especializados",
    desc: "Interposição de recursos em todas as instâncias, visando a revisão de decisões e a garantia de seus direitos, mesmo após a condenação, com a expertise de um advogado criminalista experiente.",
  },
]

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden border-t border-white/5 py-20 md:py-28"
    >
      <Image
        src={`/images/dr-carlos-alberto.png`}
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className="object-cover object-center opacity-15 grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      <div className="absolute -left-40 top-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-[24rem] w-[24rem] rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Áreas de atuação
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-balance text-foreground md:text-4xl">
            Atuação em Casos Cíveis e Criminais
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Como advogado cível e criminal, ofereço atuação completa em todas
            as fases do processo, com estratégia personalizada para cada caso.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group rounded-2xl border p-6 backdrop-blur-sm transition-colors ${
                service.highlight
                  ? "border-primary/40 bg-primary/10"
                  : "border-white/8 bg-card/80 hover:border-primary/30"
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
