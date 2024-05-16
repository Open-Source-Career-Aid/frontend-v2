import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../redux/hook"
import SummaryHeader from "./headers/summaryheader"
import ScoreGrid from "./summary/scoregrid"

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
            <div className='h-28'>
                <p className='text-center text-lg'>{date}</p>
            </div>
            <div className='h-28'>
                <p className='text-center text-lg'>{topic}</p>
            </div>
            <ScoreGrid scores={scores} hints={[]} />
        </div>
    )
}