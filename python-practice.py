## Python Practice

class IntString:
  def __init__(self, numbers, strings):
    self.numbers = numbers
    self.strings = strings

  
  def is_equal(self):
    return self.numbers == self.__string_to_int()

  def __string_to_int(self):
    new_ints = []
    for i in self.strings:
      new_ints.append(int(i))
    return new_ints



ints = [1,2,3,4]
strings = [1,2,3,4]
intString = IntString(ints, strings)
print(intString.__string_to_int())
