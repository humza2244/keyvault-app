const bcrypt = require('bcrypt');
const saltRounds = 10;
const specialChar = new Set(["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", ":", ";", "'", ",", "<", ".", ">", "?", "/", "~", "`"])

let specialFound = false


// filters if a password has a length greater than 8 and has at least 1 special char. it then salts and hashes the filtered pass
async function userRegister(username, plainPass){
    for (let i = 0; i < plainPass.length; i++) {
        const char = plainPass[i];
        console.log(plainPass[i])

        if (specialChar.has(char)) {
            specialFound = true;
        }
    }
    if (plainPass.length > 8 && specialFound === true){
        const salt = await bcrypt.genSalt(saltRounds)
        const hash = await bcrypt.hash(plainPass, salt)
        return hash
    } else{
        console.log("Something went wrong")
    }
}


userRegister("abasdasdac", "assdddddeeee@e").then(console.log)


