import { createSlice } from '@reduxjs/toolkit';

type TopicState = {
    topic: string,
    welcomeMessage: string,
    imgsrc: string,
    loading: boolean,
}

const initialState: TopicState = {
    topic: 'Northern Lights',
    welcomeMessage: 'Oh, look! Another bipedal challenger. How... quaint. Welcome, carbon-based life form. Let’s see how you fare in my arena of knowledge. Buckle up.',
    imgsrc: 'https://i.abcnewsfe.com/a/580dedcc-4d33-47cc-8588-1fa65852076c/northern-lights-2-gty-bb-240510_1715350462481_hpMain_16x9.jpg?w=992',
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