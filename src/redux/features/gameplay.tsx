import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import { getContent } from '../../helpers/getContent';

type Question = {
    id: string,
    question: string,
    options: Array<string>,
    correct_option: number,
    hint: string,
    messages: Array<string>,
}

type gameplayState = {
    id: string,
    score: number,
    scores: Array<number>,
    totalPossibleScores: Array<number>,
    hintPenalties: Array<number>,
    date: string,
    topic: string,
    topicloading: boolean,
    imgsrc: string,
    welcomeMessage: string,
    nexttopic: string,
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
    id: '',
    score: 0,
    scores: [],
    totalPossibleScores: [10, 15, 20, 25, 30],
    hintPenalties: [5, 5, 10, 10, 15],
    date: '',
    topic: '',
    topicloading: true,
    imgsrc: '',
    welcomeMessage: '',
    nexttopic: '',
    questions: [],
    currentQuestion: 0,
    currentAnswer: null,
    questionstates: ['pending', 'pending', 'pending', 'pending', 'pending'],
    hintsTaken: [false, false, false, false, false],
    previousAnswers: [],
    questionLoading: true,
    submitted: false,
    gamecomplete: false
}

// define a middelware that updates the local storage whenever the state changes
const saveState = (state: gameplayState) => {
    const date = new Date().toLocaleDateString()
    localStorage.setItem(date, JSON.stringify(state))
}

export const getTodaysContent = createAsyncThunk(
    'gameplay/getTodaysContent',
    // check if today's content is stored in local storage by date
    async () => {
        const date = new Date().toLocaleDateString()
        const content = localStorage.getItem(date)
        if (content) {
            console.log("content found in local storage")
            return JSON.parse(content)
        }
        const _newContent = await getContent()
        console.log(_newContent)
        const newContent = {
            ...initialState,
            id: _newContent.id,
            date: _newContent.date,
            topic: _newContent.topic,
            questions: _newContent.questions,
            welcomeMessage: _newContent.welcome_message,
            nexttopic: _newContent.nexttopic,
            imgsrc: _newContent.imgsrc,
        }
        localStorage.setItem(date, JSON.stringify(newContent))
        return newContent
    }
)


export const gameplaySlice = createSlice({
  name: 'gameplay',
  initialState,
  reducers: {
    setScore: (state, action) => {
        state.score = action.payload
        saveState(state)
    },
    setDate: (state, action) => {
        state.date = action.payload
        saveState(state)
    },
    setTopic: (state, action) => {
        state.topic = action.payload
        saveState(state)        
    },
    setQuestions: (state, action) => {
        state.questions = action.payload
        saveState(state)
    },
    setCurrentQuestion: (state, action) => {
        state.currentQuestion = action.payload
        saveState(state)
    },
    setCurrentAnswer: (state, action) => {
        state.currentAnswer = action.payload
        saveState(state)
    },
    setPreviousAnswers: (state, action) => {
        state.previousAnswers = action.payload
        saveState(state)
    },
    setQuestionLoading: (state, action) => {
        state.questionLoading = action.payload
        saveState(state)
    },
    setSubmitted: (state, action) => {
        state.submitted = action.payload
        saveState(state)
    },
    setGameComplete: (state, action) => {
        state.gamecomplete = action.payload
        saveState(state)
    },
    submitAnswer: (state) => {
        if (state.currentAnswer === null) {
            throw new Error('Cannot submit an answer without selecting an option')
        }
        state.submitted = true
        state.questionstates[state.currentQuestion] = state.currentAnswer === state.questions[state.currentQuestion].correct_option ? 'won' : 'lost'
        state.previousAnswers = [...state.previousAnswers, state.currentAnswer]
        if (state.currentAnswer === state.questions[state.currentQuestion].correct_option) {
            state.score += state.totalPossibleScores[state.currentQuestion]
            state.scores = [...state.scores, state.totalPossibleScores[state.currentQuestion]]
        } else {
            state.scores = [...state.scores, 0]
        }
        state.currentAnswer = null
        if (state.currentQuestion === state.questions.length - 1) {
            state.gamecomplete = true
        } 
        // else {
        //     state.currentQuestion += 1
        //     state.questionLoading = true
        // }
        saveState(state)
    },
    nextQuestion: (state) => {
        if (state.currentQuestion === state.questions.length - 1) {
            throw new Error('Cannot move to the next question when the game is complete')
        }
        state.currentQuestion += 1
        state.questionLoading = true
        state.submitted = false
        saveState(state)
    },
    getHint: (state) => {
        state.hintsTaken[state.currentQuestion] = true
        state.totalPossibleScores[state.currentQuestion] -= state.hintPenalties[state.currentQuestion]
        saveState(state)
    },
    setLoading: (state, action) => {
        state.topicloading = action.payload
        saveState(state)
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(getTodaysContent.pending, (state) => {
            state.topicloading = true
        })
        .addCase(getTodaysContent.fulfilled, (state, action) => {
            state.topicloading = false
            state.id = action.payload.id
            state.date = action.payload.date
            state.topic = action.payload.topic
            state.questions = action.payload.questions
            state.welcomeMessage = action.payload.welcomeMessage
            state.nexttopic = action.payload.nexttopic
            state.imgsrc = action.payload.imgsrc
        })
  }
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
    nextQuestion,
    getHint,
    setLoading
} = gameplaySlice.actions

export default gameplaySlice.reducer