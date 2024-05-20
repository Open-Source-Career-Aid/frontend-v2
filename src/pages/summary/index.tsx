import Summary from "../../components/summary";
import { motion } from "framer-motion";

export default function SummaryPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className='w-full h-full'
        >
            <Summary />
        </motion.div>
    )
}