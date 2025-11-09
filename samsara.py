class Solution:
  def create_markup(self, text):
      text_arr = text.split('\n')
      ans = ''

      is_carrot = False
      for index, string in enumerate(text_arr):
        if index == 0:
          ans += '<p>'
        
        
        if index != len(text_arr) -1 and string == '':
          ans += '</p><p>'
          continue
          
        if index > 0 and text_arr[index -1] != '':
          ans += '<br/>'

        if string[:1] == '>':
          if not is_carrot:
            ans += '<carrot>'
            is_carrot = True
            ans += string[2:]
          elif index == len(text_arr) -1 or text_arr[index + 1][:1] != '>':
            ans += string[2:]
            ans += '</carrot>'
            is_carrot = False
          else:
            ans += string[2:]

        else:
          ans += string
        
        if index == len(text_arr) - 1:
          ans += '</p>'

      return ans

## Put p tags on double newlines
## Put br tags on single new lines
## For > put <carrot text> a b c </carrot text>
## For ~ do strikethrough

input = """Hello My name is

Michael
break here
break here too

> carrot 1
> carrot 2
> carrot 3"""

soln = Solution()
print(soln.create_markup(input))

