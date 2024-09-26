import { ClosestTailwindColour } from './ClosestTailwindColour'
import { YourColour } from './YourColour'

export const ColourPanel = () => {
  return (
    <div className="space-y-8">
      <YourColour />
      <ClosestTailwindColour />
    </div>
  )
}
