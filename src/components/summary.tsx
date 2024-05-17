import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../redux/hook"
import SummaryHeader from "./headers/summaryheader"
import ScoreGrid from "./summary/scoregrid"

function DateAndTopic({ date, topic }: { date: string, topic: string }) {
    return (
        <div className='h-28'>
            <p className='text-center text-lg'>{date}</p>
            <p className='text-center text-lg'>{topic}</p>
        </div>
    )
}

function TomorrowTopic({ topic }: { topic: string }) {
    return (
        <div className='h-28'>
            <p className='text-center text-lg'>Tomorrow's topic: {topic}</p>
        </div>
    )
}

function SocialCTA() {
    return (
        <div className='h-28'>
            <p className='text-center text-lg'>Share your score</p>
            <div className='flex justify-center'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-lg'>Facebook</button>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-lg'>Twitter</button>
            </div>
        </div>
    )
}

export default function Summary() {
    const score = useAppSelector(state => state.gameplay.score)
    const gamecomplete = useAppSelector(state => state.gameplay.gamecomplete)
    const scores = useAppSelector(state => state.gameplay.scores)
    const date = useAppSelector(state => state.gameplay.date)
    const topic = useAppSelector(state => state.gameplay.topic)
    
    const navigate = useNavigate()

    useEffect(() => {
        if (!gamecomplete) {
            navigate('/game')
        }
    }, [gamecomplete, navigate])

    return (
        <div className='min-h-screen'>
            <div className='h-28'></div>
            <SummaryHeader score={score} />
            <DateAndTopic date={date} topic={topic} />
            <ScoreGrid scores={scores} hints={[]} />
            <TomorrowTopic topic={topic} />
            <SocialCTA />
        </div>
    )
}