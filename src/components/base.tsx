import Navbar from "./navbar";
import Logo from "./logo";
import BotMessage from "./chat/botmessage";
import { TopicHeader } from "./headers/topicheader";
import Image from "./image";
import StickyButton from "./stickybutton";
import Footer from "./footer";
import { motion } from "framer-motion";

export default function Base() {
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
                            Oh, look! Another bipedal challenger. How... quaint. Welcome, carbon-based life form. Let’s see how you fare in my arena of knowledge. Buckle up.
                        </p>
                    </BotMessage>
                </motion.div>
                <motion.div
                className="w-full flex flex-col items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5}}
                >
                    <TopicHeader topic="General Knowledge" />
                    <Image src="https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg" alt="chatbot" />
                </motion.div>
            </div>
            <Footer />
        </div>
    )
}