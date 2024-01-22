# Enter Rspec to test your solutions and implement the methods in the exercise_1.rb file.

# 1.a Concatenate Strings
# Write a Ruby method concatenate_strings that takes two strings as arguments and returns their concatenation. 

def concatenate_strings(str1, str2)
    return str1 + str2
  end
  
  # concatenate_strings("coding", " is fun!") == "coding is fun!" # => true
  
  # 2.b Create a Ruby method perform_operations that takes an integer and a float as arguments. 
  # It should return an array containing the results of adding, subtracting, multiplying, and dividing the two numbers (in that order).
  
  def perform_operations(integer, float)
    float1 = integer.to_f
    float2 = float
  
    return [
      float1 + float2,
      float1 - float2,
      float1 * float2,
      float1 / float2
    ]
  end
  
  # perform_operations(4, 2.0) == [6.0, 2.0, 8.0, 2.0] # => true
  
  # 3.b Develop a Ruby method evaluate_logic that takes two boolean values as arguments. The method should return an array containing the results of logical AND, OR, and NOT operations on these booleans. The NOT operation should be applied individually to each boolean.
  
  def evaluate_logic(bool1, bool2)
    return [
      bool1 && bool2,
      bool1 || bool2,
      !bool1,
      !bool2
    ]
  end
  
  # evaluate_logic(true, false) == [false, true, false, true] # => true