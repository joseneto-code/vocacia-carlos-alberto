import { Lock, HeartHandshake, Target } from "lucide-react"

export function DifferentialsSection() {
  return (
    <section
      id="diferenciais"
      className="border-t border-white/5 bg-card/40 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Urgência
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-balance text-foreground md:text-4xl">
            Cada Dia Sem Orientação Correta é um Risco para Sua Liberdade em Maracaju
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Em casos criminais, o tempo é crucial. Uma decisão equivocada ou a falta de orientação jurídica adequada pode ter consequências graves para sua liberdade e seu futuro. Por isso, a orientação jurídica de um advogado criminalista em Maracaju especialista em Tráfico, Tribunal do Júri e Lei Maria da Penha precisa ser:
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-2xl text-center">
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>Rápida: Análise do caso sem demora, com agilidade no atendimento em Maracaju.</li>
            <li>Especializada: Conhecimento aprofundado da legislação penal e da prática forense local, especialmente nas áreas de Tráfico, Júri e Maria da Penha.</li>
            <li>Humanizada: Atendimento que respeita o momento delicado, oferecendo suporte e clareza.</li>
          </ul>

          <div className="mt-8">
            <a
              href={"#contato"}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              FALE COM O ADVOGADO CRIMINALISTA CARLOS ALBERTO AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
