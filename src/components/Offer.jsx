import { Check, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { CHECKOUT_URL, PRICE_LABEL } from '../config'

const INCLUDES = [
  'Curso completo em vídeo, dividido em 7 módulos',
  'Biblioteca de prompts por categoria',
  'Templates e planilhas prontas para usar',
  'Calendário de Conteúdo de 30 Dias',
  'Kit de WhatsApp',
  'Planilha de CRM',
  'Prompt Mestre Comercial',
  'Acesso à área de membros',
]

export default function Offer() {
  return (
    <section className="border-t border-ink-600 py-24 md:py-32">
      <div className="wrap grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <Reveal>
          <span className="eyebrow">O que você recebe</span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
            Tudo o que está incluído no seu acesso
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {INCLUDES.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-mist-300">
                <Check size={16} className="mt-0.5 shrink-0 text-signal-400" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="card flex flex-col items-start bg-ink-800/80">
          <span className="eyebrow">Seu acesso ao IA VENDAS</span>
          <p className="mt-4 font-display text-5xl font-semibold text-mist-100">{PRICE_LABEL}</p>
          <p className="mt-2 text-sm text-mist-400">Acesso completo, pagamento único.</p>

          <a href={CHECKOUT_URL} className="btn-primary mt-8 w-full">
            Quero acessar agora
            <ArrowRight size={16} />
          </a>

          <p className="mt-4 text-xs leading-relaxed text-mist-400">
            {/* Ajustar conforme a plataforma de pagamento escolhida. */}
            Pagamento processado por uma plataforma segura.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
