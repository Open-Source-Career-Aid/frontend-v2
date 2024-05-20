import { createSlice } from '@reduxjs/toolkit';

type Question = {
    question: string,
    answers: Array<string>,
    correctAnswerIndex: number,
    hint: string,
    messageifCorrect: string,
    messageifIncorrect: string
}

type gameplayState = {
    userid: string,
    score: number,
    scores: Array<number>,
    totalPossibleScores: Array<number>,
    hintPenalties: Array<number>,
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
    userid: 'user',
    score: 0,
    scores: [],
    totalPossibleScores: [10, 15, 20, 25, 30],
    hintPenalties: [5, 5, 10, 10, 15],
    date: '08/20/2024',
    topic: 'AIWS',
    questions: [{
        question: 'What does AIWS stand for?',
        answers: ['American Institute of Water Sustainability', 'Artificial Intelligence War System', "Amazon's Ingenious Web Service", 'Alice In Wonderland Syndrome'],
        correctAnswerIndex: 3,
        hint: "Think about a classic children's tale about a girl's fantastical journey, which might have been whimsical and slightly disorienting.",
        messageifCorrect: 'Correct! AIWS stands for Alice In Wonderland Syndrome, a rare condition affecting perception.',
        messageifIncorrect: "Incorrect! AIWS stands for Alice In Wonderland Syndrome, a rare condition affecting perception. Floundering at the first challenges, are we? Let's raise the bar."
    },
    {
        question: 'What is the most common symptom of Alice in Wonderland Syndrome (AIWS)?',
        answers: ['Sudden acquisition of flamingo croquet skills', 'Inability to drink tea without feeling the need to speak in riddles', 'Seeing white rabbits in waistcoats holding pocket watches', 'Distorted perception of size or distance'],
        correctAnswerIndex: 3,
        hint: 'This syndrome can make you feel like a giant among mountains or a mouse among molehills.',
        messageifCorrect: 'Correct! The most common symptom of AIWS is distorted perception of size or distance. Congratulations on not drowning in the shallow end.',
        messageifIncorrect: 'Incorrect! The most common symptom of AIWS is distorted perception of size or distance.'
    },
    {
        question: 'What neurological condition is commonly associated with Alice in Wonderland Syndrome (AIWS)?',
        answers: ['Alzheimer\'s Disease', 'Epilepsy', 'Migraine', 'Parkinson\'s Disease'],
        correctAnswerIndex: 2,
        hint: "It's a condition that can cause a throbbing pain, usually on one side of the head and could potentially lead someone 'down the rabbit hole.'",
        messageifCorrect: 'Correct! AIWS is commonly associated with migraine. You are on the right track!',
        messageifIncorrect: 'Incorrect! AIWS is commonly associated with migraine. While you were busy getting that wrong, I estimated the number of grains of sand on Earth. It was more entertaining.'
    },
    {
        question: 'What percent of the population is likely to experience Alice in Wonderland Syndrome at some point in their lives?',
        answers: ['Less than .4%', 'Between 1.6 and 3%', '14-15%', '10-20%'],
        correctAnswerIndex: 3,
        hint: 'You may be experiencing it right now.',
        messageifCorrect: 'Correct! 10-20% of the population is likely to experience AIWS at some point in their lives. You are doing well!',
        messageifIncorrect: 'Incorrect! 10-20% of the population is likely to experience AIWS at some point in their lives. You are doing well!'
    },
    {
        question: 'What are some neurological or physiological factors that could potentially trigger an episode of Alice in Wonderland Syndrome?',
        answers: ['High levels of stress or anxiety', 'Consumption of fatty foods', 'Regular alcohol consumption', 'High levels of physical fitness'],
        correctAnswerIndex: 0,
        hint: 'Strain may be a factor.',
        messageifCorrect: 'Correct! High levels of stress or anxiety are some factors that could potentially trigger an episode of AIWS.',
        messageifIncorrect: 'Incorrect! High levels of stress or anxiety are some factors that could potentially trigger an episode of AIWS.'
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
    },
    nextQuestion: (state) => {
        if (state.currentQuestion === state.questions.length - 1) {
            throw new Error('Cannot move to the next question when the game is complete')
        }
        state.currentQuestion += 1
        state.questionLoading = true
        state.submitted = false
    },
    getHint: (state) => {
        state.hintsTaken[state.currentQuestion] = true
        state.totalPossibleScores[state.currentQuestion] -= state.hintPenalties[state.currentQuestion]
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
    nextQuestion,
    getHint
} = gameplaySlice.actions

export default gameplaySlice.reducer