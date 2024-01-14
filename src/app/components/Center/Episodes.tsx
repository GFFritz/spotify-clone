export function Episodes() {
  return (
    <div className="text-zinc-50 py-4 px-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Episódios para você</h1>
        <span className="text-zinc-300 text-sm font-bold cursor-pointer hover:text-zinc-50">
          Mostrar tudo
        </span>
      </div>
      <div className="flex justify-center items-center gap-6">
        <div className="flex flex-col p-4 justify-center bg-zinc-900 hover:bg-zinc-800 rounded-xl cursor-pointer">
          <img className="rounded-md" src="/images/pod-1.jpg" alt="" />
          <div className="text-zinc-50 flex gap-2 items-center mt-4">
            <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
            <div className="font-semibold text-sm">Lá do Bunker...</div>
          </div>
          <div className="text-zinc-400 text-sm">9 de jan. 48min</div>
        </div>
        <div className="flex flex-col p-4 justify-center bg-zinc-900 hover:bg-zinc-800 rounded-xl cursor-pointer">
          <img className="rounded-md" src="/images/pod-1.jpg" alt="" />
          <div className="text-zinc-50 flex gap-2 items-center mt-4">
            <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
            <div className="font-semibold text-sm">Lá do Bunker...</div>
          </div>
          <div className="text-zinc-400 text-sm">9 de jan. 48min</div>
        </div>
        <div className="flex flex-col p-4 justify-center bg-zinc-900 hover:bg-zinc-800 rounded-xl cursor-pointer">
          <img className="rounded-md" src="/images/pod-1.jpg" alt="" />
          <div className="text-zinc-50 flex gap-2 items-center mt-4">
            <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
            <div className="font-semibold text-sm">Lá do Bunker...</div>
          </div>
          <div className="text-zinc-400 text-sm">9 de jan. 48min</div>
        </div>
        <div className="flex flex-col p-4 justify-center bg-zinc-900 hover:bg-zinc-800 rounded-xl cursor-pointer">
          <img className="rounded-md" src="/images/pod-1.jpg" alt="" />
          <div className="text-zinc-50 flex gap-2 items-center mt-4">
            <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
            <div className="font-semibold text-sm">Lá do Bunker...</div>
          </div>
          <div className="text-zinc-400 text-sm">9 de jan. 48min</div>
        </div>
        <div className="flex flex-col p-4 justify-center bg-zinc-900 hover:bg-zinc-800 rounded-xl cursor-pointer">
          <img className="rounded-md" src="/images/pod-1.jpg" alt="" />
          <div className="text-zinc-50 flex gap-2 items-center mt-4">
            <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
            <div className="font-semibold text-sm">Lá do Bunker...</div>
          </div>
          <div className="text-zinc-400 text-sm">9 de jan. 48min</div>
        </div>
      </div>
    </div>
  )
}
