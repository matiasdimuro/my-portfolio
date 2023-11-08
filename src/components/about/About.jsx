import { Heading, Subheading, Text } from "../text/Text"
import { motion } from "framer-motion"
import "./About.scss"

import Image from "../../assets/about-image.svg"
import BackScrollButton from "../buttton/BackScrollButton"

const items = [
    {
        title: "Aptitudes",
        text: `
        Soy una persona autodidacta, proactiva, organizada y creativa.
        Me gusta dejar mi huella y enfocarme en los detalles`
    },
    {
        title: "Universidad",
        text: `
        Estudiante de Licenciatura en Ciancias de la Computación de la Universidad de Buenos Aires (UBA)`
    },
    {
        title: "Sistema Dual -AHK",
        text: `
        Estudiante del Sistema Dual de la Cámara de Industria y Comercio Argentino-Alemana (AHK) en Sistemas IT (tecnicatura superior en sistemas), con reconocimiento en la Unión Europea.`
    },
    {
        title: "Especialidad",
        text: `
        Soy una persona autodidacta, proactiva, organizada y creativa.
        Me gusta dejar mi huella y enfocarme en los detalles`
    }
]

function About() {
    return (
        <div className="AboutContainer" transition={{ duration: 1, type: "spring" }}>
            <motion.div 
                initial={{ y: 150, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1, transition: { duration: 1, type: "spring" }}}
            >
                <Heading value="Acerca de mi" />
            </motion.div>
            {/* initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 3}}} */}
            <div className="content" >
                <motion.img 
                    src={Image} alt="About me image" 
                    initial={{x: -150, opacity: 0}} 
                    whileInView={{x: 0, opacity: 1, transition: { duration: 1, type: "spring"}}}
                />
                <motion.div 
                    className="itemGrid"
                    initial={{x: 150, opacity: 0}}
                    whileInView={{x: 0, opacity: 1, transition: { duration: 1, type: "spring" } }}    
                >
                    {
                        items.map(item => <Item key={item.title} title={item.title} text={item.text} />)
                    }
                </motion.div>
            </div>

            <BackScrollButton></BackScrollButton>
        </div>
    )
}

function Item({ title, text }) {
    return (
        <motion.div className="Item" whileHover={{ scale: .93, transition: { duration: .02 } }}>
            <Subheading value={title} />
            <Text value={text} />
        </motion.div>
    )
}

export default About