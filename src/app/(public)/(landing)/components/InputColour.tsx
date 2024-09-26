'use client'

import { ChangeEvent } from 'react'
import { setColour } from '@/store/features/colours/slice'
import { useDispatch } from 'react-redux'

export const InputColour = () => {
  const dispatch = useDispatch()

  const handleInputHexColour = (event: ChangeEvent<HTMLInputElement>) => {
    let colour = event.target.value

    if (!colour.startsWith('#')) {
      colour = `#${colour}`
    }

    dispatch(setColour(colour))
  }

  return (
    <div className="space-y-4 rounded-xl border-2 border-slate-300 p-4">
      <div>
        <p className="text-lg font-medium">Hex colour</p>
        <input
          onChange={(event) => handleInputHexColour(event)}
          className="h-16 w-full rounded-xl border-2 border-slate-300 pl-2 text-xl"
          type="text"
          name="hex"
          placeholder="Enter an hex colour value"
        />
      </div>
    </div>
  )
}
