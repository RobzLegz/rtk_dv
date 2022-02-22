const valid = (username: string, name: string, email: string, course: string, rtk_id: string, password: string, cf_password: string) => {
    if(!username || !name || !email || !password || !course || !rtk_id || !cf_password){
        return "Please fill in all fields.";
    }

    if(username.length < 4){
        return "Your username can't be that short.";
    }

    if(username.length > 20){
        return "Your username can't be that long.";
    }

    if(name.length > 30){
        return "Your name can't be that long.";
    }

    if(course.length < 3){
        return "Your course can't be that short.";
    }

    if(!validateEmail(email)){
        return "Invalid email.";
    }

    if(password.length < 6){
        return "Password must be at least 6 characters.";
    }

    if(password !== cf_password){
        return "Passwords did not match.";
    }
}

const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const validatePhoneNumber = (phoneNumber: string) => {
    if(phoneNumber.length === 8){
        return true;
    }

    return false;
}

const validateAddress = (address: string) => {
    if(address.length < 7){
        return false;
    }
    return true;
}

export default valid;

export {
    validateEmail,
    validatePhoneNumber,
    validateAddress,
};