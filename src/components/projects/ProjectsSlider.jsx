import { Heading, Subheading } from "../text/Text"
import ImageStartUpTemplate from "../../assets/startuptemplate-background.png"
import ImageBeIunigoTemplate from "../../assets/beiunigo-background.png"
import ImageMusicfy from "../../assets/musicfy-background.png"
import ImageClubDeNegocios from "../../assets/club-de-negocios.png"
import ImageSkullshirt from "../../assets/skullshirt.png"
import BackScrollButton from "../buttton/BackScrollButton"
import { motion } from "framer-motion"
import "./ProjectsSlider.scss"

const projects = [
    {
        name: "Club de Negocios",
        text: "Landing page dedicada con fines didácticos a una comunidad real sobre emprendeurismo y desarrollo personal.",
        urlApp: "https://club-de-negocios-demo.netlify.app",
        urlRepo: "https://github.com/matiasdimuro/club-de-negocios",
        image: ImageClubDeNegocios,
        technologies: ["Astro", "Typescript", "Tailwind CSS", "Calendly"],
        finished: true
    },
    {
        name: "Skullshirt",
        text: "Ecommerce ficticio orientado a un emprendimiento de indumentaria para mostrar y gestionar el catálogo, pedidos y pagos.",
        urlApp: "https://skullshirt.vercel.app",
        urlRepo: "https://github.com/matiasdimuro/skullshirt",
        image: ImageSkullshirt,
        technologies: ["Astro", "NodeJS", "Express", "MongoDB", "Typescript", "Tailwind CSS"],
        finished: false
    },
    {
        name: "Startup Template",
        text: "Sitio web dedicado a una compañía ficticia, mostrando servicios, planes, testimonios, clientes, etc.",
        urlApp: "https://matiasdimuro.github.io/Startup-Template-1/",
        urlRepo: "https://github.com/matiasdimuro/Startup-Template-1",
        image: ImageStartUpTemplate,
        technologies: ["HTML", "CSS"],
        finished: true
    },
    {
        name: "Be Iunigo",
        text: "Landing page dedicada a un plan lanzado por Be Iunigo para incorporar personal de IT.",
        urlApp: "https://matiasdimuro.github.io/be-iunigo/",
        urlRepo: "https://github.com/matiasdimuro/be-iunigo",
        image: ImageBeIunigoTemplate,
        technologies: ["HTML", "CSS", "Bootstrap", "Javascript"],
        finished: true
    },
    {
        name: "Musicfy",
        text: "Landing page orientada a una app de reproducción de música ficticia, buscando atraer clientes con las virtudes y funcionalidades de la misma.",
        urlApp: "https://matiasdimuro.github.io/musicfy/",
        urlRepo: "https://github.com/matiasdimuro/musicfy/",
        image: ImageMusicfy,
        technologies: ["ReactJS", "Typescript", "HTML", "CSS"],
        finished: true
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
                <a href={props.urlApp} target="_self" alt={`Link to ${props.name}`}>
                    <div className="colorLayer">
                        <img src={props.image} alt="Project image" />
                    </div>
                </a>
                <div className="footer">
                    <p>{props.text}</p>
                    <ItemButton url={props.urlRepo} label="Ver repositorio" />
                </div>
            </div>

        </motion.div>
    )
}

function ItemButton({ url, label }) {
    return <a className="ItemButton" href={url} target="_blank">{label}</a>
}

export default ProjectsSlider