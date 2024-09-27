import { ColourPanel } from './ColourPanel'
import { InputColour } from './InputColour'

export const Converter = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="w-full rounded-xl border-[1px] border-slate-300 bg-white p-8 shadow-xl lg:col-span-2 lg:w-2/3">
          <InputColour />
        </div>

        <div className="flex items-center justify-center lg:col-span-3">
          <div className="w-full rounded-xl border-[1px] border-slate-300 bg-white p-8 shadow-xl">
            <ColourPanel />
          </div>
        </div>
      </div>
    </div>
  )
}
