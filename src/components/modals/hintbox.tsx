import BasicModal from "./modalbox"
import { useState } from "react"
import Points from "../chat/points"
import Button from "../clickables/button"
import IconComponent from '../icon'; 

function HintBoxHeader() {
    return (
        <div className="flex justify-between items-center w-full">
            <div className="flex justify-center items-center size-12 rounded-full bg-blue-illustration mx-auto">
                <IconComponent
                name="Lightbulb"
                classNames="size-6"
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
                <p className="line-through text-text-secondary">{before}</p>
                <Points status="pending" points={after} />
            </div>
        </div>
    )
}

function HintBoxFooter({ setOpen , onGetHint }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> , onGetHint?: () => void }) {
    const handleGetHint = () => {
        setOpen(false)
        onGetHint && onGetHint()
    }
    return (
        <div className="flex flex-col w-full gap-2">
            <Button onClick={handleGetHint}>
                Get Hint
            </Button>
            <Button type="blueOutline" onClick={() => setOpen(false)}>
                Cancel
            </Button>
        </div>
    )
}

export default function HintBox({ before , after , onGetHint }: { before: number, after: number, onGetHint?: () => void }) {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Button type="blueOutline" onClick={() => setOpen(true)}>
                <div className='flex flex-row justify-center gap-2 items-center'>
                <IconComponent
                name="Lightbulb"
                classNames="w-6 h-6"
                />
                    <span className='text-blue-primary font-medium'>Hint</span>
                </div>
            </Button>
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
                    <HintBoxFooter setOpen={setOpen} onGetHint={onGetHint} />
                </div>
            </BasicModal>
        </div>
    )
}       