import { createSlice } from '@reduxjs/toolkit'

type ProgressState = {
    topic: string,
    welcomeMessage: string,
    imgsrc: string,
}

const initialState: ProgressState = {
    topic: '',
    welcomeMessage: '',
    imgsrc: '',
}

export const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    setTopic: (state, action) => {
        state.topic = action.payload
    },
    setWelcomeMessage: (state, action) => {
        state.welcomeMessage = action.payload
    },
    setImgsrc: (state, action) => {
        state.imgsrc = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
    setTopic,
    setWelcomeMessage,
    setImgsrc,
} = progressSlice.actions

export default progressSlice.reducer