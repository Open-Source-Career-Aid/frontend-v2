function Dumbness() {
    return (
        <div className="nanum-brush-script-regular text-orange-strong text-5xl ">
            Dumbness
        </div>
    );

}

export default function SummaryHeader({ score }: { score: number }) {
    return (
        <div className="w-full h-[82px] flex flex-col justify-end">
            <div className="flex flex-col justify-between items-center w-full">
                <div className="flex flex-row w-[320px] h-[44px] shadow-md bg-white rounded-md m-auto">
                    <h4 className="relative font-semibold text-text-primary small-heading-h4 m-auto z-0">
                        <div className="absolute z-10 bottom-2 -left-2 origin-bottom-left -rotate-12">
                            <Dumbness />
                        </div>
                        <div className="absolute z-20 bottom-1">
                            <img src="Crossout.png" alt="crossout" className="w-[125px]" />
                        </div>
                        Intelligence 
                        Quotient: 
                    <span className="text-orange-strong"> {score}</span></h4>
                </div>
            </div>
        </div>
    );
}