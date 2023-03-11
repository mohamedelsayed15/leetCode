s = "   fly me   to   the moossssn  "

var lengthOfLastWord = function (s) {

    s = s.trim()   

    let index = 0

    for (let i = s.length; i >= 0; i--) { 

        if (s[i] === ' ') { index = s.length - i - 1; return index }
        
    }
    return s.length
};
console.log(lengthOfLastWord(s))