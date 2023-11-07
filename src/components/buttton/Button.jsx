import './Button.scss'

function Button({ text = "Click aquí" }) {
    return (
        <div className='Button-container'>
            <button>{text}</button>
            <div className='Button-borderTop'></div>
            <div className='Button-borderBottom'></div>
            <div className='Button-borderLeft'></div>
            <div className='Button-borderRight'></div>
        </div>
    )
}

export default Button;