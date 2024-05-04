import { createSlice } from '@reduxjs/toolkit'

type ProgressState = {
    topic: string,
    questions: string[],
    options: string[][],
    dq: number,
    currentLevel: number,
    score: number,
    positivePoints: number,
    negativePoints: number,
}

const initialState: ProgressState = {
    topic: '',
    questions: [],
    options: [],
    dq: 0,
    currentLevel: 1,
    score: 0,
    positivePoints: 0,
    negativePoints: 0,
}

export const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    setTopic: (state, action) => {
      state.topic = action.payload
    },
    setQuestions: (state, action) => {
      state.questions = action.payload
    },
    setOptions: (state, action) => {
      state.options = action.payload
    },
    setCurrentLevel: (state, action) => {
      state.currentLevel = action.payload
    },
    setScore: (state, action) => {
      state.score = action.payload
    },
    setPositivePoints: (state, action) => {
      state.positivePoints = action.payload
    },
    setNegativePoints: (state, action) => {
      state.negativePoints = action.payload
    },
    addPositivePoints: (state, action) => {
      state.positivePoints += action.payload
      state.score += action.payload
    },
    addNegativePoints: (state, action) => {
      state.negativePoints += action.payload
      state.score -= action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
    setTopic, 
    setQuestions, 
    setOptions, 
    setCurrentLevel, 
    setScore, 
    setPositivePoints, 
    setNegativePoints, 
    addPositivePoints, 
    addNegativePoints
} = progressSlice.actions

export default progressSlice.reducer