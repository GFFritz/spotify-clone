import { Copy, Minus, MoreHorizontal, X } from 'lucide-react'
import Link from 'next/link'

export function TopBar() {
  return (
    <div className="flex justify-between items-center w-full mx-2">
      <Link
        href="#"
        className="text-zinc-200 hover:text-zinc-50 cursor-default"
      >
        <MoreHorizontal />
      </Link>
      <div className="flex gap-4 items-center">
        <Link
          href="#"
          className="text-zinc-200 hover:text-zinc-50 hover:bg-zinc-700 p-2 cursor-default"
        >
          <Minus height={18} />
        </Link>
        <Link
          href="#"
          className="text-zinc-200 hover:text-zinc-50 hover:bg-zinc-700 p-2 cursor-default"
        >
          <Copy height={16} />
        </Link>
        <Link
          href="#"
          className="text-zinc-200 hover:text-zinc-50 hover:bg-red-900 p-2 cursor-default"
        >
          <X height={20} />
        </Link>
      </div>
    </div>
  )
}
