import { useAppSelector , useAppDispatch } from '../redux/hook'
import BotMessage from './chat/botmessage'
import Question from './chat/question'
import Options from './clickables/option'
import { setQuestionLoading , setCurrentAnswer } from '../redux/features/gameplay'

function QuestionContainer({ index }: { index: number }) {
    const gameplay = useAppSelector(state => state.gameplay)
    const questionstates = useAppSelector(state => state.gameplay.questionstates)
    const dispatch = useAppDispatch()

    return (
        <div className='min-h-screen'>
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
            </BotMessage>
        </div>
    )
}

export default function QuestionsContainer() {
    const gameplay = useAppSelector(state => state.gameplay)

    return (
    <div className='max-h-screen overflow-scroll'>
        {gameplay.questions.map((_, index) => (
        index <= gameplay.currentQuestion ? <QuestionContainer key={index} index={index} /> : null
        ))}
    </div>
    )
}