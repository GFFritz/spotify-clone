import {
  ArrowRight,
  ChevronRight,
  Dot,
  Folder,
  Heart,
  Library,
  List,
  Pin,
  Plus,
  Search,
} from 'lucide-react'
import Link from 'next/link'

export function YourLibrary() {
  return (
    <div className="rounded-lg bg-card p-4 gap-6 flex flex-col text-zinc-300">
      <div className="flex justify-between items-center">
        <Link href="#" className="hover:text-zinc-50 flex gap-4">
          <Library />
          <span className="font-medium">Sua Biblioteca</span>
        </Link>

        <div className="flex gap-4">
          <Link href="#" className="hover:text-zinc-50">
            <Plus />
          </Link>

          <Link href="#" className="hover:text-zinc-50">
            <ArrowRight />
          </Link>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-2">
          <Link
            href="#"
            className="bg-zinc-800 hover:bg-zinc-700 rounded-full py-1 px-3"
          >
            Playlists
          </Link>
          <Link
            href="#"
            className="bg-zinc-800 hover:bg-zinc-700 rounded-full py-1 px-3"
          >
            Podcasts e Programas
          </Link>
          <Link
            href="#"
            className="bg-zinc-800 hover:bg-zinc-700 rounded-full py-1 px-3"
          >
            Álbuns
          </Link>
        </div>
        <Link
          href="#"
          className="bg-zinc-800 hover:bg-zinc-700 rounded-full flex justify-center items-center w-8 h-8"
        >
          <ChevronRight />
        </Link>
      </div>

      <div className="flex justify-between items-center">
        <Link href="#" className="hover:text-zinc-50">
          <Search height={20} />
        </Link>
        <Link
          href="#"
          className="flex gap-2 text-sm items-center hover:text-zinc-50 hover:font-medium"
        >
          <span>Recentes</span>
          <List />
        </Link>
      </div>

      <div className="flex flex-col">
        <div className="p-2 hover:bg-zinc-900 rounded cursor-pointer flex gap-4 items-center">
          <div className="bg-gradient-to-br from-violet-900 via-indigo-700 to-cyan-200 w-16 h-16 flex justify-center items-center rounded">
            <Heart />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-zinc-50 font-semibold">
              Músicas Curtidas
            </span>
            <div className="flex items-center text-zinc-500 text-xs font-semibold">
              <Pin className="text-green-600 h-4" />
              <span>Playlist</span>
              <Dot />
              <span>275 Músicas</span>
            </div>
          </div>
        </div>

        <div className="p-2 hover:bg-zinc-900 rounded cursor-pointer flex gap-4 items-center">
          <div className="bg-zinc-800 w-16 h-16 flex justify-center items-center rounded">
            <Folder />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-zinc-50 font-semibold">
              Nostalgia
            </span>
            <div className="flex items-center text-zinc-500 text-xs font-semibold">
              <Pin className="text-green-600 h-4" />
              <span>9 Playlists</span>
            </div>
          </div>
        </div>

        <div className="p-2 hover:bg-zinc-900 rounded cursor-pointer flex gap-4 items-center">
          <div className="bg-zinc-800 w-16 h-16 flex justify-center items-center rounded">
            <Folder />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-zinc-50 font-semibold">Match</span>
            <div className="flex items-center text-zinc-500 text-xs font-semibold">
              <Pin className="text-green-600 h-4" />
              <span>2 Playlists</span>
            </div>
          </div>
        </div>

        <div className="p-2 hover:bg-zinc-900 rounded cursor-pointer flex gap-4 items-center">
          <div className="bg-zinc-800 w-16 h-16 flex justify-center items-center rounded">
            <Folder />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-zinc-50 font-semibold">Pessoal</span>
            <div className="flex items-center text-zinc-500 text-xs font-semibold">
              <Pin className="text-green-600 h-4" />
              <span>18 Playlists</span>
            </div>
          </div>
        </div>

        <div className="p-2 hover:bg-zinc-900 rounded cursor-pointer flex gap-4 items-center">
          <div className="bg-zinc-800 w-16 h-16 flex justify-center items-center rounded">
            <Folder />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-zinc-50 font-semibold">Mix</span>
            <div className="flex items-center text-zinc-500 text-xs font-semibold">
              <Pin className="text-green-600 h-4" />
              <span>5 Playlists</span>
            </div>
          </div>
        </div>

        <div className="p-2 hover:bg-zinc-900 rounded cursor-pointer flex gap-4 items-center">
          <div className="bg-zinc-800 w-16 h-16 flex justify-center items-center rounded">
            <Folder />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-zinc-50 font-semibold">Random</span>
            <div className="flex items-center text-zinc-500 text-xs font-semibold">
              <Pin className="text-green-600 h-4" />
              <span>27 Playlists</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
