import { motion } from "framer-motion"
import BackScrollButton from "../buttton/BackScrollButton"
import { Heading, Text } from "../text/Text"
import HTML from "./language_items/HTML"
import CSS from "./language_items/CSS"
import JS from "./language_items/Javascript"
import SCSS from "./language_items/Sass"
import TWD from "./language_items/Tailwind"
import ReactJS from "./language_items/React"
import GH from "./language_items/Github"
import Figma from "./language_items/Figma"
import SAP from "./language_items/SAP"
import Astro from "./language_items/Astro"
import NodeJS from "./language_items/NodeJS"
import Express from "./language_items/Express"
import TS from "./language_items/Typescript"
import MongoDB from "./language_items/MongoDB"
import "./Experience.scss"
 
const items = [
    {
        rol: "Pasante IT - Desarrollador Frontend",
        company: "Hexagon Consulting",
        yearStart: "2023",
        yearEnd: "Actual",
        desc: `
            Desarrollo de aplicaciones web en ecosistema Cloud Foundry utilizando el framework UI5 de SAP (basado en JavaScript)
        `
    }
]

const variants = {
    initial: {
        x: 20
    },
    animate: {
        x: "-700px",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 8
        }
    }
}

function Experience() {
    return (
        <div className="ExperienceContainer">
            <Heading value="Experiencia" />
            <div>
            {
                items.map(item => (
                    <Item  
                        rol={item.rol} company={item.company}
                        yearStart={item.yearStart} yearEnd={item.yearEnd}
                        desc={item.desc} key={item} />
                ))
            }
            </div>
            <div className="LanguagesBar">
                <div>
                    <motion.div variants={variants} initial="initial" animate="animate" >
                        <Astro></Astro>
                        <ReactJS></ReactJS>
                        <TS></TS>
                        <JS></JS>
                        <TWD></TWD>
                        <SCSS></SCSS>
                        <CSS></CSS>
                        <HTML></HTML>
                        <NodeJS></NodeJS>
                        <Express></Express>
                        <MongoDB></MongoDB>
                        <SAP></SAP>
                        <GH></GH>
                        <Figma></Figma>
                    </motion.div>
                </div>
            </div>
            <BackScrollButton />
        </div>
    )
}


function Item({rol, company, yearStart, yearEnd, desc}) {

    return (
        <div className="ExperienceItem">
            <div className="ExperienceItem_Shape"></div>
            <div>
                <Text value={rol} />
                <Heading value={`${company} | ${yearStart} - ${yearEnd}`} />
                <Text value={desc} />
            </div>
        </div>
    )
}

export default Experience