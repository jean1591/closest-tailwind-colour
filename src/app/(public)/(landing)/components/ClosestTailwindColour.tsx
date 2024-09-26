'use client'

import { RootState } from '@/store/store'
import { rgbToHex } from '@/utils/colourConverter'
import { tailwindColours } from '@/store/features/colours/tailwindColours'
import { useSelector } from 'react-redux'

export const ClosestTailwindColour = () => {
  const { tailwindClosestColour } = useSelector(
    (state: RootState) => state.colours
  )

  const tailwindClosestColourRgb =
    tailwindColours[tailwindClosestColour ?? 'state-50']

  return (
    <div>
      <p className="text-lg font-medium">Closest Tailwind colour</p>
      <div
        className="h-16 w-full rounded-xl"
        style={{
          backgroundColor: `${rgbToHex(tailwindClosestColourRgb[0], tailwindClosestColourRgb[1], tailwindClosestColourRgb[2])}`,
        }}
      />
    </div>
  )
}
