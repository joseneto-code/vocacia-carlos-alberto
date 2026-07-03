const faqs = [
  {
    question: "Qual o valor dos honorários de um advogado criminalista em Maracaju/MS?",
    answer:
      "O custo da defesa criminal varia conforme a complexidade do caso e a fase processual. Entre em contato para uma avaliação detalhada e um orçamento personalizado para sua situação em Maracaju.",
  },
  {
    question: "O escritório atende casos de prisão em flagrante em Maracaju?",
    answer:
      "Sim, oferecemos atendimento rápido para casos de prisão em flagrante em Maracaju, com acompanhamento em delegacias e audiências de custódia, 24 horas por dia.",
  },
  {
    question: "Vocês atuam em audiências de custódia em Maracaju?",
    answer:
      "Sim, a defesa técnica em audiências de custódia é uma de nossas prioridades, garantindo a proteção dos direitos do cliente desde o início do processo em Maracaju.",
  },
  {
    question: "É possível conseguir Habeas Corpus em Maracaju?",
    answer:
      "Sim, avaliamos e impetramos Habeas Corpus sempre que a situação jurídica permitir, buscando a liberdade em casos de prisão ilegal ou abusiva em Maracaju.",
  },
  {
    question: "Como posso entrar em contato com um advogado criminalista em Maracaju?",
    answer:
      "Você pode entrar em contato através do nosso telefone ou WhatsApp para um atendimento rápido e sigiloso. Estamos prontos para ajudar com sua defesa criminal em Maracaju/MS.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export function FaqSection() {
  return (
    <section
      id="faq"
      className="border-t border-white/5 bg-card/40 py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Tire suas dúvidas
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-balance text-foreground md:text-4xl">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="mt-10 divide-y divide-white/8 rounded-2xl border border-white/8 bg-background">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-5 md:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-base font-semibold text-foreground md:text-lg">
                {faq.question}
                <span className="shrink-0 text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  )
}
