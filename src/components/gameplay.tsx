import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAppSelector , useAppDispatch } from "../redux/hook";
import { submitAnswer } from "../redux/features/gameplay";
import { TopicHeader } from "./headers/topicheader";
import QuestionContainer from "./questioncontainer";
import StickyButton from "./stickybutton";
import Button from "./clickables/button";

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

    const dispatch = useAppDispatch()

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
                <Link to={gamecomplete ? '/summary' : '#'}>
                    <Button
                    loading={questionLoading}
                    onClick={() => dispatch(submitAnswer())}
                    >
                        {buttonstate}
                    </Button>
                </Link>
            </StickyButton>
            <div className="fixed flex justify-center mt-6"
            style={{
                width: "430px",
            }}
            >
                <TopicHeader topic={gameplay.topic} score={gameplay.score} showscore />
            </div>
            <div className="flex flex-col w-full px-5 gap-4">
                <QuestionContainer />
            </div>
        </div>
    )
}