import { MenuBar } from './Left/MenuBar'
import { YourLibrary } from './Left/YourLibrary'

export function LeftBar() {
  return (
    <div className="w-1/4 flex flex-col gap-4">
      <MenuBar />
      <YourLibrary />
    </div>
  )
}
