import Image from '../../../assets/me3.png'
import './MeImage.scss'

function MeImage() {
    return (
        <div className='MeImage'>
            <img src={Image} alt="Portrait image" />
        </div>
    )
}

export default MeImage