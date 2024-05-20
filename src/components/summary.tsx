import { useEffect, useState } from "react"
import { useAppSelector } from "../redux/hook"
import Button from "./clickables/button"
import SummaryHeader from "./headers/summaryheader"
import ScoreComparision from "./modals/scorecomparision"
import ScoreGrid from "./summary/scoregrid"

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const days: { [key: number]: string } = {1: '1st', 2: '2nd', 3: '3rd', 4: '4th', 5: '5th', 6: '6th', 7: '7th',
        8: '8th', 9: '9th', 10: '10th', 11: '11th', 12: '12th', 13: '13th', 14: '14th', 15: '15th', 16: '16th',
        17: '17th', 18: '18th', 19: '19th', 20: '20th', 21: '21st', 22: '22nd', 23: '23rd', 24: '24th',
        25: '25th', 26: '26th', 27: '27th', 28: '28th', 29: '29th', 30: '30th', 31: '31st'}

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

    const now = new Date()
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0)
    const timeUntilMidnight = midnight.getTime() - now.getTime()
    const [hours, setHours] = useState(Math.floor((timeUntilMidnight / 1000 / 60 / 60) % 24))
    const [minutes, setMinutes] = useState(Math.floor((timeUntilMidnight / 1000 / 60) % 60))
    const [seconds, setSeconds] = useState(Math.floor((timeUntilMidnight / 1000) % 60))

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date()
            const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0)
            const timeUntilMidnight = midnight.getTime() - now.getTime()

            setHours(Math.floor((timeUntilMidnight / 1000 / 60 / 60) % 24))
            setMinutes(Math.floor((timeUntilMidnight / 1000 / 60) % 60))
            setSeconds(Math.floor((timeUntilMidnight / 1000) % 60))
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className=''>
            <p className='text-center text-lg text-text-secondary'>Tomorrow's topic:</p>
            <p className='text-center text-lg font-bold text-orange-strong'>{topic}</p>
            <p className='text-center text-lg text-text-secondary'>{hours}:{minutes}:{seconds}</p>
        </div>
    )
}

export default function Summary() {
    const score = useAppSelector(state => state.gameplay.score)
    // const gamecomplete = useAppSelector(state => state.gameplay.gamecomplete)
    const scores = useAppSelector(state => state.gameplay.scores)
    const date = useAppSelector(state => state.gameplay.date)
    const topic = useAppSelector(state => state.gameplay.topic)
    const hints = useAppSelector(state => state.gameplay.hintsTaken)
    
    // const navigate = useNavigate()

    // useEffect(() => {
    //     if (!gamecomplete) {
    //         navigate('/game')
    //     }
    // }, [gamecomplete, navigate])

    const handleShare = async () => {
        if (navigator.share) {
            try {
            const dateParts = date.split('/')
            const month = parseInt(dateParts[0])
            const day = parseInt(dateParts[1])
            const year = parseInt(dateParts[2])
            const formattedDate = `${months[month - 1]} ${days[day]} ${year}`
            let _title = `Dumbnes Quotient: ${score} \n\n${formattedDate} "${topic}"`
            let _text = ''
            for (let i = 0; i < scores.length; i++) {
                if (scores[i] !== 0) {
                    _text += '🟩'
                } else {
                    _text += '🟥'
                }
            }
            await navigator.share({
                title: _title,
                text: _text,
                url: 'https://dumbsplain.com/',
            });
            } catch (error) {
            alert('Error sharing');
            }
        } else {
            alert('Share not supported in your browser');
        }
        };

    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <div className="flex flex-col min-h-screen justify-between">
                <div>
                    <div className='h-16'></div>
                    <div className="w-full flex flex-col gap-4">
                        <SummaryHeader score={score} />
                        <DateAndTopic date={date} topic={topic} />
                        <ScoreGrid scores={scores} hints={hints} />
                        <TomorrowTopic topic={topic} />
                    </div>
                </div>
                {/* <Footer /> */}
                <div className="gap-2 mx-auto flex flex-col justify-center px-5 bg-[#F6F9FF] pt-2 pb-4"
                style={{width: "430px"}}
                >
                    <p className='text-center text-lg text-text-primary'>Are your friends as dumb as you?</p>
                    <Button onClick={handleShare}>
                        Share Your Score
                    </Button>
                    <ScoreComparision
                    score={10}
                    globalAverage={50}
                    />
                </div>
            </div>
        </div>
    )
}