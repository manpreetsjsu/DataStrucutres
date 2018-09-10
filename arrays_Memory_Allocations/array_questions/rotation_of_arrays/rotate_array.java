/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

SOLUTION
*/

// time Complexity - O(n*k), space complexity - O(1)
class Solution {
    public void rotate(int[] nums, int k) {
	if(k == nums.length) return ;
        
	if(k > nums.length) k = k % nums.length ;
      for(int j=0; j < k ; j++){
    
            int last_elm = nums[nums.length-1];
            
            for(int i=nums.length-1; i>=1 ; i--){
                nums[i]=nums[i-1];
            }
            nums[0]=last_elm;
      }
       
        
    }
}

//More efficient solution:- time- O(n) , space- O(1)
//https://www.programcreek.com/2015/03/rotate-array-in-java/