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
    <div>
      <p className="font-medium">Hex colour</p>
      <p className="mt-2 text-sm text-slate-500">
        Enter an hex colour value and find its closest value in Tailwind.
      </p>

      <input
        onChange={(event) => handleInputHexColour(event)}
        className="mt-4 h-12 w-full rounded-xl border-[1px] border-slate-300 pl-2 text-base"
        type="text"
        name="hex"
        placeholder="Hex colour value"
      />
    </div>
  )
}
