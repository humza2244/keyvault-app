const bcrypt = require('bcrypt');
const pool = require('./db');

const saltRounds = 10;
const specialChar = new Set(["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", ":", ";", "'", ",", "<", ".", ">", "?", "/", "~", "`"])

let specialFound = false

// filters if a password has a length greater than 8 and has at least 1 special char. it then salts and hashes the filtered pass
async function userRegister(username, password){

    if (username.length < 4 || username.length > 15){
        return ("Username must be more than 4 characters and less than 15!");
    }
    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (specialChar.has(char)) {
            specialFound = true;
        }
    }
    if (password.length > 8 && specialFound === true){
        const salt = await bcrypt.genSalt(saltRounds)
        const hash = await bcrypt.hash(password, salt)
        return hash
    } else {
        return ("Something went wrong");
    } 
}

//function to let the user login once the user has registered
async function login(username, password){
    //db stuff
}

//functionto register a new pin to view passwords
function saveUserPin(pin){

    //db stuff
}



userRegister("humzabaig", "@sdadasdasdae").then(console.log)