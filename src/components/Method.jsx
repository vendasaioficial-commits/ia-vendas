import {
  Settings2,
  UserSearch,
  PenSquare,
  MessageCircle,
  Repeat2,
  TrendingUp,
  LayoutGrid,
} from 'lucide-react'
import Reveal from './Reveal'

const MODULES = [
  {
    icon: Settings2,
    title: 'Configure sua IA',
    items: ['Contexto Mestre', 'Prompt Mestre', 'Configuração da IA', 'Aplicação prática'],
  },
  {
    icon: UserSearch,
    title: 'Entenda seu cliente',
    items: ['Cliente ideal e ICP', 'Dores e desejos', 'Objeções', 'Pesquisa com IA'],
  },
  {
    icon: PenSquare,
    title: 'Crie conteúdo',
    items: ['Estratégia de conteúdo', 'Reels, stories e carrosséis', 'Calendário de conteúdo', 'Roteiros e CTAs'],
  },
  {
    icon: MessageCircle,
    title: 'Venda pelo WhatsApp',
    items: ['Primeiro contato', 'Diagnóstico e perguntas', 'Apresentação e preço', 'Objeções e fechamento'],
  },
  {
    icon: Repeat2,
    title: 'Faça follow-up',
    items: ['Quando e como fazer', 'Sequências de mensagens', 'Recuperação de oportunidades', 'Reativação de clientes'],
  },
  {
    icon: TrendingUp,
    title: 'Aumente sua conversão',
    items: ['Oferta e proposta', 'Benefícios', 'Negociação', 'Fechamento'],
  },
  {
    icon: LayoutGrid,
    title: 'Organize sua operação',
    items: ['CRM e pipeline', 'Leads e próximas ações', 'Follow-up', 'Pós-venda'],
  },
]

export default function Method() {
  return (
    <section id="metodo" className="border-t border-ink-600 py-24 md:py-32">
      <div className="wrap">
        <Reveal className="max-w-[56ch]">
          <span className="eyebrow">O método</span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">O método IA VENDAS</h2>
          <p className="mt-6 text-lg leading-relaxed text-mist-300">
            Sete módulos que seguem a ordem real do seu processo comercial — da configuração da IA até a
            organização da sua operação.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((mod, i) => (
            <div key={mod.title} className="card flex flex-col">
              <div className="flex items-center justify-between">
                <span className="font-display text-xs text-mist-400">MÓDULO {String(i + 1).padStart(2, '0')}</span>
                <mod.icon size={18} className="text-signal-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-mist-100">{mod.title}</h3>
              <ul className="mt-4 space-y-2">
                {mod.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-mist-400">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="card flex flex-col justify-center border-dashed">
            <span className="font-display text-xs text-mist-400">MÓDULO 00</span>
            <h3 className="mt-4 text-lg font-semibold text-mist-100">Comece aqui</h3>
            <p className="mt-3 text-sm leading-relaxed text-mist-400">
              Como utilizar o produto, ferramentas necessárias e como funciona o método — antes de entrar
              nos módulos práticos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
