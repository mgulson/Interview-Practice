class Solution
  def self.solve2(str1, str2)
    length1 = str1.length
    length2 = str2.length

    if length1 < length2
      length = length1
    else
      length = length2
    end

    ans = ''
    (0..length).each do |i|
      break if str1[i] != str2[i]
      ans += str1[i]
    end
    return ans
  end

  def self.solveArr(arr)
    str1 = nil
    arr.each.with_index do |elem, i|
      if str1.nil?
        str1 = elem 
        next
      end

      str1 = Solution.solve2(str1, elem)
    end
    return str1
  end
end

a = 'flower'
b = 'flowa'
c = 'fli'
arr = [a, b, c]
puts Solution.solveArr(arr)