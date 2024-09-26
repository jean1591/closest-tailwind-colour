import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { getClosestTailwindColour } from '@/utils/distanceCalculator'
import { hexToRgb } from '@/utils/colourConverter'

export interface ColoursSlice {
  colour: string
  tailwindClosestColour: string
  userColourRgb: [number, number, number]
}

const initialState: ColoursSlice = {
  colour: '#f8fafc',
  tailwindClosestColour: 'slate-50',
  userColourRgb: [255, 255, 255],
}

export const coloursSlice = createSlice({
  name: 'coloursSlice',
  initialState,
  reducers: {
    setColour: (state, action: PayloadAction<string>) => {
      state.colour = action.payload
      state.tailwindClosestColour = getClosestTailwindColour(
        hexToRgb(action.payload)
      )
      state.userColourRgb = hexToRgb(action.payload)
    },
  },
})

export const { setColour } = coloursSlice.actions

export default coloursSlice.reducer
