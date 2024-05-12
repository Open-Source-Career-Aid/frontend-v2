import Navbar from "./navbar";
import Logo from "./logo";
import BotMessage from "./chat/botmessage";
import { TopicHeader } from "./headers/topicheader";
import Image from "./image";
import StickyButton from "./stickybutton";
import Footer from "./footer";

export default function Base() {
    return (
        <div className="relative w-full h-full">
            <Navbar />
            <StickyButton text="Start" onClick={() => {}} />
            <div className="flex flex-col w-full px-5 gap-4">
                <div className="flex justify-center w-full mt-6">
                    <Logo showfull />
                </div>
                <BotMessage>
                    <p className="text-text-primary">
                        Oh, look! Another bipedal challenger. How... quaint. Welcome, carbon-based life form. Let’s see how you fare in my arena of knowledge. Buckle up.
                    </p>
                </BotMessage>
                <TopicHeader topic="General Knowledge" />
                <Image src="https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg" alt="chatbot" />
            </div>
            <Footer />
        </div>
    )
}
