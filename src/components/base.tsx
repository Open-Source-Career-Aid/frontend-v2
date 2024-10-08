import { motion } from "framer-motion";
import { useAppSelector , useAppDispatch } from "../redux/hook";
import { setLoading } from "../redux/features/gameplay";
import BotMessage from "./chat/botmessage";
import Footer from "./footer";
// import { TopicHeader } from "./headers/topicheader";
import Image from "./image";
import Logo from "./logo";
// import StickyButton from "./stickybutton";
// import Button from './clickables/button';
// import { ArrowRight } from 'lucide-react';
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getContent } from '../helpers/getContent';
import { useEffect, useState } from "react" // useRef
export default function Base() {
    const gameplay = useAppSelector(state => state.gameplay)
    // const topic = useAppSelector(state => state.gameplay.topic)
    // const url = useAppSelector(state => state.gameplay.url)
    // const welcomeMessage = useAppSelector(state => state.gameplay.welcomeMessage)
    // const imgsrc = useAppSelector(state => state.gameplay.imgsrc)
    // const loading = useAppSelector(state => state.gameplay.topicloading)
    const dispatch = useAppDispatch()
    const [ai_message, setAI] = useState("");
    
    
    const navigate = useNavigate()

    const handleLoading = () => {
        dispatch(setLoading(false))
    }

    if (gameplay.gamecomplete) {
        navigate('/summary')
    }
    useEffect( () => {
        async function fetchAPI () {
            const content = await getContent()
            if (content){
                setAI(content.ai_message);
            }
            }
            fetchAPI()
    }, []);

    return (
        <div className="relative w-full h-full sm-src:resp-sm">
            {/* <StickyButton>
                <Link to="/game">
                    <Button
                    loading={loading}
                    onClick={() => console.log('Clicked!')}
                    >
                        Let's Play
                    <span>
                        <ArrowRight />
                    </span>
                    </Button>
                </Link>
            </StickyButton> */}
            <div className="flex flex-col w-full px-5 gap-4">
                <div className="h-6"></div>
                <div className="flex justify-center w-full mt-6">
                    <Logo showfull />
                </div>
                <motion.div
                className="w-full 2xl:text-xs small:text-xs med:text-base md:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5}}
                >
                    <BotMessage>
                        <p className="text-text-primary">
                            {/* {welcomeMessage} */}
                            { ai_message }
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
                    {/* <TopicHeader topic={topic} url={url} /> */}
                    {/* <Image src={imgsrc} alt={topic} /> */}
                    <Image src="https://i.imgur.com/ZIvWfsg.jpg" alt="Dumbsplain" />
                </motion.div>
            </div>
            <Footer />
        </div>
    )
}