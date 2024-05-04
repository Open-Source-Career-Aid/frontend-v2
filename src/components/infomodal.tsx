import BasicModal from "./modalbox"

export default function InfoModal() {
    return (
        <div>
            <BasicModal
                buttonchildren={<img src="info.png" alt="info" className='h-10' />}
            >
                <h1>Instructions</h1>
                <p>Click on the tiles to reveal the hidden image. The goal is to find all the matching pairs in the shortest time possible.</p>
                <p>Good luck!</p>
            </BasicModal>
        </div>
    )
}