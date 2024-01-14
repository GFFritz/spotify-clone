import { Artist } from './Right/Artist'
import { MusicInfo } from './Right/MusicInfo'

export function RightBar() {
  return (
    <div className="w-1/4 rounded-lg bg-card p-6">
      <div className="flex flex-col gap-6 flex-grow">
        <MusicInfo />
        <Artist />
      </div>
    </div>
  )
}
