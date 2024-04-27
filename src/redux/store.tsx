import { configureStore } from '@reduxjs/toolkit'
import progressReducer from './features/progress'

export default configureStore({
  reducer: {
    progress: progressReducer,
  },
})