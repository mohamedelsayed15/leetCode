// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"
nums = [0, 2, 3, 4, 6, 8, 9]
nums = [0,1,2,4,5,7]
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let arr = []// return arr
    //loop through nums
    for (let i = 0; i < nums.length; i++){
        //if number + 1 !== next number  
        if (nums[i] + 1 !== nums[i + 1]) {
            // push the number to the array
            arr.push(`${nums[i]}`)
            continue;

        } else {
            // count variable to count how many times numbers are ascending continuously
            let count = 0

            for (let j = i; j < (nums.length); j++){
                // count ++ when numbers are ascending continuously
                if (nums[j] + 1 === nums[j + 1]) {
                    count++
                } else {
                    // once numbers dont relate we push the num[i]->nums[i+count]
                    arr.push(`${nums[i]}->${nums[i + count]}`)
                    //making iteration start with latest number
                    i +=count
                    break;
                }
            }
        }
    }
    return arr
};
console.log(summaryRanges(nums))
