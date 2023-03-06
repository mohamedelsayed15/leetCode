var findKthPositive = function (arr, k) {
    let i = 1
    let missing = [] //missing integers array
    /* instead of limit 1000 we use k + arr.length to get max size of missing and arr arrays */
    while (i <= (k +arr.length )) { 
        if (!arr.includes(i)) { missing.push(i) }
        i++
    }
    console.log(missing)
    return missing[k-1]
}

//-----------------faster with for loop----------------------
// var findKthPositive = function (arr, k) {
//     let missing = [] //missing integers array
//     /* instead of limit 1000 we use k + arr.length to get max size of missing and arr arrays */
    
//     for(let i = 1; i <= k +arr.length;i++) { 
//         if (!arr.includes(i)) { missing.push(i) }
//     }
//     return missing[k-1]
// }
