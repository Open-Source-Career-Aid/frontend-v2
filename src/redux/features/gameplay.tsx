import { createSlice } from '@reduxjs/toolkit';

type Question = {
    question: string,
    answers: Array<string>,
    correctAnswerIndex: number,
    hint: string
}

type gameplayState = {
    userid: string,
    score: number,
    date: string,
    topic: string,
    questions: Array<Question>,
    currentQuestion: number,
    currentAnswer: string | null,
    previousAnswers: Array<number>
}

const initialState: gameplayState = {
    userid: 'chinmay',
    score: 0,
    date: '12/12/2024',
    topic: 'Northern Lights',
    questions: [{
        question: 'What is the capital of France?',
        answers: ['New York', 'London', 'Paris', 'Dublin'],
        correctAnswerIndex: 2,
        hint: 'It is known as the city of love.'
    },
    {
        question: 'What is the capital of England?',
        answers: ['New York', 'London', 'Paris', 'Dublin'],
        correctAnswerIndex: 1,
        hint: 'It is known as the city of Big Ben.'
    },
    {
        question: 'What is the capital of Ireland?',
        answers: ['New York', 'London', 'Paris', 'Dublin'],
        correctAnswerIndex: 3,
        hint: 'It is known as the city of the Liffey.'
    }],
    currentQuestion: 0,
    currentAnswer: null,
    previousAnswers: [],
}

export const gameplaySlice = createSlice({
  name: 'gameplay',
  initialState,
  reducers: {
    setScore: (state, action) => {
        state.score = action.payload
    },
    setDate: (state, action) => {
        state.date = action.payload
    },
    setTopic: (state, action) => {
        state.topic = action.payload
    },
    setQuestions: (state, action) => {
        state.questions = action.payload
    },
    setCurrentQuestion: (state, action) => {
        state.currentQuestion = action.payload
    },
    setCurrentAnswer: (state, action) => {
        state.currentAnswer = action.payload
    },
    setPreviousAnswers: (state, action) => {
        state.previousAnswers = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
    setScore,
    setDate,
    setTopic,
    setQuestions,
    setCurrentQuestion,
    setCurrentAnswer,
    setPreviousAnswers,
} = gameplaySlice.actions

export default gameplaySlice.reducer