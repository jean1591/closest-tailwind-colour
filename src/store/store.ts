import coloursReducer from './features/colours/slice'
import { configureStore } from '@reduxjs/toolkit'
import interactionsReducer from './features/interactions/slice'

export const store = configureStore({
  reducer: {
    colours: coloursReducer,
    interactions: interactionsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
