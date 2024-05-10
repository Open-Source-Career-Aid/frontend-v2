import BasicModal from "./modalbox"
import { useState } from "react"

function HintBoxHeader() {
    return (
        <div className="flex justify-between items-center w-full">
            <h4 className="small-heading-h4 text-text-primary font-semibold pt-6 px-2 pb-2 mx-auto">Hints</h4>
        </div>
    )
}

function HintBoxBody() {
    return (
        <div className="flex flex-col">
            <p className="text-text-primary whitespace-pre-wrap ">{"Hints can help you answer the questions. You can use them to get a clue about the answer."}</p>
        </div>
    )
}

function HintBoxFooter({setOpen}: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <div className="flex w-full mb-4 justify-end px-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setOpen(false)}>
                Got it!
            </button>
        </div>
    )
}

export default function HintBox() {
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
                <HintBoxHeader />
                <HintBoxBody />
                <HintBoxFooter setOpen={setOpen} />
            </BasicModal>
        </div>
    )
}       