import { Play } from 'lucide-react'
import Image from 'next/image'

export function GoodMorning() {
  return (
    <div className="text-zinc-50 z-10 py-3 px-4">
      <h1 className="text-3xl font-bold">Bom dia</h1>
      <div className="grid grid-cols-3 justify-center gap-4 items-center mt-4">
        <div className="flex items-center gap-3 bg-zinc-900 rounded hover:bg-zinc-800 cursor-default group relative">
          <Image
            className="rounded-s"
            src="/images/list-1.jpg"
            alt=""
            width={55}
            height={55}
          />
          <span className="text-[10px] font-semibold">
            Lofi Girl - beats to relax/study to
          </span>
          <div className="bg-green-600 rounded-full w-9 h-9 hidden items-center justify-center group-hover:flex absolute right-2">
            <Play className="ms-1 text-black" />
          </div>
        </div>
        <div className="flex items-center gap-3 bg-zinc-900 rounded hover:bg-zinc-800 cursor-default group relative">
          <Image
            className="rounded-s"
            src="/images/list-2.jpg"
            alt=""
            width={55}
            height={55}
          />
          <span className="text-[10px] font-semibold">Daily Mix 5</span>
          <div className="bg-green-600 rounded-full w-9 h-9 hidden items-center justify-center group-hover:flex absolute right-2">
            <Play className="ms-1 text-black" />
          </div>
        </div>
        <div className="flex items-center gap-3 bg-zinc-900 rounded hover:bg-zinc-800 cursor-default group relative">
          <Image
            className="rounded-s"
            src="/images/list-3.jpg"
            alt=""
            width={55}
            height={55}
          />
          <span className="text-[10px] font-semibold">NerdCast</span>
          <div className="bg-green-600 rounded-full w-9 h-9 hidden items-center justify-center group-hover:flex absolute right-2">
            <Play className="ms-1 text-black" />
          </div>
        </div>
        <div className="flex items-center gap-3 bg-zinc-900 rounded hover:bg-zinc-800 cursor-default group relative">
          <Image
            className="rounded-s"
            src="/images/list-4.jpg"
            alt=""
            width={55}
            height={55}
          />
          <span className="text-[10px] font-semibold">
            Synthwave - LoFi Boy
          </span>
          <div className="bg-green-600 rounded-full w-9 h-9 hidden items-center justify-center group-hover:flex absolute right-2">
            <Play className="ms-1 text-black" />
          </div>
        </div>
        <div className="flex items-center gap-3 bg-zinc-900 rounded hover:bg-zinc-800 cursor-default group relative">
          <Image
            className="rounded-s"
            src="/images/list-5.jpg"
            alt=""
            width={55}
            height={55}
          />
          <span className="text-[10px] font-semibold">Daily Mix 4</span>
          <div className="bg-green-600 rounded-full w-9 h-9 hidden items-center justify-center group-hover:flex absolute right-2">
            <Play className="ms-1 text-black" />
          </div>
        </div>
        <div className="flex items-center gap-3 bg-zinc-900 rounded hover:bg-zinc-800 cursor-default group relative">
          <Image
            className="rounded-s"
            src="/images/list-6.jpg"
            alt=""
            width={55}
            height={55}
          />
          <span className="text-[10px] font-semibold">Mix de Lil Nas X</span>
          <div className="bg-green-600 rounded-full w-9 h-9 hidden items-center justify-center group-hover:flex absolute right-2">
            <Play className="ms-1 text-black" />
          </div>
        </div>
      </div>
    </div>
  )
}
