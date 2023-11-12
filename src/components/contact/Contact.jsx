import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import { Heading, Subheading, Text } from '../text/Text'
import Button from '../buttton/Button'

import { sendEmail } from '../../utils/EmailService'
import { validateEmail } from '../../utils/Validations'

import './Contact.scss'
import 'react-toastify/dist/ReactToastify.css';

function Contact() {

    const [autoCloseToast, setAutoCloseToast] = useState(false)
    const [emailAddress, setEmailAddress] = useState("")
    const [emailMessage, setEmailMessage] = useState("")

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setAutoCloseToast(5000)
        if (emailAddress === "" || emailMessage === "") {
            toast.warn("Por favor, chequear campos vacíos.", toastModel)
            return 0
        }
        if (!validateEmail(emailAddress)) {
            toast.error("El correo ingresado no es válido.", toastModel)
            return 0
        }
        setAutoCloseToast(false)
        sendEmailToService(emailAddress, emailMessage)
    }

    const sendEmailToService = async (emailAddress, emailMessage) => {
        try {
            const promise = await toast.promise(
                sendEmail(emailAddress, emailMessage),
                {
                  pending: "Enviando correo electrónico",
                  success: 'El correo ha sido enviado exitosamente 👌',
                  error: 'Oops, ha ocurrido un error. 🤯'
                }
            );
            if (!promise.ok) {
                throw new Error("Error al consumir Email.js")
            }
        } 
        catch (err) {
            console.error(err)
        }
        finally {
            setEmailAddress("")
            setEmailMessage("")
        }
    }

    const toastModel = {
        position: "bottom-center",
        autoClose: autoCloseToast,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    }

    return (
        <div className='ContactContainer'>
            <Heading value='Contacto' />
            <div>
                <div className="email">
                    <Subheading value='Por correo electrónico' />
                    <form>
                        <input 
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                            type="email" id='emailAddress' 
                            name='emailForm' placeholder='Ingresa tu email' />
                        <textarea 
                            value={emailMessage}
                            required='true'
                            onChange={(e) => setEmailMessage(e.target.value)}
                            id='emailMessage' name='emailForm' 
                            placeholder='¿Qué deseas contarme?' maxLength={300}>
                        </textarea>
                        <Button onClick={(e) => handleFormSubmit(e)} text='Enviar correo' />
                    </form>
                </div>
                <div className="socmedia">
                    <Subheading value='Por redes sociales' />
                    <div>
                        <a href="https://www.linkedin.com/in/matiasdimuro" target="_blank">
                            <Text value='Linkedin'/>
                        </a>
                        <a href="https://wa.me/541125322406" target="_blank">
                            <Text value='WhatsApp'/>
                        </a>
                        <a href="https://github.com/matiasdimuro" target="_blank">
                            <Text value='GitHub'/>
                        </a>
                    </div>
                </div>
            </div>

            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="dark"
            />
        </div>
    )
}

export default Contact