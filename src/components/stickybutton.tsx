export default function StickyButton({text, onClick}: {text: string, onClick: () => void}) {
    return (
        <div className="fixed w-full bottom-0 left-0">
            <div className="mx-auto flex justify-center px-5 bg-[#F6F9FF]"
            style={{width: "430px"}}
            >
                <div className="w-80">
                    <button className="mx-auto w-full mt-2 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={onClick}>
                        {text}
                    </button>
                </div>
            </div>
        </div>
    )
}