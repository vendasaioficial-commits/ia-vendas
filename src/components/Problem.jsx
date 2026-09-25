import Reveal from './Reveal'

const POINTS = [
  'Não sabe quais prompts usar no dia a dia do negócio',
  'Perde tempo criando conteúdo do zero toda semana',
  'Não sabe como responder clientes de forma consistente',
  'Não possui um processo de follow-up',
  'Perde oportunidades por falta de organização comercial',
  'Usa IA de forma aleatória, sem um método',
  'Já testou várias ferramentas e não sabe como integrá-las ao trabalho',
]

export default function Problem() {
  return (
    <section className="border-t border-ink-600 py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">O problema</span>
          <h2 className="mt-4 max-w-[24ch] text-3xl font-semibold leading-tight md:text-4xl">
            IA não deveria ser mais uma ferramenta para aprender. Deveria ser uma ferramenta para trabalhar.
          </h2>
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-mist-300">
            O problema não é falta de acesso à Inteligência Artificial — hoje qualquer pessoa consegue abrir
            um chat de IA. O problema é não ter um processo para aplicá-la nas tarefas reais de marketing e
            vendas do seu negócio.
          </p>
        </Reveal>

        <Reveal as="div" delay={100} className="mt-14 grid gap-3 sm:grid-cols-2">
          {POINTS.map((point) => (
            <div key={point} className="flex items-start gap-3 rounded-xl border border-ink-600 bg-ink-800/40 p-4">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-400" />
              <span className="text-sm leading-relaxed text-mist-300">{point}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
