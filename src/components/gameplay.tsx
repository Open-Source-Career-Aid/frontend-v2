import StickyButton from "./stickybutton";
import { Link } from "react-router-dom";
import { TopicHeader } from "./headers/topicheader";
import { useAppSelector } from "../redux/hook";
import BotMessage from "./chat/botmessage";
import Question from "./chat/question";
import Options from "./clickables/option";

export default function Gameplay() {
    const gameplay = useAppSelector(state => state.gameplay)

    return (
        <div className="relative w-full h-full">
            <StickyButton>
                <Link to="/game">
                    <button className="mx-auto w-full mt-2 mb-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
                        Let's play
                    </button>
                </Link>
            </StickyButton>
            <div className="flex flex-col w-full px-5 gap-4">
                <div className="flex justify-center w-full mt-6">
                    <TopicHeader topic={gameplay.topic} score={gameplay.score} showscore />
                </div>
                <BotMessage>
                    <Question 
                    question={gameplay.questions[gameplay.currentQuestion].question}
                    questionindex={gameplay.currentQuestion + 1}
                    totalquestions={gameplay.questions.length}
                    status="pending"
                    points={gameplay.score}
                    />
                    {/* {gameplay.questions[gameplay.currentQuestion].answers.map((option, index) => (
                    ))} */}
                    <Options
                    options={gameplay.questions[gameplay.currentQuestion].answers}
                    onChange={(index) => console.log(index)}
                    />
                </BotMessage>
            </div>
        </div>
    )
}