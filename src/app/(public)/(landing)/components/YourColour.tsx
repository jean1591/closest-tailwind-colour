'use client'

import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

export const YourColour = () => {
  const { colour } = useSelector((state: RootState) => state.colours)

  return (
    <div>
      <p className="font-medium">Your colour - {colour.toUpperCase()}</p>

      <div
        className="mt-2 h-16 w-full rounded-xl"
        style={{ backgroundColor: `${colour}` }}
      />
    </div>
  )
}
