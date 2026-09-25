const LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'O Método', href: '#metodo' },
  { label: 'Conteúdo', href: '#conteudo' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Termos de Uso', href: '#' },
  { label: 'Política de Privacidade', href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink-600 py-14">
      <div className="wrap flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-mist-100">IA VENDAS</p>
          <p className="mt-2 max-w-[32ch] text-sm text-mist-400">
            Inteligência Artificial aplicada a Marketing e Vendas.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3">
          {LINKS.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-mist-400 hover:text-mist-100">
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="wrap mt-10 border-t border-ink-600 pt-6">
        <p className="text-xs text-mist-500">
          {/* Placeholder: preencher com CNPJ, endereço e demais dados legais quando disponíveis. */}
          © {new Date().getFullYear()} IA VENDAS. Todos os direitos reservados. [Razão social / CNPJ a preencher]
        </p>
      </div>
    </footer>
  )
}
