import { Link } from "react-router-dom";
import { submitAnswer , nextQuestion , postScores } from "../redux/features/gameplay";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import Button from "./clickables/button";
import { TopicHeader } from "./headers/topicheader";
import QuestionContainer from "./questioncontainer";
import StickyButton from "./stickybutton";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

const gameButtonStates = {
    NEXTQUESTION: "Next question",
    SUBMITANSWER: "Submit",
    GAMEEND: "Continue",
}

export default function Gameplay() {
    const gameplay = useAppSelector(state => state.gameplay)
    const submitted = useAppSelector(state => state.gameplay?.submitted)
    const gamecomplete = useAppSelector(state => state.gameplay?.gamecomplete)
    // let intervalID: undefined | NodeJS.Timeout  = undefined;

    const dispatch = useAppDispatch()

    const [buttonstate, setButtonState] = useState(gameButtonStates.SUBMITANSWER)

    const navigate = useNavigate()

    useEffect(() => {
        if (gamecomplete) {
            dispatch(postScores(gameplay))
            setButtonState(gameButtonStates.GAMEEND)
        } else if (submitted) {
            setButtonState(gameButtonStates.NEXTQUESTION)
        } else {
            setButtonState(gameButtonStates.SUBMITANSWER)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gamecomplete, submitted])

    const handleButtonClick = () => {
        if (buttonstate === gameButtonStates.SUBMITANSWER) {
            dispatch(submitAnswer())
        } else if (buttonstate === gameButtonStates.NEXTQUESTION) {
            dispatch(nextQuestion())
        }
    }

    // if gamecomplete, navigate to summary
    useEffect(() => {
        if (gamecomplete) {
            setInterval(() => navigate('/summary'), 60000);
        }
        // if (setInterval !== undefined) { 
        //     // clearInterval(intervalID);
        //      intervalID = undefined;
        //     }
        
    }, [gamecomplete, navigate])

    return (
        <div className="relative w-full h-full">
            <StickyButton>
                <Link to={gamecomplete ? '/summary' : '#'}>
                    <Button
                    loading={buttonstate === gameButtonStates.SUBMITANSWER ? 
                        gameplay.currentAnswer === null : 
                        false}
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
                <TopicHeader topic={gameplay.topic} score={gameplay.score} url={gameplay.url} showscore  />
            </div>
            <div className="flex flex-col w-full px-5 gap-4">
                <QuestionContainer />
                <div className="h-12"></div>
            </div>
        </div>
    )
}