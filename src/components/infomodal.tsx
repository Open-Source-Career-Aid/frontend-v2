import BasicModal from "./modalbox"

export default function InfoModal() {
    return (
        <div className="w-fit">
            <BasicModal
                buttonchildren={<img src="info.png" alt="info" className='h-10' />}
            >
               <div className="relative w-full">
                    <div className="relative top-0 w-full -z-1">
                        <img src="infoheader.svg" alt="info" className='w-full z-0' />
                        <span className='absolute z-10 top-0 p-8'>Information</span>
                    </div>
                    <div className="p-8">
                        <h1 className='text-2xl'>Welcome to the game!</h1>
                        <p className='text-lg'>This is a simple game where you have to guess the number between 1 and 100. You have 10 chances to guess the number. Good luck!</p>
                    </div>
               </div>
            </BasicModal>
        </div>
    )
}