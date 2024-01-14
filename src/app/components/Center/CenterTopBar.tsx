import { ChevronLeft, ChevronRight, Bell, Users } from 'lucide-react'

export function CenterTopBar() {
  return (
    <div>
      <div className="w-full h-1/3 bg-gradient-to-b from-emerald-900 via-emerald-950 to-card absolute -z-10 rounded-t-lg">
        <div className="w-full h-full bg-card opacity-50"></div>
      </div>
      <div className="flex justify-between items-center py-3 px-4">
        <div className="flex gap-2 justify-center items-center">
          <div className="cursor-pointer rounded-full flex justify-center items-center bg-zinc-900 hover:bg-zinc-800 p-1">
            <ChevronLeft />
          </div>
          <div className="cursor-not-allowed rounded-full flex justify-center items-center bg-zinc-900 opacity-70 p-1">
            <ChevronRight />
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="cursor-pointer rounded-full flex justify-center items-center bg-zinc-900 hover:bg-zinc-800 h-8 w-8">
            <Bell className="h-4" />
          </div>
          <div className="cursor-pointer rounded-full flex justify-center items-center bg-zinc-900 hover:bg-zinc-800 h-8 w-8">
            <Users className="h-4" />
          </div>
          <div className="cursor-pointer h-8 w-8 flex justify-center items-center rounded-full bg-zinc-900 group">
            <img
              className="rounded-full w-10/12 group-hover:opacity-90"
              src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=652781198128721&height=50&width=50&ext=1707770794&hash=AfpYBbE7XaQC-ajlbo5B3_H-yGjbg3fHTYdkyX4qfINBhA"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
