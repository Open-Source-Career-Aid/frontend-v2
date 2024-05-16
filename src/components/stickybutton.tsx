export default function StickyButton({children}: {children: React.ReactNode}) {
    return (
        <div className="fixed w-full bottom-0 left-0 z-40">
            <div className="mx-auto flex justify-center px-5 bg-[#F6F9FF]"
            style={{width: "430px"}}
            >
                <div className="w-full">
                    {children}
                </div>
            </div>
        </div>
    )
}