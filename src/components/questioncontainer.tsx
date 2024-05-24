import React, { useEffect, useRef } from 'react'
import { setCurrentAnswer, setQuestionLoading, getHint } from '../redux/features/gameplay'
import { useAppDispatch, useAppSelector } from '../redux/hook'
import BotMessage from './chat/botmessage'
import HintMessage from './chat/hintmessage'
import Question from './chat/question'
import Options from './clickables/option'
import HintBox from './modals/hintbox'
import { motion } from 'framer-motion'

const PageBreak = () => {
    return(
        <hr className='border-t-1 my-4 w-full border-page-break' />
    )
}

const QuestionContainer = React.forwardRef<HTMLDivElement, { index: number, showHint?: boolean }>(({ index , showHint = false }, ref) => {
    const gameplay = useAppSelector(state => state.gameplay)
    const questionstates = useAppSelector(state => state.gameplay.questionstates)
    const dispatch = useAppDispatch()

    return (
        <div
        className={`${ ref !== null ? 'min-h-screen' : '' }`}
        ref={ref}>
            <div className='flex flex-col justify-center h-28'>
                {index > 0 && <PageBreak />}
            </div>
            <BotMessage fullwidth>
                <div className='w-full pl-10'>
                <Question 
                question={gameplay.questions[index].question}
                questionindex={index}
                totalquestions={gameplay.questions.length}
                status={questionstates[index]}
                points={gameplay.totalPossibleScores[index]}
                />
                </div>
                <Options
                options={gameplay.questions[index].answers}
                onChange={(index) => dispatch(setCurrentAnswer(index))}
                disabled={'pending'!==questionstates[index]}
                correctOption={gameplay.questions[index].correctAnswerIndex}
                onAnimationEnd={() => dispatch(setQuestionLoading(false))}
                />
                {showHint && !gameplay.hintsTaken[index] && !gameplay.questionLoading && !gameplay.submitted &&
                <div className='flex justify-end'>
                    <motion.div
                    className='w-fit'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    >
                        <HintBox before={gameplay.totalPossibleScores[index]} after={gameplay.totalPossibleScores[index]-gameplay.hintPenalties[index]} onGetHint={() => dispatch(getHint())} />
                    </motion.div>
                </div>}
            </BotMessage>
            {gameplay.hintsTaken[index] && <HintMessage>
                <motion.p 
                className='text-text-primary text-start'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                >{gameplay.questions[index].hint}</motion.p>
            </HintMessage>}
            {gameplay.questionstates[index] === 'pending' ? null : gameplay.previousAnswers[index] === gameplay.questions[index].correctAnswerIndex ? <BotMessage>
                <motion.p 
                className='text-text-primary text-start'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                >{gameplay.questions[index].messageifCorrect}</motion.p>
            </BotMessage>
            : <BotMessage>
                <motion.p 
                className='text-text-primary text-start'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                >{gameplay.questions[index].messageifIncorrect}</motion.p>
            </BotMessage>}
        </div>
    )
})

export default function QuestionsContainer() {
    const gameplay = useAppSelector(state => state.gameplay)
    const lastQuestionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (lastQuestionRef.current) {
            lastQuestionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [gameplay.currentQuestion])

    return (
    <div className='max-h-screen overflow-scroll'>
        {gameplay.questions.map((_, index) => (
            index <= gameplay.currentQuestion ? <QuestionContainer 
            ref={index === gameplay.currentQuestion ? lastQuestionRef : null}
            key={index} index={index}
            showHint={gameplay.currentQuestion === index}
            /> : null))}
    </div>
    )
}