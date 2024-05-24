import { useState , useEffect } from "react"
import BasicModal from "./modalbox"
import Button from "../clickables/button"
import IconComponent from '../icon'; 

function InfoModalHeader() {
    return (
        <div className="flex justify-between items-center w-full">
            <h4 className="small-heading-h4 text-text-primary font-semibold pt-6 px-2 pb-2 mx-auto">Are you smarter than AI?</h4>
        </div>
    )
}

function GameStep({ imgsrc , title , content }: { imgsrc: string , title: string , content: string}) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-start font-bold items-center w-full">
                <IconComponent name={imgsrc} classNames="size-8 mr-2" />
                <p className="text-blue-primary">{title}</p>
            </div>
            <p className="text-text-primary pl-10">{content}</p>
        </div>
    )
}

function InfoModalBody() {
    return (
        <div className="flex flex-col w-full gap-4 mx-auto">
            <GameStep 
            imgsrc="ChatBot-large"
            title="AI will ask you the questions"
            content="Every day there’s a new topic with 5 trivia questions." />
            <GameStep 
            imgsrc="Lightbulb"
            title="Hints can help you"
            content="Harder questions are worth more points." />
            <GameStep 
            imgsrc="Award"
            title="Earn your Dumbness quotient"
            content="Humans compare each other’s IQ, but AI just judges your DQ." />
        </div>
    )
}

function InfoModalFooter({setOpen}: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <div className="flex w-full mb-4 justify-end px-2">
            <div>
                <Button
                onClick={() => setOpen(false)}
                >
                    Got it!
                </Button>
            </div>
        </div>
    )
}

export default function InfoModal() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const infoModal = localStorage.getItem('infoModal')
        if (infoModal === null) {
            setOpen(true)
            localStorage.setItem('infoModal', 'true')
        }
    }, [])

    return (
        <div className="w-fit">
            <button onClick={() => setOpen(true)} className="text-blue-primary">
                <IconComponent name="Help" classNames="w-6" />
            </button>
            <BasicModal
            height="424px"
            width="320px"
            open={open}
            setOpen={setOpen}>
                <div className="flex flex-col w-full px-2 gap-4">
                    <InfoModalHeader />
                    <InfoModalBody />
                    <InfoModalFooter setOpen={setOpen} />
                </div>
            </BasicModal>
        </div>
    )
}