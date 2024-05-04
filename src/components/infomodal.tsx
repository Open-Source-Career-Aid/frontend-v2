import BasicModal from "./modalbox"

export default function InfoModal() {
    return (
        <div>
            <button>
                <img src="info.png" alt="dark mode" className='h-10' />
            </button>
            <BasicModal />
        </div>
    )
}