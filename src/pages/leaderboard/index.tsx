import { motion } from "framer-motion";
import LeaderBoard from "../../components/leaderboard";

export default function LeaderPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className='w-full h-full'
        >
            <LeaderBoard />
        </motion.div>
    )
}