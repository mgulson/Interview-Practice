import java.util.HashMap;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> complements = new HashMap<>();
        
        //Two's complement

        for (int i = 0; i < nums.length; i++){
            int complement = target - nums[i];
        
            if(complements.containsKey(nums[i])){
                return new int[]{complements.get(nums[i]), i};
            }
            else {
                complements.put(complement, i);
            }

        }

        return new int[]{};
    }
}