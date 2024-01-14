import { MoreHorizontal, PlusCircle, X } from 'lucide-react'
import Image from 'next/image'

export function RightBar() {
  return (
    <div className="w-1/4 rounded-lg bg-card p-6 ">
      <div className="flex flex-col gap-4 h-fit flex-grow overflow-y-auto">
        <div className="flex justify-between items-center">
          <div>Lofi Girl - beats to relax/study to</div>
          <div className="flex justify-center items-center group h-8 w-8 rounded-full hover:bg-zinc-700">
            <X className="text-zinc-500 cursor-pointer group-hover:text-zinc-50 " />
          </div>
        </div>
        <div>
          <Image
            className="rounded-lg"
            src="/images/music-image.jpg"
            alt=""
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={500}
            height={300}
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
          <div className="bg-zinc-800 gap-4 p-4 rounded-b-lg">
            <h1 className="text- font-bold">Nadav Cohen</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
