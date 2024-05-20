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
    scores: Array<number>,
    date: string,
    topic: string,
    questions: Array<Question>,
    currentQuestion: number,
    currentAnswer: number | null,
    questionstates: Array<'pending' | 'won' | 'lost'>,
    hintsTaken: Array<boolean>,
    previousAnswers: Array<number>,
    questionLoading: boolean,
    submitted: boolean,
    gamecomplete: boolean
}

const initialState: gameplayState = {
    userid: 'chinmay',
    score: 0,
    scores: [],
    date: '12/12/2024',
    topic: 'Northern Lights',
    questions: [{
        question: 'What is the capital of France?',
        answers: ['What is the capital of France? What is the capital of France? What is the capital of France? What is the capital of France? What is the capital of France?', 'London', 'Paris', 'Dublin'],
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
    },
    {
        question: 'What is the capital of Ireland?',
        answers: ['New York', 'London', 'Paris', 'Dublin'],
        correctAnswerIndex: 3,
        hint: 'It is known as the city of the Liffey.'
    },
    {
        question: 'What is the capital of Ireland?',
        answers: ['New York', 'London', 'Paris', 'Dublin'],
        correctAnswerIndex: 3,
        hint: 'It is known as the city of the Liffey.'
    }],
    currentQuestion: 0,
    currentAnswer: null,
    questionstates: ['pending', 'pending', 'pending', 'pending', 'pending'],
    hintsTaken: [false, false, false, false, false],
    previousAnswers: [],
    questionLoading: true,
    submitted: false,
    gamecomplete: false
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
    setQuestionLoading: (state, action) => {
        state.questionLoading = action.payload
    },
    setSubmitted: (state, action) => {
        state.submitted = action.payload
    },
    setGameComplete: (state, action) => {
        state.gamecomplete = action.payload
    },
    submitAnswer: (state) => {
        if (state.currentAnswer === null) {
            throw new Error('Cannot submit an answer without selecting an option')
        }
        state.submitted = true
        state.questionstates[state.currentQuestion] = state.currentAnswer === state.questions[state.currentQuestion].correctAnswerIndex ? 'won' : 'lost'
        state.previousAnswers = [...state.previousAnswers, state.currentAnswer]
        if (state.currentAnswer === state.questions[state.currentQuestion].correctAnswerIndex) {
            state.score += 1
            state.scores = [...state.scores, state.score]
        } else {
            state.scores = [...state.scores, 0]
        }
        state.currentAnswer = null
        if (state.currentQuestion === state.questions.length - 1) {
            state.gamecomplete = true
        } else {
            state.currentQuestion += 1
            state.questionLoading = true
        }
    },
    getHint: (state) => {
        state.hintsTaken[state.currentQuestion] = true
    }
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
    setQuestionLoading,
    setSubmitted,
    setGameComplete,
    submitAnswer,
    getHint
} = gameplaySlice.actions

export default gameplaySlice.reducer