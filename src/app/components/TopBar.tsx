import { Copy, Minus, MoreHorizontal, X } from 'lucide-react'
import Link from 'next/link'

export function TopBar() {
  return (
    <div className="flex justify-between items-center w-screen p-2">
      <Link href="#" className="text-zinc-200 hover:text-zinc-50">
        <MoreHorizontal />
      </Link>
      <div className="flex gap-4 items-center">
        <Link href="#" className="text-zinc-200 hover:text-zinc-50">
          <Minus height={18} />
        </Link>
        <Link href="#" className="text-zinc-200 hover:text-zinc-50">
          <Copy height={16} />
        </Link>
        <Link href="#" className="text-zinc-200 hover:text-zinc-50">
          <X height={20} />
        </Link>
      </div>
    </div>
  )
}
