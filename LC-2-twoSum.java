import java.util.HashMap;
import java.util.Arrays;

class Solution {

    public static void main(String[] args){
      int[] arr = {2,7,11,15};
      int target = 9;

      Solution solution = new Solution();
      System.out.println(Arrays.toString(solution.twoSum(arr, target)));
    }

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