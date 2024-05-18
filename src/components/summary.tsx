import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../redux/hook"
import SummaryHeader from "./headers/summaryheader"
import ScoreGrid from "./summary/scoregrid"

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const days: { [key: number]: string } = {
        1: '1st',
        2: '2nd',
        3: '3rd',
        4: '4th',
        5: '5th',
        6: '6th',
        7: '7th',
        8: '8th',
        9: '9th',
        10: '10th',
        11: '11th',
        12: '12th',
        13: '13th',
        14: '14th',
        15: '15th',
        16: '16th',
        17: '17th',
        18: '18th',
        19: '19th',
        20: '20th',
        21: '21st',
        22: '22nd',
        23: '23rd',
        24: '24th',
        25: '25th',
        26: '26th',
        27: '27th',
        28: '28th',
        29: '29th',
        30: '30th',
        31: '31st'
    }

function DateAndTopic({ date, topic }: { date: string, topic: string }) {
    
    const dateParts = date.split('/')
    const month = parseInt(dateParts[0])
    const day = parseInt(dateParts[1])
    const year = parseInt(dateParts[2])
    const formattedDate = `${months[month - 1]} ${days[day]} ${year}`

    return (
        <div className=''>
            <p className='text-center text-lg text-text-secondary'>{formattedDate}</p>
            <p className='text-center text-lg font-bold text-orange-strong'>{topic}</p>
        </div>
    )
}

function TomorrowTopic({ topic }: { topic: string }) {
    return (
        <div className=''>
            <p className='text-center text-lg'>Tomorrow's topic: {topic}</p>
        </div>
    )
}

function SocialCTA() {
    return (
        <div className=''>
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

    // useEffect(() => {
    //     if (!gamecomplete) {
    //         navigate('/game')
    //     }
    // }, [gamecomplete, navigate])

    return (
        <div className='min-h-screen'>
            <div className='h-28'></div>
            <div className="w-full flex flex-col gap-4">
                <SummaryHeader score={score} />
                <DateAndTopic date={date} topic={topic} />
                <ScoreGrid scores={scores} hints={[]} />
                <TomorrowTopic topic={topic} />
            </div>
            <SocialCTA />
        </div>
    )
}