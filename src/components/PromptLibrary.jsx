import { Sparkles } from 'lucide-react'
import Reveal from './Reveal'

const CATEGORIES = [
  'Marketing',
  'Conteúdo',
  'WhatsApp',
  'Follow-up',
  'Vendas',
  'Propostas',
  'Atendimento',
  'Organização',
]

export default function PromptLibrary() {
  return (
    <section id="conteudo" className="border-t border-ink-600 py-24 md:py-32">
      <div className="wrap grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-16">
        <Reveal>
          <span className="eyebrow">Biblioteca de prompts</span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">Pare de começar do zero.</h2>
          <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-mist-300">
            Tenha uma biblioteca de prompts estruturados para transformar a IA em uma ferramenta prática da
            sua rotina comercial — organizados por categoria, prontos para adaptar ao seu negócio.
          </p>
        </Reveal>

        <Reveal delay={100} className="card">
          <div className="mb-5 flex items-center gap-2 text-xs font-medium text-signal-300">
            <Sparkles size={14} />
            Categorias da biblioteca
          </div>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="rounded-lg border border-ink-600 bg-ink-900/60 px-3 py-2.5 text-center text-sm text-mist-300"
              >
                {cat}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
