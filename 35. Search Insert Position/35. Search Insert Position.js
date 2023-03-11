nums = [1, 3, 5, 6], target = 4

var searchInsert = function ( nums , target) {

    for (let i = 0; i < nums.length; i++) { 
        if (nums[i] === target) { return i}
    }

    if (target > nums[nums.length - 1]) { return nums.length }

    let i = nums.length-1

    for (; i >= 0; i--) { 
        if (nums[i] > target) { nums.pop()}
    }
    return nums.length
};
console.log(searchInsert(nums,target))