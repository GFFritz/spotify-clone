import { Bell, ChevronLeft, ChevronRight, Play, Users } from 'lucide-react'
import Image from 'next/image'

export function CenterBar() {
  return (
    <div className="w-1/2 rounded-lg relative z-10 bg-card">
      <div className="w-full h-1/3 bg-gradient-to-b from-emerald-900 via-emerald-950 to-card absolute -z-10 rounded-t-lg">
        <div className="w-full h-full bg-card opacity-50"></div>
      </div>
      <div className="flex justify-between items-center py-3 px-4">
        <div className="flex gap-2 justify-center items-center">
          <div className="cursor-pointer rounded-full flex justify-center items-center bg-zinc-900 hover:bg-zinc-800 p-1">
            <ChevronLeft />
          </div>
          <div className="cursor-not-allowed rounded-full flex justify-center items-center bg-zinc-900 opacity-70 p-1">
            <ChevronRight />
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="cursor-pointer rounded-full flex justify-center items-center bg-zinc-900 hover:bg-zinc-800 h-8 w-8">
            <Bell className="h-4" />
          </div>
          <div className="cursor-pointer rounded-full flex justify-center items-center bg-zinc-900 hover:bg-zinc-800 h-8 w-8">
            <Users className="h-4" />
          </div>
          <div className="cursor-pointer h-8 w-8 flex justify-center items-center rounded-full bg-zinc-900 group">
            <img
              className="rounded-full w-10/12 group-hover:opacity-90"
              src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=652781198128721&height=50&width=50&ext=1707770794&hash=AfpYBbE7XaQC-ajlbo5B3_H-yGjbg3fHTYdkyX4qfINBhA"
              alt=""
            />
          </div>
        </div>
      </div>
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
      <div className="text-zinc-50 py-4 px-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Episódios para você</h1>
          <span className="text-zinc-300 text-sm font-bold cursor-pointer hover:text-zinc-50">
            Mostrar tudo
          </span>
        </div>
        <div className="flex justify-center items-center gap-6">
          <div className="flex flex-col p-4 justify-center bg-zinc-900 rounded-xl">
            <img className="rounded-md" src="/images/pod-1.jpg" alt="" />
            <div className="text-zinc-50 flex gap-2 items-center mt-4">
              <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
              <div className="font-semibold text-sm">Lá do Bunker...</div>
            </div>
            <div className="text-zinc-400 text-sm">9 de jan. 48min</div>
          </div>
          <div className="flex flex-col p-4 justify-center bg-zinc-900 rounded-xl">
            <img className="rounded-md" src="/images/pod-1.jpg" alt="" />
            <div className="text-zinc-50 flex gap-2 items-center mt-4">
              <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
              <div className="font-semibold text-sm">Lá do Bunker...</div>
            </div>
            <div className="text-zinc-400 text-sm">9 de jan. 48min</div>
          </div>
          <div className="flex flex-col p-4 justify-center bg-zinc-900 rounded-xl">
            <img className="rounded-md" src="/images/pod-1.jpg" alt="" />
            <div className="text-zinc-50 flex gap-2 items-center mt-4">
              <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
              <div className="font-semibold text-sm">Lá do Bunker...</div>
            </div>
            <div className="text-zinc-400 text-sm">9 de jan. 48min</div>
          </div>
          <div className="flex flex-col p-4 justify-center bg-zinc-900 rounded-xl">
            <img className="rounded-md" src="/images/pod-1.jpg" alt="" />
            <div className="text-zinc-50 flex gap-2 items-center mt-4">
              <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
              <div className="font-semibold text-sm">Lá do Bunker...</div>
            </div>
            <div className="text-zinc-400 text-sm">9 de jan. 48min</div>
          </div>
          <div className="flex flex-col p-4 justify-center bg-zinc-900 rounded-xl">
            <img className="rounded-md" src="/images/pod-1.jpg" alt="" />
            <div className="text-zinc-50 flex gap-2 items-center mt-4">
              <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
              <div className="font-semibold text-sm">Lá do Bunker...</div>
            </div>
            <div className="text-zinc-400 text-sm">9 de jan. 48min</div>
          </div>
        </div>
      </div>
    </div>
  )
}
