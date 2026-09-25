import { ArrowDown } from 'lucide-react'
import Reveal from './Reveal'

const FLOW = [
  { label: 'Cliente', detail: 'quem você quer atender' },
  { label: 'Estratégia', detail: 'direção do seu marketing' },
  { label: 'Conteúdo', detail: 'produção com IA' },
  { label: 'WhatsApp', detail: 'atendimento e vendas' },
  { label: 'Follow-up', detail: 'recuperação de oportunidades' },
  { label: 'Conversão', detail: 'fechamento estruturado' },
  { label: 'Organização', detail: 'CRM e rotina comercial' },
]

export default function Solution() {
  return (
    <section id="solucao" className="border-t border-ink-600 py-24 md:py-32">
      <div className="wrap">
        <div className="grid gap-14 md:grid-cols-2 md:gap-16">
          <Reveal>
            <span className="eyebrow">A solução</span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              Conheça o IA VENDAS
            </h2>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-mist-300">
              O IA VENDAS transforma a Inteligência Artificial em um processo prático de marketing e vendas —
              não em mais uma ferramenta solta na sua rotina. Cada etapa do seu processo comercial ganha um
              lugar definido para a IA trabalhar junto com você.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <ol className="flex flex-col">
              {FLOW.map((step, i) => (
                <li key={step.label}>
                  <div className="flex items-center gap-4 rounded-xl border border-ink-600 bg-ink-800/50 px-5 py-4">
                    <span className="font-display text-sm text-signal-300">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <p className="font-medium text-mist-100">{step.label}</p>
                      <p className="text-sm text-mist-400">{step.detail}</p>
                    </div>
                  </div>
                  {i < FLOW.length - 1 && (
                    <div className="flex justify-start py-1 pl-9">
                      <ArrowDown size={14} className="text-ink-500" />
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
