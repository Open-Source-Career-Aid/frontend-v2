import { configureStore } from '@reduxjs/toolkit'
import topicReducer from './features/topic'

export const store = configureStore({
  reducer: {
    topic: topicReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;