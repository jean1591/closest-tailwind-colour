import { ClosestTailwindColour } from './ClosestTailwindColour'
import { YourColour } from './YourColour'

export const ColourPanel = () => {
  return (
    <div className="space-y-4 rounded-xl border-2 border-slate-300 p-4">
      <YourColour />
      <ClosestTailwindColour />
    </div>
  )
}
