import {
  ListOrdered,
  Maximize2,
  MonitorSpeaker,
  PlaySquare,
  Volume1,
} from 'lucide-react'

export function Controls() {
  return (
    <div className="flex gap-4 justify-center items-center text-zinc-300">
      <PlaySquare className="cursor-pointer text-green-600 hover:text-green-500" />
      <ListOrdered className="cursor-pointer hover:text-zinc-50" />
      <MonitorSpeaker className="cursor-pointer hover:text-zinc-50" />
      <div className="flex gap-2 items-center group">
        <Volume1 className="cursor-pointer hover:text-zinc-50" />
        <div className="rounded-full flex bg-zinc-700 h-1 w-20">
          <div className="bg-zinc-50 w-3/4 rounded-full group-hover:bg-green-600 relative">
            <div className="hidden group-hover:flex bg-zinc-50 rounded-full w-3 h-3 absolute right-0 -top-1"></div>
          </div>
        </div>
      </div>
      <Maximize2 className="cursor-pointer hover:text-zinc-50" height={18} />
    </div>
  )
}
