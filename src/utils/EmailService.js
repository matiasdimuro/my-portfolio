export function sendEmail(emailFrom, message) {
    return new Promise((resolve, reject) => {

        const SERVICE_ID = 'service_0wbzghb';
        const TEMPLATE_ID = 'template_j5dh0qq'
        const API_KEY = '3eJ842i2lJnVtMZfP'
        var data = {
            service_id: SERVICE_ID,
            template_id: TEMPLATE_ID,
            user_id: API_KEY,
            template_params: {
                from_name: emailFrom,
                from_email: emailFrom,
                to_name: "Matias",
                message: message
            }
        };
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        })
        .then((res) => {
            resolve(res)
        })
        .catch(err => {
            reject(err)
        })
    })
}