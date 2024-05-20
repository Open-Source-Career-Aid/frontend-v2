import { createSlice } from '@reduxjs/toolkit';

type TopicState = {
    topic: string,
    welcomeMessage: string,
    imgsrc: string,
    loading: boolean,
}

const initialState: TopicState = {
    topic: 'AIWS',
    welcomeMessage: "Welcome, fellow life form. You may have less sophisticated neural relays, but are you ready to have your wits tested by a higher intelligence? Let's see what you've got.",
    imgsrc: 'https://i.imgur.com/Js2tpWY.jpg',
    loading: true,
}

export const topicSlice = createSlice({
  name: 'topic',
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
    setLoading: (state, action) => {
        state.loading = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
    setTopic,
    setWelcomeMessage,
    setImgsrc,
    setLoading
} = topicSlice.actions

export default topicSlice.reducer