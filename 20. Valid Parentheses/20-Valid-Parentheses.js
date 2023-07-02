//s ="([])"
// var isValid = function(s) {
//     switch (s[0]) {
//         case ')':
//         case ']':
//         case '}': {
//             return false
//         }
//     }
//     switch (s[s.length - 1]) {
//         case '(':
//         case '[':
//         case '{': {
//             return false
//         }
//     }
//     var obj = {
//         '(': ')',
//         '[': ']',
//         '{': '}'
//     }
//     let arr = []
//     for (let i = 0; i < s.length; i++) {
//         switch (s[i]) {
//             case '(':
//             case '[':
//             case '{': {
//                 arr.push(s[i])
//                 continue
//             }
//         }
//         if (s[i] !== obj[arr[arr.length-1]]) { return false }
//         arr.pop()
//     }
//     if (arr[0]) { return false}
//     return true
    
// }
let s ="({{[]}})"
var isValid = function (s) {
    if (!Number.isInteger(s.length / 2)) {
        return false
    }
    const obj = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < s.length / 2; i++) {
        if (obj[s[i]] !== s[s.length - i - 1]) {
            return false
        }
    }

    return true
}

console.log(isValid(s))
