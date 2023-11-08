import Button from '../buttton/Button.jsx'
import ScrollButton from '../buttton/ScrollButton.jsx'
import Circle from '../circle/Circle.jsx'
import { Heading, Subheading } from '../text/Text.jsx'
import { motion } from 'framer-motion'
import './Hero.scss'

function Hero() {
    return (
        <div className='HeroContainer'>

            <motion.div 
                className='headings' 
                initial={{x: -300, opacity: 0}} 
                whileInView={{ x: 0, opacity: 1, transition: { duration: 1.2, type: "spring"} }}
            >
                <Subheading value="Desarrollador Web Frontend" />
                <Heading value="Matias Di muro" />
                <Button text="Contactarme"/>
            </motion.div>

            <motion.div 
                className='portrait'
                initial={{x: 300, opacity: 0}} 
                whileInView={{ x: 0, opacity: 1, transition: { duration: 1.2, type: "spring"} }} 
            >
                <Circle/>
            </motion.div>

            <ScrollButton />

        </div>
    )
}

export default Hero