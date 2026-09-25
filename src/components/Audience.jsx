import { Check, X } from 'lucide-react'
import Reveal from './Reveal'

const FIT = [
  'Possui um pequeno negócio',
  'Trabalha como profissional autônomo',
  'Vende pelo WhatsApp',
  'Utiliza o Instagram para atrair clientes',
  'Quer economizar tempo na rotina comercial',
  'Quer organizar melhor o processo de vendas',
  'Quer aprender a aplicar IA no dia a dia do trabalho',
]

const NOT_FIT = [
  'Procura uma fórmula de dinheiro rápido',
  'Espera resultados sem aplicar o método',
  'Busca promessas de faturamento garantido',
  'Quer apenas uma coleção aleatória de prompts',
]

export default function Audience() {
  return (
    <section className="border-t border-ink-600 py-24 md:py-32">
      <div className="wrap grid gap-6 md:grid-cols-2 md:gap-8">
        <Reveal className="card">
          <h2 className="text-2xl font-semibold leading-tight">O IA VENDAS foi feito para você se...</h2>
          <ul className="mt-6 space-y-3">
            {FIT.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-mist-300">
                <Check size={16} className="mt-0.5 shrink-0 text-signal-400" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="card bg-ink-900/40">
          <h2 className="text-2xl font-semibold leading-tight">O IA VENDAS não é para você se...</h2>
          <ul className="mt-6 space-y-3">
            {NOT_FIT.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-mist-400">
                <X size={16} className="mt-0.5 shrink-0 text-mist-500" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
