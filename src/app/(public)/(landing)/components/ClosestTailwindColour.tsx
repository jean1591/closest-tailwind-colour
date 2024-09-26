'use client'

import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

export const ClosestTailwindColour = () => {
  const { tailwindColour } = useSelector((state: RootState) => state.colours)

  return (
    <div>
      <p className="font-medium">
        Closest Tailwind colour - {tailwindColour.hexValue.toUpperCase()} -{' '}
        {tailwindColour.name}
      </p>

      <div
        className="mt-2 h-16 w-full rounded-xl"
        style={{
          backgroundColor: tailwindColour.hexValue,
        }}
      />
    </div>
  )
}
