import Logo from "./logo"
import InfoModal from "./modals/infomodal"

export default function Navbar() {
    return (
        <div className="flex flex-row justify-between items-center align-middle shadow-md px-4"
        style={{height: "44px"}}
        >
            <div className="flex flex-row justify-start items-center w-1/2">
                <Logo />
            </div>
            <div className="flex flex-row gap-2 w-1/2 justify-end">
                <InfoModal />
            </div>
        </div>
    )
}