let s = "tuuuuuuuriiiiiiing"

let solution = (s) => {
    let string = ""
    var myarray = []
    for (let i = 0; i <= s.length; i++){
        if (s[i] !== s[i + 1]) {
            string+=s[i]
            continue
        } else {
            let count = 0 
            const letter = s[i]
            for (let j = i; j <= s.length - 1; j++){
                if(s[j] === s[j+1]){
                    count++
                }else{
                    break
                }
            }
            i+= count
            if (count > 3) {
                count = 3
            }
            for (let m = 0; m < count; m++){
                string +=letter
            }
        }
    }
    return string;
};

console.log(solution(s))
