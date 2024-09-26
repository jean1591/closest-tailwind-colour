import { ColourPanel } from './components/ColourPanel'
import { InputColour } from './components/InputColour'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-between space-x-8">
      <div className="w-full rounded-xl border-[1px] border-slate-300 bg-white p-8 shadow-xl sm:w-80">
        <InputColour />
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div className="w-full rounded-xl border-[1px] border-slate-300 bg-white p-8 shadow-xl sm:w-2/3">
          <ColourPanel />
        </div>
      </div>
    </div>
  )
}
