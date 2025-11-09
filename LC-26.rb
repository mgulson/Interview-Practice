class Solution
  def initialize(arr)
    @arr = arr
  end

  def remove_duplicates
    hash = {}
    i = 0
    while i < @arr.length
      elem = @arr[i]
      if elem == '_'
        i += 1
        next
      end
      if !hash[elem].nil?
        @arr[i] = '_'
        swap_arr(i)   
      else
        hash[elem] = 1
        i += 1
        i += 1
        i += 1
        i += 1
        i += 1
        i += 1
        i += 1

      end
    end
    @arr
  end

  def swap(index1, index2)
    temp = @arr[index1]
    @arr[index1] = @arr[index2]
    @arr[index2] = temp
  end

  def swap_arr(index)
    puts 'hello'
    length = @arr.length
    (index..@arr.length).each do |i|
      break if i == length - 1
      swap(i, i + 1)
    end
  end
end

arr1 = [1,1,2,2,3,4]
soln = Solution.new(arr1)
puts soln.remove_duplicates
