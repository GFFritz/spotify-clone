import { MoreHorizontal, PlusCircle, X } from 'lucide-react'
import Image from 'next/image'

export function RightBar() {
  return (
    <div className="w-1/4 rounded-lg bg-card p-6">
      <div className="flex flex-col gap-4 flex-grow">
        <div className="flex justify-between items-center">
          <div>Lofi Girl - beats to relax/study to</div>
          <div className="flex justify-center items-center group h-8 w-8 rounded-full hover:bg-zinc-700">
            <X className="text-zinc-500 cursor-pointer group-hover:text-zinc-50 " />
          </div>
        </div>
        <div>
          <Image
            className="rounded-lg object-cover h-[340px]"
            src="/images/music-image.jpg"
            alt=""
            width={500}
            height={260}
          />
        </div>

        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Forest Dreams</h1>
            <span className="text-zinc-400">Nadav Cohen</span>
          </div>
          <div className="flex justify-center items-center gap-4 text-zinc-400">
            <PlusCircle className="cursor-pointer hover:text-zinc-50" />
            <MoreHorizontal className="cursor-pointer hover:text-zinc-50" />
          </div>
        </div>

        <div className="">
          <Image
            className="rounded-t-lg object-cover h-[200px]"
            src="/images/artist-image.jpg"
            alt=""
            width={500}
            height={260}
          />
          <div className="bg-zinc-800 flex flex-col gap-2 p-4 rounded-b-lg">
            <h1 className="text- font-bold">Nadav Cohen</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
