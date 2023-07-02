//Binary search
nums = [-1,0,3,5,9,12,13], target = 9
var search = function(nums, target) {

    let middle = nums[Math.trunc((nums.length-1 ) / 2)]
    let middlePosition=Math.trunc((nums.length-1 ) / 2)

    if (target >= middle) {
        for (let i = middlePosition; i <  nums.length; i++) {
            if (nums[i] === target) { 
                return i
            }
        }
    }
    if (target < middle) {
        for (let i = 0; i < middlePosition; i++) {
            if (nums[i] === target) { 
                return i
            }
        }
    }
    return -1
};
console.log(search(nums,target))