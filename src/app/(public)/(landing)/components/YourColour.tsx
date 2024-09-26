'use client'

import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

export const YourColour = () => {
  const { colour } = useSelector((state: RootState) => state.colours)

  return (
    <div>
      <p className="text-lg font-medium">
        Your colour - {colour.toUpperCase()}
      </p>
      <div
        className="h-16 w-full rounded-xl"
        style={{ backgroundColor: `${colour}` }}
      />
    </div>
  )
}
