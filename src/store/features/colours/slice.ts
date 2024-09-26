import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { hexToRgb, rgbToHex } from '@/utils/colourConverter'

import { getClosestTailwindColour } from '@/utils/distanceCalculator'
import { tailwindColours } from './tailwindColours'

interface TailwindColour {
  name: string
  hexValue: string
  rgbValue: [number, number, number]
}
export interface ColoursSlice {
  colour: string
  tailwindColour: TailwindColour
}

const initialState: ColoursSlice = {
  colour: '#a7f3d0',
  tailwindColour: {
    name: 'emerald-200',
    hexValue: '#a7f3d0',
    rgbValue: [167, 243, 208],
  },
}

export const coloursSlice = createSlice({
  name: 'coloursSlice',
  initialState,
  reducers: {
    setColour: (state, action: PayloadAction<string>) => {
      state.colour = action.payload

      const closestColourHex = hexToRgb(action.payload)
      const closestColour = getClosestTailwindColour(closestColourHex)
      const closestColourRgb = tailwindColours[closestColour]

      state.tailwindColour = {
        name: closestColour,
        hexValue: rgbToHex(
          closestColourRgb[0],
          closestColourRgb[1],
          closestColourRgb[2]
        ),
        rgbValue: closestColourRgb,
      }
    },
  },
})

export const { setColour } = coloursSlice.actions

export default coloursSlice.reducer
