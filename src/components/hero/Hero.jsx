import Button from '../buttton/Button.jsx'
import ScrollButton from '../buttton/ScrollButton.jsx'
import Circle from '../circle/Circle.jsx'
import { Heading, Subheading } from '../text/Text.jsx'
import { motion } from 'framer-motion'
import MeImage from './image/MeImage.jsx'
import './Hero.scss'

function Hero() {
    return (
        <div className='HeroContainer'>

            <motion.div 
                className='headings' 
                initial={{x: -300, opacity: 0}} 
                whileInView={{ x: 0, opacity: 1, transition: { duration: 1.2, type: "spring", delay: .15} }}
            >
                <Subheading value="Desarrollador Web Frontend" />
                <Heading value="Matias Di muro" />
                <a href="#Contacto">
                    <Button text="Contactarme"/>
                </a>
            </motion.div>

            <motion.div 
                className='portrait'
                initial={{x: 300, opacity: 0}} 
                whileInView={{ x: 0, opacity: 1, transition: { duration: 1.2, type: "spring", delay: .15} }} 
            >
                <Circle MeImage={MeImage}/>
                {/* <MeImage/> */}
            </motion.div>
            <ScrollButton />

        </div>
    )
}

export default Hero