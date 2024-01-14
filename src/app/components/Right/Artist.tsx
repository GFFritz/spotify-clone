import { MoreHorizontal, PlusCircle } from 'lucide-react'
import Image from 'next/image'

export function Artist() {
  return (
    <div className="flex flex-col gap-4">
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
      <div>
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
  )
}
