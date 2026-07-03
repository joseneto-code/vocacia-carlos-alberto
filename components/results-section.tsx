import { Users, Clock, Siren, Gavel, Landmark } from "lucide-react"

const results = [
  {
    icon: Users,
    text: "Dezenas de clientes atendidos em Maringá e região",
  },
  {
    icon: Clock,
    text: "Atendimento 24 horas",
  },
  {
    icon: Siren,
    text: "Defesa em flagrantes",
  },
  {
    icon: Gavel,
    text: "Atuação perante o Tribunal do Júri",
  },
  {
    icon: Landmark,
    text: "Recursos junto ao STF e STJ",
  },
]

export function ResultsSection() {
  return (
    <section
      id="resultados"
      className="border-t border-white/5 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Prova Social
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-balance text-foreground md:text-4xl">
            Prova Social e Confiança: Advogado Criminalista em Maracaju
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            (Espaço para inserir depoimentos de clientes e ícones de presença digital)
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-2xl text-center space-y-3">
          <p className="text-sm font-medium text-foreground/90">Avaliações 5 Estrelas no Google para advogado criminalista Maracaju</p>
          <p className="text-sm font-medium text-foreground/90">OAB/MS [Número da OAB] – Elemento de autoridade para sua defesa criminal em Maracaju</p>
        </div>
      </div>
    </section>
  )
}
