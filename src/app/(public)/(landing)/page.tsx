import { ColourPanel } from './components/ColourPanel'
import { InputColour } from './components/InputColour'

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-600">
        Closest Tailwind Colour
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <InputColour />
        <ColourPanel />
      </div>
    </div>
  )
}
