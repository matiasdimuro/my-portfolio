import Navbar from './hero/navbar/Navbar'
import Hero from './hero/Hero'
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
      </section>      
      <section id='Proyectos'>Projects</section>      
      <section id='Experiencia'>Experience</section>      
      <section id='Contacto'>Contact</section>      
    </>
  )
}

export default App
