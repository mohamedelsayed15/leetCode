nums = [2, 7, 11, 15], target = 9
nums = [3, 2, 4], target = 6
nums = [3, 3], target = 6

var twoSum = function (nums, target) {
    let outPut = []
    let i = 0
    while (i <= nums.length) { 
        num = nums[i]
        nums.forEach((element, index) => {
            if (index !== i) {
                if (element === target - num) { outPut = [index, i] }
            }
    });
    i++
    }
    return outPut
}
// another solution
var twoSum = function (nums, target) {
    for (let i = 0; i <= nums.length; i++) {
        for (let j = 0; j <= nums.length; j++){

            if (j === i) { continue}

            if (nums[j] === target - nums[i]) { return [i, j] }
        }
    }
}