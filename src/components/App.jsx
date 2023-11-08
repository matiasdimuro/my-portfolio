import Navbar from './hero/navbar/Navbar'
import Hero from './hero/Hero'
import About from './about/About'
import ProjectsBackground from './projects/ProjectsBackground'
import './App.scss'
import '../index.scss'

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
      <section id='Proyectos' className='bgGradientPrimary-TB'>
        <ProjectsBackground />  
      </section>      
      <section id='Experiencia'>Experience</section>      
      <section id='Contacto'>Contact</section>      
    </>
  )
}

export default App
