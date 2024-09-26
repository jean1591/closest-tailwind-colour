'use client'

import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

export const ClosestTailwindColour = () => {
  const { tailwindColour } = useSelector((state: RootState) => state.colours)

  return (
    <div>
      <p className="text-lg font-medium">
        Closest Tailwind colour - {tailwindColour.name} -{' '}
        {tailwindColour.hexValue.toUpperCase()}
      </p>
      <div
        className="h-16 w-full rounded-xl"
        style={{
          backgroundColor: tailwindColour.hexValue,
        }}
      />
    </div>
  )
}
