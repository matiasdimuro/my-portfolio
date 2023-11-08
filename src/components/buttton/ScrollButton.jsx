import { motion } from 'framer-motion'
import { useState } from 'react'
import './ScrollButton.scss'

function ScrollButton() {

    const variants = {
        initial: { scale: 1, x: "-50%", opacity: 0, y: 100 },
        whileTap: { scale: .9 },
        visible: { scale: 1, x: "-50%", opacity: 1, y: 0, transition: { type: "spring" } },
    }

    const variantsItem = {
        initial: { y: 5, x: "50%" },
        end: { y: "80%" }
    }

    return (
        <motion.div 
            className="ScrollButton" 
            onClick={() => setClicked(prev => !prev)} 
            initial={variants.initial} whileTap={variants.whileTap} whileInView={variants.visible}
        >
            <a href="#AcercaDeMi">
                <motion.div initial={variantsItem.initial} animate={variantsItem.end} transition={{delay: .5}} />
            </a>
            
        </motion.div>
    )
}

export default ScrollButton