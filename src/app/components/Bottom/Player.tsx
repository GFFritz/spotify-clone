import { Pause, Repeat, Shuffle, SkipBack, SkipForward } from 'lucide-react'

export function Player() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 text-zinc-400 items-center justify-center">
        <Shuffle className="hover:text-zinc-50 cursor-default" />
        <SkipBack className="hover:text-zinc-50 cursor-default" />
        <div className="bg-zinc-300 text-zinc-950 rounded-full w-8 h-8 flex items-center justify-center cursor-default hover:bg-zinc-50">
          <Pause />
        </div>
        <SkipForward className="hover:text-zinc-50 cursor-default" />
        <Repeat className="hover:text-zinc-50 cursor-default" />
      </div>
      <div className="flex gap-4 items-center">
        <span className="text-xs">3:38</span>
        <div className="rounded-full flex bg-zinc-700 h-1 w-[600px] group">
          <div className="bg-zinc-50 w-3/4 rounded-full group-hover:bg-green-600 relative">
            <div className="hidden group-hover:flex bg-zinc-50 rounded-full w-3 h-3 absolute right-0 -top-1"></div>
          </div>
        </div>
        <span className="text-xs">4:27</span>
      </div>
    </div>
  )
}
