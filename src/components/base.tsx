import { motion } from "framer-motion";
import { useAppSelector , useAppDispatch } from "../redux/hook";
import { setLoading } from "../redux/features/topic";
import BotMessage from "./chat/botmessage";
import Footer from "./footer";
import { TopicHeader } from "./headers/topicheader";
import Image from "./image";
import Logo from "./logo";
import StickyButton from "./stickybutton";
import Button from './clickables/button';
import { ArrowRight } from 'lucide-react';

export default function Base() {
    const topic = useAppSelector(state => state.topic.topic)
    const welcomeMessage = useAppSelector(state => state.topic.welcomeMessage)
    const imgsrc = useAppSelector(state => state.topic.imgsrc)
    const loading = useAppSelector(state => state.topic.loading)
    const dispatch = useAppDispatch()

    const handleLoading = () => {
        dispatch(setLoading(false))
    }

    return (
        <div className="relative w-full h-full">
            <StickyButton>
                <Button
                to="/game" 
                loading={loading}
                onClick={() => console.log('Clicked!')}
                >
                    Let's Play
                <span style={{ marginLeft: '10px' }}> <ArrowRight /></span>
                </Button>

            </StickyButton>
            <div className="flex flex-col w-full px-5 gap-4">
                <div className="h-6"></div>
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
                onAnimationComplete={handleLoading}
                >
                    <TopicHeader topic={topic} />
                    <Image src={imgsrc} alt={topic} />
                </motion.div>
            </div>
            <Footer />
        </div>
    )
}