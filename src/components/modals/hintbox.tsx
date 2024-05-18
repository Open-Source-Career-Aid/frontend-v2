import BasicModal from "./modalbox"
import { useState } from "react"
import Points from "../chat/points"
import Button from "../clickables/button"
import { Lightbulb } from 'lucide-react';
import BotMessage from "../chat/botmessage";



function HintBoxHeader() {
    return (
        <div className="flex justify-between items-center w-full">
            <div className="flex justify-center items-center size-12 rounded-full bg-blue-illustration mx-auto">
                <img
                    src="icons/Lightbulb.png"
                    alt="hint"
                    className="size-6"
                />
            </div>
        </div>
    )
}

function HintBoxBody() {
    return (
        <div className="flex flex-col w-full">
            <p className="text-text-primary text-center">
                <b>This hint will cut possible points.</b>
                <br/>
                I know you have a little brain, but are you sure you want this hint?
            </p>
        </div>
    )
}

function HintPoints({ before , after }: { before: number, after: number }) {
    return (
        <div className="flex w-full">
            <div className="flex gap-2 mx-auto">
                <p className="line-through text-disabled-buttons">{before}</p>
                <Points status="pending" points={after} />
            </div>
        </div>
    )
}

function HintBoxFooter({ setOpen, handleGetHint }: { setOpen: React.Dispatch<React.SetStateAction<boolean>>, handleGetHint: () => void }) {
    return (
        <div className="flex flex-col w-full gap-2">
            <Button 
             to="#"
            loading={false}
            onClick={handleGetHint}  
            >
                Get Hint
            </Button>
            <Button
            to="#" 
            loading={false}
            onClick={() => setOpen(false)} 
            >
                Cancel
            </Button>
        </div>
    );
}


export default function HintBox({ before , after }: { before: number, after: number }) {
    const [open, setOpen] = useState(false)
    const [hintVisible, setHintVisible] = useState(false);

    function handleGetHint() {
        setHintVisible(true);
        setOpen(false);
    }


    return (
        <div>
        <button
            onClick={() => setOpen(true)}
            className="
                    bg-white-600 text-blue font-bold
                    rounded-md px-4 py-2 text-sm
                    shadow hover:bg-blue-700
                    focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50
                    transition-colors
                    flex items-center justify-center space-x-2
                "
            >
            Hints
        </button>
            <BasicModal
            height="320px"
            width="320px"
            open={open}
            setOpen={setOpen}
            >
                <div className="flex flex-col p-4 gap-4">
                    <HintBoxHeader />
                    <HintBoxBody />
                    <HintPoints before={before} after={after} />
                    <HintBoxFooter setOpen={setOpen} handleGetHint={handleGetHint} />

                </div>
            </BasicModal>

            {hintVisible && (
                <BotMessage>
                    <p>This is a hint!</p>
                </BotMessage>
            )}
        </div>
    )
}       