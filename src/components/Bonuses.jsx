import { CalendarDays, MessagesSquare, Table2, Wand2 } from 'lucide-react'
import Reveal from './Reveal'

const BONUSES = [
  {
    icon: CalendarDays,
    title: 'Calendário de Conteúdo de 30 Dias',
    text: 'Um mês inteiro de pautas organizadas, prontas para adaptar ao seu negócio.',
  },
  {
    icon: MessagesSquare,
    title: 'Kit de WhatsApp',
    text: 'Mensagens estruturadas para atendimento, follow-up e fechamento.',
  },
  {
    icon: Table2,
    title: 'Planilha de CRM',
    text: 'Organize leads, pipeline e próximas ações em um único lugar.',
  },
  {
    icon: Wand2,
    title: 'Prompt Mestre Comercial',
    text: 'O prompt base para configurar a IA de acordo com o seu negócio.',
  },
]

export default function Bonuses() {
  return (
    <section className="border-t border-ink-600 py-24 md:py-32">
      <div className="wrap">
        <Reveal className="max-w-[56ch]">
          <span className="eyebrow">Bônus</span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
            Além do treinamento, você recebe
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BONUSES.map((bonus) => (
            <div key={bonus.title} className="card">
              <bonus.icon size={20} className="text-signal-400" />
              <h3 className="mt-4 text-base font-semibold text-mist-100">{bonus.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-400">{bonus.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
