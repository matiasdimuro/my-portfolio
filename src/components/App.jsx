import Navbar from './hero/navbar/Navbar'
import Hero from './hero/Hero'
import About from './about/About'
import ParallaxBackground from './parallax/ParallaxBackground'
import './App.scss'
import '../index.scss'
import ProjectsSlider from './projects/ProjectsSlider'

function App() {

  return (
    <>
      <main id='Inicio' className='bgGradientPrimary-LtRb'>
        <Navbar/>
        <Hero/>
      </main>      
      <section id='AcercaDeMi' className='bgGradientPrimary-LtRb-Inverted'>
        <About />
      </section>      
      <section className='bgGradientPrimary-TB'>
        <ParallaxBackground headingValue="Proyectos Web" />  
      </section>  
      <article id='Proyectos'>
        <ProjectsSlider />
      </article>
      {/* <section id='Proyectos' className='bgGradientPrimary-TB'> */}
      {/* </section>       */}
      <section id='Experiencia'>Experience</section>      
      <section id='Contacto'>Contact</section>      
    </>
  )
}

export default App
