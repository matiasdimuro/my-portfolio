import { useState } from 'react';
import { motion } from "framer-motion";
import './Navbar.scss';

const LINKS = [
    {
        value: "Inicio",
        target: "#Inicio"
    },
    {
        value: "Acerca de mí",
        target: "#AcercaDeMi"
    },
    {
        value: "Proyectos",
        target: "#Proyectos"
    },
    {
        value: "Experiencia",
        target: "#Experiencia"
    },
    {
        value: "Contacto",
        target: "#Contacto"
    }
]

function Navbar() {

    const [isMenuCollapsed, setMenuCollapsed] = useState(false)

    const variantsNavmenu = {
        visible: {
            clipPath: "circle(1200px at 0px 0px)",
            transition: {
                type: "spring",
                damping: 30
            }
        },
        hidden: {
            clipPath: "circle(0px at 0px 0px)",
        }
    }

    const handleNavigation = (target) => {
        const section = document.querySelector(target)
        section.scrollIntoView()
        setMenuCollapsed(prev => !prev)
    }

    return (
        <>
            {/* Expanded */}
            <nav className="NavbarExpanded" >
                <MenuButton 
                    handleClick={setMenuCollapsed} 
                    className={`${!isMenuCollapsed ? 'hidden' : 'visible'}`} />
                <ul>
                    {
                        LINKS.map((link, index) => (
                            <Link 
                                key={index} 
                                text={link.value} 
                                target={link.target} 
                                handleNavigation={handleNavigation}/>
                        ))
                    }
                </ul>
            </nav>
            {/* Collapsed */}
            <motion.nav className='NavbarCollapsed' animate={!isMenuCollapsed ? "hidden" : "visible"} variants={variantsNavmenu}>
                <CloseButton handleClick={setMenuCollapsed} />
                <ul>
                    {
                        LINKS.map((link, index) => (
                            <Link 
                                key={index} 
                                text={link.value} 
                                target={link.target}
                                handleNavigation={handleNavigation}/>
                        ))
                    }
                </ul>
            </motion.nav>
        </>
    )
}

function Link({ text, target, handleNavigation }) {
    return (
        <li onClick={() => handleNavigation(target)}>
            <p>{text}</p>
        </li>
    )
}

function MenuButton({ handleClick }) {
    return (
        <svg
            className='MenuButton' 
            onClick={() => handleClick(prev => !prev)}
            xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M20.05 11H3.95C3.42533 11 3 11.4253 3 11.95V12.05C3 12.5747 3.42533 13 3.95 13H20.05C20.5747 13 21 12.5747 21 12.05V11.95C21 11.4253 20.5747 11 20.05 11Z" fill="#D8D8D8"/>
        <path d="M20.05 16H3.95C3.42533 16 3 16.4253 3 16.95V17.05C3 17.5747 3.42533 18 3.95 18H20.05C20.5747 18 21 17.5747 21 17.05V16.95C21 16.4253 20.5747 16 20.05 16Z" fill="#D8D8D8"/>
        <path d="M20.05 6H3.95C3.42533 6 3 6.42533 3 6.95V7.05C3 7.57467 3.42533 8 3.95 8H20.05C20.5747 8 21 7.57467 21 7.05V6.95C21 6.42533 20.5747 6 20.05 6Z" fill="#D8D8D8"/>
        </svg>
    )
}

function CloseButton({ handleClick }) {
    return (
        <svg
            className='CloseButton' 
            onClick={() => handleClick(prev => !prev)}
            xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
        <g clipPath="url(#clip0_312_73)">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.0001 13.414L17.6571 19.071C17.8457 19.2532 18.0983 19.3539 18.3605 19.3517C18.6227 19.3494 18.8735 19.2442 19.0589 19.0588C19.2443 18.8734 19.3495 18.6226 19.3517 18.3604C19.354 18.0982 19.2532 17.8456 19.0711 17.657L13.4141 12L19.0711 6.343C19.2532 6.15439 19.354 5.90179 19.3517 5.6396C19.3495 5.3774 19.2443 5.12659 19.0589 4.94118C18.8735 4.75577 18.6227 4.6506 18.3605 4.64832C18.0983 4.64604 17.8457 4.74684 17.6571 4.929L12.0001 10.586L6.34307 4.929C6.15362 4.75134 5.90248 4.65436 5.6428 4.65858C5.38311 4.6628 5.13526 4.76788 4.95168 4.95159C4.76809 5.1353 4.66319 5.38323 4.65915 5.64292C4.65512 5.9026 4.75228 6.15367 4.93007 6.343L10.5861 12L4.92907 17.657C4.83356 17.7492 4.75738 17.8596 4.70497 17.9816C4.65256 18.1036 4.62497 18.2348 4.62382 18.3676C4.62266 18.5004 4.64796 18.6321 4.69825 18.755C4.74853 18.8778 4.82278 18.9895 4.91667 19.0834C5.01057 19.1773 5.12222 19.2515 5.24511 19.3018C5.36801 19.3521 5.49969 19.3774 5.63247 19.3762C5.76525 19.3751 5.89647 19.3475 6.01847 19.2951C6.14048 19.2427 6.25082 19.1665 6.34307 19.071L12.0001 13.414Z" fill="#232323"/>
        </g>
        <defs>
        <clipPath id="clip0_312_73">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>
    )
}

export default Navbar