var intToRoman = function (num) {

    //set of charachters
    const obj100 = { 100: 'C', 200: 'CC', 300: 'CCC', 400: 'CD', 500: 'D', 600: 'DC', 700: 'DCC', 800: 'DCCC', 900: 'CM' }

    const obj10 = { 10: 'X', 20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L', 60: 'LX', 70: 'LXX', 80: 'LXXX', 90: 'XC' }

    const obj1 = {0:'', 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX' }

    //start constraint num < 3999
    //dealing with 1000 and above
    let mod = num % 1000
    let text = ''
    for (let i = 0; i < (num - mod) / 1000; i++) {
    
        text += 'M'
    }
    num = mod

    //dealing with 100 and above
    if (num > 99) {

        mod = num - (num % 100)

        text += obj100[mod]

        num = num - mod

    }
    //dealing with 10 and above
    if (num > 9) {

        mod = num - (num % 10)

        text += obj10[mod]

        num = num - mod
    }
    //less than 10
    text += obj1[num]

    return text
}
