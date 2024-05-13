import { configureStore } from '@reduxjs/toolkit'
import topicReducer from './features/topic'
import gameplayReducer from './features/gameplay'

export const store = configureStore({
  reducer: {
    topic: topicReducer,
    gameplay: gameplayReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;