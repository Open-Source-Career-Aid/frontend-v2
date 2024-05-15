import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { TopicHeader } from "./headers/topicheader";
import QuestionContainer from "./questioncontainer";
import StickyButton from "./stickybutton";

import { useEffect, useState } from "react";

const gameButtonStates = {
    NEXTQUESTION: "Next question",
    SUBMITANSWER: "Submit",
    GAMEEND: "Continue",
}

export default function Gameplay() {
    const gameplay = useAppSelector(state => state.gameplay)
    const questionLoading = useAppSelector(state => state.gameplay.questionLoading)
    const submitted = useAppSelector(state => state.gameplay.submitted)
    const gamecomplete = useAppSelector(state => state.gameplay.gamecomplete)

    const [buttonstate, setButtonState] = useState(gameButtonStates.SUBMITANSWER)

    useEffect(() => {
        if (gamecomplete) {
            setButtonState(gameButtonStates.GAMEEND)
        } else if (submitted) {
            setButtonState(gameButtonStates.NEXTQUESTION)
        } else {
            setButtonState(gameButtonStates.SUBMITANSWER)
        }
    }, [gamecomplete, submitted])


    return (
        <div className="relative w-full h-full">
            <StickyButton>
                <Link to="/game">
                    <motion.button 
                    className={`mx-auto w-full mt-2 mb-4 text-white py-2 px-4 rounded-full ${ !questionLoading ? 'hover:bg-blue-700': 'pointer-events-none bg-disabled-button' }`}
                    animate={{ backgroundColor: questionLoading ? 'rgba(176, 184, 205, 1)' : 'rgba(76, 123, 254, 1)' }}
                    transition={{ duration: 0.5 }}
                    >
                        {buttonstate}
                    </motion.button>
                </Link>
            </StickyButton>
            <div className="flex flex-col w-full px-5 gap-4">
                <div className="flex justify-center w-full mt-6">
                    <TopicHeader topic={gameplay.topic} score={gameplay.score} showscore />
                </div>
                <QuestionContainer />
            </div>
        </div>
    )
}