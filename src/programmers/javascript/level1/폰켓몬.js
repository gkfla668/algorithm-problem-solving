function solution(nums) {
    const max = nums.length / 2;
    const noDuplicate = new Set(nums);
    
    return Math.min(max, noDuplicate.size);
}