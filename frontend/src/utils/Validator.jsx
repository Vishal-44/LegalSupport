class err{
    constructor(status, message){
        this.status = status
        this.message = message 
    }
}

export const validateLoginDetails = (username, password) => {
    if(username.length === 0) {
        return new err(false, 'username is empty')
    }

    else if(password.length === 0) {
        return new err(false, 'password is empty')
    }

    else if(password.length < 8) {
        return new err(false, 'password is too short.')
    }

    else {
        return new err(true, '')
    }
}

export const validateRegisterDetails = (name,username, password) => {
    if(name.length === 0) {
        return new err(false, 'name is empty')
    }

    else if(username.length === 0) {
        return new err(false, 'username is empty')
    }

    else if(password.length === 0) {
        return new err(false, 'password is empty')
    }

    else if(password.length < 8) {
        return new err(false, 'password is too short.')
    }

    else {
        return new err(true, '')
    }
}