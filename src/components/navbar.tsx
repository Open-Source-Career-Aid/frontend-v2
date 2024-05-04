import InfoModal from "./infomodal"
import Logo from "./logo"
import Score from "./score"
import ThemeSwitch from "./themeswitch"

export default function Navbar() {
    return (
        <div className="flex flex-row justify-between items-center align-middle p-4 dark:bg-gray-800">
            <div className="flex justify-start w-1/3">
                <Score />
            </div>
            <div className="flex flex-row justify-center items-center w-1/3">
                <Logo />
            </div>
            <div className="flex flex-row gap-2 w-1/3 justify-end">
                <ThemeSwitch />
                <InfoModal />
            </div>
        </div>
    )
}