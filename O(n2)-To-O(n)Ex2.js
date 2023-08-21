const arr11 = []
const arr22 =[]

const arr1 = []
const arr2 = []
for (let i = 0; i < 100000; i++){
    arr1.push(2)
    arr2.push(4)
    arr1.push(5)
    arr2.push(25)

    arr11.push(2)
    arr22.push(4)
    arr11.push(5)
    arr22.push(25)
}
const n = (arr1,arr2) => {

    const object1 = {}
    const object2 = {}


    for (let i = 0; i < arr1.length; i++){
        if (object1[arr1[i]]) {
            object1[arr1[i]] += 1
        } else {
            object1[arr1[i]] = 1
        }
    }
    for (let i = 0; i < arr2.length; i++){
        if (object2[arr2[i]]) {
            object2[arr2[i]] += 1
        } else {
            object2[arr2[i]] = 1
        }
    }

    console.log(object1,object2)
    for (let key in object1) {
        if (!(key ** 2 in object2)) {
            return false
        }
        if (object1[key] !== object2[key ** 2]) {
            return false
        }
    }
    return true
}


const n2 = (arr1,arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++){

        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false
        }
        arr2.splice(correctIndex, 1)
    }

    return true
}
const now = new Date();
console.log(  new Date(now.getTime() + 10 * 60 * 1000));
console.time("n")
console.log(n(arr11,arr22))
console.timeEnd("n")
//====================================================

console.time("n2")
console.log(n2(arr1, arr2))
console.timeEnd("n2")


