import { ArrowRight, ChevronDown, Sparkles, MessageSquare, ListChecks } from 'lucide-react'
import { CHECKOUT_URL } from '../config'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-signal-500/10 blur-[140px]"
      />

      <div className="wrap grid gap-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-10">
        <div className="animate-rise">
          <span className="eyebrow">IA VENDAS</span>

          <h1 className="mt-5 text-[2.25rem] leading-[1.12] font-semibold md:text-[3.1rem] md:leading-[1.1]">
            Transforme a Inteligência Artificial em um sistema prático para vender mais e trabalhar melhor.
          </h1>

          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-mist-300">
            Aprenda a usar IA nas principais tarefas de marketing e vendas — do conteúdo ao WhatsApp,
            do follow-up à organização comercial.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={CHECKOUT_URL} className="btn-primary">
              Quero acessar o IA VENDAS
              <ArrowRight size={16} />
            </a>
            <a href="#solucao" className="btn-secondary">
              Ver o que está incluído
              <ChevronDown size={16} />
            </a>
          </div>

          <p className="mt-6 text-sm text-mist-400">
            Curso em vídeo, biblioteca de prompts, templates e planilhas — em uma área de membros só sua.
          </p>
        </div>

        <div className="relative animate-rise [animation-delay:150ms]">
          <div className="card relative rounded-3xl border-ink-500/80 bg-ink-800/80 p-5 shadow-2xl shadow-black/40 md:p-6">
            <div className="flex items-center justify-between border-b border-ink-600 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-ink-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-signal-400" />
              </div>
              <span className="text-xs text-mist-400">Painel do vendedor</span>
            </div>

            <div className="mt-5 space-y-3">
              <div className="rounded-xl border border-ink-600 bg-ink-900/70 p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-medium text-signal-300">
                  <MessageSquare size={14} />
                  WhatsApp · Follow-up
                </div>
                <p className="text-sm text-mist-300">
                  "Oi Marina, vi que você chegou a ver os detalhes do plano essa semana — ainda faz
                  sentido pra você? Posso tirar alguma dúvida agora."
                </p>
              </div>

              <div className="rounded-xl border border-ink-600 bg-ink-900/70 p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-medium text-signal-300">
                  <Sparkles size={14} />
                  Prompt · Conteúdo
                </div>
                <p className="text-sm text-mist-300">
                  "Crie 5 ideias de Reels para uma [tipo de negócio] falando sobre [dor do cliente]…"
                </p>
              </div>

              <div className="rounded-xl border border-ink-600 bg-ink-900/70 p-4">
                <div className="mb-3 flex items-center gap-2 text-xs font-medium text-signal-300">
                  <ListChecks size={14} />
                  Pipeline comercial
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Novo lead', 'Diagnóstico', 'Proposta', 'Fechamento'].map((stage) => (
                    <span
                      key={stage}
                      className="rounded-full border border-ink-600 bg-ink-800 px-3 py-1 text-xs text-mist-300"
                    >
                      {stage}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
