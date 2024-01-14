import { ChevronUp } from 'lucide-react'

export function Music() {
  return (
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
  )
}
