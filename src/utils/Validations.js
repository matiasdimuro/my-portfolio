export function validateEmail(email) {
    const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/; 
    const isValid = regex.test(email)
    return isValid
}