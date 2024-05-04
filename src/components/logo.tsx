export default function Logo() {
    return (
        <div className="flex flex-row justify-between items-center">
            {/* display a image */}
            <img
                src="logo.svg"
                alt="logo"
                className="w-48"
            />
        </div>
    );
}