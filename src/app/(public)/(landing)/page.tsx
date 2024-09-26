import { ColourPanel } from './components/ColourPanel'
import { InputColour } from './components/InputColour'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <InputColour />
        <ColourPanel />
      </div>
    </div>
  )
}
