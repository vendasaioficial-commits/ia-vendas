import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { CHECKOUT_URL } from '../config'

const LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'O Método', href: '#metodo' },
  { label: 'Conteúdo', href: '#conteudo' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink-950/90 backdrop-blur border-b border-ink-600' : 'border-b border-transparent'
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between md:h-20">
        <a href="#inicio" className="font-display text-lg font-semibold tracking-tight text-mist-100">
          IA VENDAS
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-mist-300 transition-colors hover:text-mist-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href={CHECKOUT_URL} className="hidden md:inline-flex btn-primary py-2.5 px-5 text-[13px]">
          Quero acessar
          <ArrowUpRight size={15} />
        </a>

        <button
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
          className="text-mist-100 md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-600 bg-ink-950 px-6 pb-8 pt-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base text-mist-200 hover:bg-ink-800"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={CHECKOUT_URL}
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 w-full py-3.5"
          >
            Quero acessar o IA VENDAS
          </a>
        </div>
      )}
    </header>
  )
}
