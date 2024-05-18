import BasicModal from "./modalbox"
import { useState } from "react"
import Points from "../chat/points"

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

function HintBoxFooter({setOpen}: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <div className="flex flex-col w-full gap-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setOpen(false)}>
                Got it!
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setOpen(false)}>
                Got it!
            </button>
        </div>
    )
}

export default function HintBox({ before , after }: { before: number, after: number }) {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <button onClick={() => setOpen(true)} className="text-blue-primary">
                Test Hint Box Modal
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
                    <HintBoxFooter setOpen={setOpen} />
                </div>
            </BasicModal>
        </div>
    )
}       