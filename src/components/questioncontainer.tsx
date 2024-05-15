import { useAppSelector } from '../redux/hook'
import BotMessage from './chat/botmessage'
import Question from './chat/question'
import Options from './clickables/option'

function QuestionContainer({ index }: { index: number }) {
    const gameplay = useAppSelector(state => state.gameplay)

    return (
        <div className='min-h-screen'>
            <BotMessage>
                <Question 
                question={gameplay.questions[index].question}
                questionindex={index}
                totalquestions={gameplay.questions.length}
                status="pending"
                points={gameplay.score}
                />
                <Options
                options={gameplay.questions[index].answers}
                onChange={(index) => console.log(index)}
                disabled={true}
                correctOption={gameplay.questions[index].correctAnswerIndex}
                />
            </BotMessage>
        </div>
    )
}

export default function QuestionsContainer() {
    const gameplay = useAppSelector(state => state.gameplay)

    return (
    <div>
        {gameplay.questions.map((_, index) => (
        index <= gameplay.currentQuestion ? <QuestionContainer key={index} index={index} /> : null
        ))}
    </div>
    )
}