import Gameplay from "../../components/gameplay"
import { motion } from "framer-motion"

export default function Game() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className='w-full h-full'
        >
            <Gameplay />
        </motion.div>
    )
}