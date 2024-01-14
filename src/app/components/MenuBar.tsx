import { HomeIcon, Search } from 'lucide-react'
import Link from 'next/link'

export function MenuBar() {
  return (
    <div className="w-full rounded-lg bg-card flex flex-col p-4 gap-6">
      <Link
        href="#"
        className="flex gap-4 items-center justify-start text-zinc-200 hover:text-zinc-50"
      >
        <HomeIcon width={20} height={20} />
        <span>Inicio</span>
      </Link>

      <Link
        href="#"
        className="flex gap-4 items-center justify-start text-zinc-200 hover:text-zinc-50"
      >
        <Search />
        <span>Buscar</span>
      </Link>
    </div>
  )
}
