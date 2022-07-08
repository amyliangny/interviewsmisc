/**
 * @param {number[]} nums
 * @return {number}
 */
// var jump = function(nums) {
//     const DP = [nums[0]];
    
//     for (let i = 1; i < nums.length - 1; i++){
//         if (DP[DP.length - 1] >= nums.length - 1) return DP.length;
//         // DP[i] = Math.max(DP[i-1], DP[i-1]+nums[DP[i-1]],DP[i-1]+nums[i]);
//         DP[i] = Math.max(DP[i-1], DP[i-1]+nums[DP[i-1]], Math.min(DP[i-1],1)+nums[Math.min(DP[i-1],1)]);
//     }
//     return DP.length;
// };


// var jump = function(nums) {
//     let position = 0;
//     let DP = [nums[0]];
//     for (let i = 1; i < nums.length; i++){
//         // if (i + nums[i] >= position) position = i;
//         DP[i] = Math.max(DP[i-1] + nums[i], nums[i]);
//         if (DP[DP.length - 1] >= nums.length - 1) return DP.length;
        
//     }
//     return DP.length - 1;
// }

var jump = function(nums) {
    let newMax = 0;
    let jump = 0;
    let oldMax = 0;
    
    for (let i = 0; i < nums.length - 1; i++){
        newMax = Math.max(newMax, i + nums[i]);
        if (i === oldMax){
            jump++;
            oldMax = newMax;
        }
    }
    return jump;
}


// [1]
// [2,0]
// [1,2,3]
// [3,2,1]
// [4,0,0,1,1]
// [2,5,0,0]
// [3,0,8,2,0,0,1]