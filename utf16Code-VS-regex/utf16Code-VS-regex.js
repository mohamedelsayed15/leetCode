const password = "ds%446D%%$@o9"

const reg = new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$%_&@!]).{8,}$/)

function validatePassword(password) {

    const stringDetails = {

    }
    for (let i = 0; i < password.length; i++) {

        const utf16Code = password[i].charCodeAt(0)

        if ((utf16Code > 96 && utf16Code < 123)) {
            stringDetails.lowerCase = true
            continue
        }
        if ((utf16Code > 64 && utf16Code < 91)) {
            stringDetails.upperCase = true
            continue
        }
        if ((utf16Code > 47 && utf16Code < 58)) {
            stringDetails.number = true
            continue
        }
        switch(utf16Code){
        // $, %, _, &, @, !, and ?:
        case 36:
        case 37:
        case 95:
        case 38:
        case 64:
        case 33:
        case 63:{
            stringDetails.specialCharacters = true
            break
            }
        }
        if (stringDetails.specialCharacters &&
            stringDetails.number &&
            stringDetails.upperCase &&
            stringDetails.lowerCase) {
            return true
            }
    }
    return false
}
console.time("code-1")

for (let i = 0; i < 100000; i++) {
    validatePassword(password)
}
console.timeEnd("code-1")

console.time("regex-2")

for (let i = 0; i < 100000; i++) {

    reg.test(password)
}
console.timeEnd("regex-2")


console.time("regex-1")

for (let i = 0; i < 100000; i++) {

    reg.test(password)
}
console.timeEnd("regex-1")


console.time("code-2")

for (let i = 0; i < 100000; i++) {
    validatePassword(password)
}
console.timeEnd("code-2")
