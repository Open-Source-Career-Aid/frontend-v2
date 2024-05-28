import  Container from './container'

export default function StickyButton({children}: {children: React.ReactNode}) {
    return (
        <div className="fixed w-full bottom-0 left-0 z-10">
            <Container>
                <div className="mx-auto flex justify-center px-5 bg-[#F6F9FF] w-full">
                    <div className="w-full pt-2 pb-4">
                        {children}
                    </div>
                </div>
            </Container>
        </div>
    )
}