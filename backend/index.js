const bcrypt = require('bcrypt');
const saltRounds = 10;

const specialChar = new set(["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", ":", ";", "'", ",", "<", ".", ">", "?", "/", "~", "`"])


async function userRegister(username, plainPass){
    
    for (let i = 0; i < plainPass.length; i++) {
        const char = plainPass[i];
        if (specialChar.has(char)) {
            if (plainPass.length > 8){
                const salt = await bcrypt.genSalt(saltRounds)
                const hash = await bcrypt.hash(plainPass, salt)
                return hash
            } else {
                return "Password is too short";
            }
        } else {
            return "Password doesn't have a special character";
        }

    }
}


userRegister("abasdasdac", "asa").then(console.log)


