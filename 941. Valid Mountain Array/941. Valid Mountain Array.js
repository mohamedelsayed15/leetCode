arr =
[9,8,7,6,5,4,3,2,1,0]


var validMountainArray = function (arr) {

    if (arr.length < 3) { return false }

    let top = arr.indexOf(Math.max(...arr))

    if (!arr[top + 1]) { return false }
    
    if (top === 0) { return false}

    console.log(top)

    for (let i = 0; i < top-1 ;i++) { 
        if (arr[i] >= arr[i + 1]) { return false}
    }
    for (let i = top ; i < arr.length; i++) { 
        if (arr[i + 1] >= arr[i]) { return false}
    }
    return true
}
console.log(validMountainArray(arr))