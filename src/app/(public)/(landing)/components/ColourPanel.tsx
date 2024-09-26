'use client'

import { ColourPresenter } from './ColourPresenter'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

export const ColourPanel = () => {
  const { colour, tailwindColour } = useSelector(
    (state: RootState) => state.colours
  )

  return (
    <div className="flex items-center justify-center gap-8">
      <ColourPresenter backgroundColour={colour} label="input" />
      <ColourPresenter
        backgroundColour={tailwindColour.hexValue}
        colourLabel={tailwindColour.name}
        label="tailwind"
      />
    </div>
  )
}
