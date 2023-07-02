let x = 272

var isPalindrome = function(x) {
    let copy = x
    let reverse =0
    while (x > 0) { 
    reverse += x % 10
    x -= (x % 10)
    reverse *= 10
    x = (x / 10)
    }
    reverse /= 10

    return reverse===copy
}