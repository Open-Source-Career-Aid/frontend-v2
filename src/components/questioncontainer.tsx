import React, { useState, useEffect, useRef } from 'react'
import { setCurrentAnswer, setQuestionLoading } from '../redux/features/gameplay'
import { useAppDispatch, useAppSelector } from '../redux/hook'
import BotMessage from './chat/botmessage'
import Question from './chat/question'
import Options from './clickables/option'
import HintBox from './modals/hintbox';

    const QuestionContainer = React.forwardRef<HTMLDivElement, { index: number, showHint: () => void }>(({ index, showHint }, ref) => {

    const gameplay = useAppSelector(state => state.gameplay)
    const questionstates = useAppSelector(state => state.gameplay.questionstates)
    const dispatch = useAppDispatch()
    const [showHintModal, setShowHintModal] = useState(false); 

    const toggleHintModal = () => {
        setShowHintModal(!showHintModal);
    };

    return (
        <div className='min-h-screen' ref={ref}>
            <div className='h-28'></div>
            <BotMessage>
                <Question 
                question={gameplay.questions[index].question}
                questionindex={index}
                totalquestions={gameplay.questions.length}
                status={questionstates[index]}
                points={gameplay.score}
                />
                <Options
                options={gameplay.questions[index].answers}
                onChange={(index) => dispatch(setCurrentAnswer(index))}
                disabled={'pending'!==questionstates[index]}
                correctOption={gameplay.questions[index].correctAnswerIndex}
                onAnimationEnd={() => dispatch(setQuestionLoading(false))}
                />
                <HintBox before={15} after={10} />
            </BotMessage>
        </div>
    )
})

export default function QuestionsContainer() {
    const gameplay = useAppSelector(state => state.gameplay)
    const lastQuestionRef = useRef<HTMLDivElement | null>(null);
    const [showHintModal, setShowHintModal] = useState(false);
    
    useEffect(() => {
        console.log('scrolling')
        if (lastQuestionRef.current) {
            console.log('scrolling')
            console.log(lastQuestionRef.current)
            lastQuestionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [gameplay.currentQuestion])

    const showHint = () => {
        setShowHintModal(true);
    };

    return (
    <div className='max-h-screen overflow-scroll'>
        {gameplay.questions.map((_, index) => (
            index <= gameplay.currentQuestion ? <QuestionContainer 
            ref={index === gameplay.questions.length - 1 ? lastQuestionRef : null}
            key={index} index={index} showHint={showHint}/> : null
        ))}
         {showHintModal && <HintBox before={10} after={5} />}
    </div>
    )
}