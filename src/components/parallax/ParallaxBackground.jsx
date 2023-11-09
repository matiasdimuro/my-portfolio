import { motion, useScroll, useTransform } from "framer-motion"
import Mountains from "../../assets/mountains.png"
import Stars from "../../assets/stars.png"
import { Heading } from "../text/Text"
import "./ParallaxBackground.scss"
import { useRef } from "react"

function ParallaxBackground({ headingValue }) {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const yHeading = useTransform(scrollYProgress, [0, 1], ["0%", "700%"])
    const xStars = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

    return (
        <div className="ParallaxBackground" ref={ref}>

            <motion.div style={{ y: yHeading }}
            >
                <Heading value={headingValue} />
            </motion.div>

            <img className="mountains" src={Mountains} alt="Mountains image" />
            <motion.img 
                className="stars" src={Stars} alt="Stars image"
                style={{x: xStars}}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: {duration: 1.5, type:"spring", delay: .2 } }}  />

        </div>
    )
}

export default ParallaxBackground