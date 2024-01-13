import {
  ChevronUp,
  ListOrdered,
  Maximize2,
  MonitorSpeaker,
  Pause,
  PlaySquare,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume1,
} from 'lucide-react'

export function BottomBar() {
  return (
    <div className="flex justify-between bg-black items-center w-full py-4 px-2">
      <div className="flex gap-4 items-center justify-center">
        <div className="h-16 w-16 group relative">
          <img
            src="https://i.scdn.co/image/ab67616d0000485148be7dbea3fbecccb5db135d"
            alt="Album"
            className="rounded-md w-full h-full"
          />
          <div className="group-hover:flex justify-center items-center bg-zinc-800 h-7 w-7 rounded-full absolute top-1 right-1 hidden">
            <ChevronUp />
          </div>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-zinc-50 hover:underline cursor-pointer">
            Forest Dreams
          </span>
          <span className="text-sm text-zinc-400">Nadav Cohan</span>
        </div>
      </div>

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
    </div>
  )
}
