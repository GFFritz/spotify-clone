import { MenuBar } from './MenuBar'
import { Playlists } from './Playlists'

export function LeftBar() {
  return (
    <div className="w-1/4 flex flex-col gap-4">
      <MenuBar />
      <Playlists />
    </div>
  )
}
