import Button from '../buttton/Button.jsx'
import ScrollButton from '../buttton/ScrollButton.jsx'
import Circle from '../circle/Circle.jsx'
// import Me from '../../assets/me.png'
import './Hero.scss'

function Hero() {
    return (
        <div className='HeroContainer'>
            <div className='headings'>
                <h2>Desarrollador Web Frontend</h2>
                <h1>Matias Di muro</h1>
                <Button text="Contactarme"/>
            </div>
            <div className='portrait'>
                {/* <img src={Me} alt="Portrait" /> */}
                <Circle/>
            </div>
            <ScrollButton />
        </div>
    )
}

export default Hero