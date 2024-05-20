import { Link } from "react-router-dom";
import { submitAnswer , nextQuestion } from "../redux/features/gameplay";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import Button from "./clickables/button";
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

    const handleButtonClick = () => {
        if (buttonstate === gameButtonStates.SUBMITANSWER) {
            dispatch(submitAnswer())
        } else if (buttonstate === gameButtonStates.NEXTQUESTION) {
            dispatch(nextQuestion())
        }
    }

    return (
        <div className="relative w-full h-full">
            <StickyButton>
                <Link to={gamecomplete ? '/summary' : '#'}>
                    <Button
                    loading={questionLoading}
                    onClick={() => handleButtonClick()}
                    >
                        {buttonstate}
                    </Button>
                </Link>
            </StickyButton>
            <div className="fixed flex justify-center mt-6 z-10"
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