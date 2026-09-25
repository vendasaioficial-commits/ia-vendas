import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { CHECKOUT_URL } from '../config'

export default function FinalCTA() {
  return (
    <section className="border-t border-ink-600 py-24 md:py-32">
      <div className="wrap flex flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <h2 className="max-w-[22ch] text-3xl font-semibold leading-tight md:text-4xl">
            Comece a usar a IA de forma prática no seu negócio.
          </h2>
          <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-mist-300">
            Tenha acesso a um método estruturado para aplicar Inteligência Artificial nas principais
            atividades de marketing e vendas.
          </p>
          <a href={CHECKOUT_URL} className="btn-primary mt-9">
            Quero acessar o IA VENDAS
            <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
