import { useState } from 'react'
import { Plus } from 'lucide-react'
import Reveal from './Reveal'

const QUESTIONS = [
  {
    q: 'O que é o IA VENDAS?',
    a: 'É um treinamento prático que ensina a aplicar Inteligência Artificial nas principais tarefas de marketing e vendas de pequenos negócios e profissionais autônomos, com curso em vídeo, prompts, templates e planilhas.',
  },
  {
    q: 'Preciso entender de Inteligência Artificial?',
    a: 'Não. O método parte do básico da configuração da sua IA e avança de forma prática, módulo a módulo.',
  },
  {
    q: 'Preciso ser especialista em vendas?',
    a: 'Não. O conteúdo foi pensado para quem vende no dia a dia pelo WhatsApp e Instagram, mesmo sem formação em vendas.',
  },
  {
    q: 'Quais ferramentas preciso utilizar?',
    a: 'As ferramentas necessárias são apresentadas no Módulo 0, junto com orientações de configuração.',
  },
  {
    q: 'O produto é para iniciantes?',
    a: 'Sim. O método foi estruturado para quem está começando a aplicar IA na rotina comercial.',
  },
  {
    q: 'Como recebo o acesso?',
    a: '[A confirmar conforme a plataforma de pagamento] — normalmente o acesso é liberado por e-mail logo após a confirmação da compra.',
  },
  {
    q: 'Tenho acesso aos materiais?',
    a: 'Sim. O acesso é feito através de uma área de membros, com o curso em vídeo, PDFs, prompts, templates e planilhas.',
  },
  {
    q: 'O pagamento é seguro?',
    a: '[A confirmar conforme a plataforma de pagamento] — o processamento é feito por uma plataforma especializada em pagamentos online.',
  },
  {
    q: 'Quanto tempo tenho para aplicar?',
    a: '[A confirmar conforme a política de acesso da plataforma escolhida].',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="border-t border-ink-600 py-24 md:py-32">
      <div className="wrap max-w-[760px]">
        <Reveal>
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">Ainda tem dúvidas?</h2>
        </Reveal>

        <Reveal delay={100} className="mt-12 divide-y divide-ink-600 border-t border-ink-600">
          {QUESTIONS.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-medium text-mist-100">{item.q}</span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-signal-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-300"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-8 text-sm leading-relaxed text-mist-400">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
