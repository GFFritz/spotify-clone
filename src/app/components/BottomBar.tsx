import { Player } from './Bottom/Player'
import { Music } from './Bottom/Music'
import { Controls } from './Bottom/Controls'

export function BottomBar() {
  return (
    <div className="flex justify-between bg-black items-center w-full py-4 px-2">
      <Music />
      <Player />
      <Controls />
    </div>
  )
}
