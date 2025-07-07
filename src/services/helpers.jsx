const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const helpers = {
    validateEmail(email){
    return emailRegex.test(email);
    },
    validatePassword(password){
        return password.length >= 7;
    },
    validateName(name){
        return name.length > 1;
    }
}