import { motion } from 'framer-motion'
import { useState } from 'react'
import './ScrollButton.scss'

function ScrollButton() {

    const [isClicked, setClicked] = useState(false)

    const variants = {
        initial: { scale: 1 },
        whileTap: { scale: .9 }
    }

    const variantsItem = {
        initial: { y: "5px", x: "50%" },
        end: { y: "120%", x: "50%" }
    }

    return (
        <motion.div 
            className="ScrollButton" 
            onClick={() => setClicked(prev => !prev)} 
            initial={variants.initial} whileTap={variants.whileTap}
        >
            <a href="#AcercaDeMi">
                <motion.div initial={variantsItem.initial} animate={variantsItem.end} transition={{delay: .5}} />
            </a>
            
        </motion.div>
    )
}

export default ScrollButton