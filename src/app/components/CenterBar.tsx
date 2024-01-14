import { CenterTopBar } from './Center/CenterTopBar'
import { Episodes } from './Center/Episodes'
import { GoodMorning } from './Center/GoodMorning'

export function CenterBar() {
  return (
    <div className="w-1/2 rounded-lg relative z-10 bg-card">
      <CenterTopBar />
      <GoodMorning />
      <Episodes />
    </div>
  )
}
