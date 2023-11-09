import { Heading, Subheading } from "../text/Text"
import ImageStartUpTemplate from "../../assets/startuptemplate-background.png"
import ImageBeIunigoTemplate from "../../assets/beiunigo-background.png"
import ImageMusicfy from "../../assets/musicfy-background.png"
import BackScrollButton from "../buttton/BackScrollButton"
import { motion } from "framer-motion"
import "./ProjectsSlider.scss"

const projects = [
    {
        name: "Startup Template",
        text: "Sitio web dedicado a una compañía ficticia, mostrando en diferentes secciones información de contacto, servicios, testimonios, idea de negocio, y más.",
        url: "https://matiasdimuro.github.io/Startup-Template-1/",
        image: ImageStartUpTemplate
    },
    {
        name: "Be Iunigo",
        text: "Landing page dedicada a un plan lanzado por Be Iunigo para incorporar personal de IT.",
        url: "https://matiasdimuro.github.io/be-iunigo/",
        image: ImageBeIunigoTemplate

    },
    {
        name: "Musicfy",
        text: "Landing page orientada a una app de reproducción de música ficticia, buscando atraer clientes con las virtudes y funcionalidades de la misma.",
        url: "https://matiasdimuro.github.io/musicfy/",
        image: ImageMusicfy

    }
]

function ProjectsSlider () {
    return projects.map((project, index) => (
        <section key={index} className='bgGradientPrimary-TB' >
            <div className="ProjectSlider" style={{ position: "relative" }}>
                <Item props={project} />
            <BackScrollButton />
            </div>
        </section>
    ))
}

function Item ({props}) {
    return (
        <motion.div 
            className="ProjectSliderItem" 
            initial={{ y: 100, opacity: 0, scale: .5 }} 
            whileInView={{ y: 0, opacity: 1, scale: 1, transition: { 
                duration: 1,
                delay: .1,
                type: "spring" 
            } }}
            viewport={{ once: true }} >

            <div className="headings">
                <Subheading value="Proyectos Web" />
                <Heading value={props.name} />
            </div>

            <div className="content">
                <div className="colorLayer">
                    <img src={props.image} alt="Project image" />
                </div>
                <div className="footer">
                    <p>{props.text}</p>
                    <ItemButton url={props.url} />
                </div>
            </div>

        </motion.div>
    )
}

function ItemButton({ url }) {
    return <a className="ItemButton" href={url} target="_blank">Ver proyecto</a>
}

export default ProjectsSlider