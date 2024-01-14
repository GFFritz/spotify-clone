import { X } from 'lucide-react'
import Image from 'next/image'

export function MusicInfo() {
  return (
    <div className="flex flex-col gap-4">
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
    </div>
  )
}
