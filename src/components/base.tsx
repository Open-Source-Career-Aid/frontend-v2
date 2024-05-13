import Navbar from "./navbar";
import Logo from "./logo";
import BotMessage from "./chat/botmessage";
import { TopicHeader } from "./headers/topicheader";
import Image from "./image";
import StickyButton from "./stickybutton";
import Footer from "./footer";
import { motion } from "framer-motion";
import { useAppSelector } from "../redux/hook";

export default function Base() {
    const topic = useAppSelector(state => state.progress.topic)
    const welcomeMessage = useAppSelector(state => state.progress.welcomeMessage)
    const imgsrc = useAppSelector(state => state.progress.imgsrc)

    return (
        <div className="relative w-full h-full">
            <Navbar />
            <StickyButton text="Start" onClick={() => {}} />
            <div className="flex flex-col w-full px-5 gap-4">
                <div className="flex justify-center w-full mt-6">
                    <Logo showfull />
                </div>
                <motion.div
                className="w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5}}
                >
                    <BotMessage>
                        <p className="text-text-primary">
                            {welcomeMessage}
                        </p>
                    </BotMessage>
                </motion.div>
                <motion.div
                className="w-full flex flex-col items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5}}
                >
                    <TopicHeader topic={topic} />
                    <Image src={imgsrc} alt={topic} />
                </motion.div>
            </div>
            <Footer />
        </div>
    )
}