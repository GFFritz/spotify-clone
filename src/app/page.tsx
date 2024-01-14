import { BottomBar } from './components/BottomBar'
import { CenterBar } from './components/CenterBar'
import { LeftBar } from './components/LeftBar'
import { RightBar } from './components/RightBar'
import { TopBar } from './components/TopBar'

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <div className="w-full h-full px-2">
        <TopBar />
        <div className="flex bg-black gap-4">
          <LeftBar />
          <CenterBar />
          <RightBar />
        </div>
        <BottomBar />
      </div>
    </main>
  )
}
