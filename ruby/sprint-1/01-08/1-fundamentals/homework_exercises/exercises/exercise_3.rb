# 3a. The script aims to define a method count_words that takes a sentence as a string and returns a hash with each word as a key and its frequency as the value. 
# The current implementation is flawed and needs debugging.

def count_words(sentence)
    words = sentence.split
    words_count = {}
    
    words.each do |word|
      if words_count.has_key?(word)
        words_count[word] += 1
      else
        words_count[word] = 1
      end
    end
  
    return words_count
  end
  
  # 3b. The script is intended to define a method calculate_factorial that takes an integer and returns its factorial. The current implementation is not functioning correctly.
  
  def calculate_factorial(number)
    if number < 0
      return "Error: Negative number"
    else
      factorial = 1
      (1..number).each do |i|
        factorial *= i
      end
    end
  
    return factorial
  end
  
  # 3c. The script is meant to define a method find_median that takes an array of numbers, sorts it, and returns the median value. The current implementation is not working correctly.
  
  def find_median(numbers)
    if numbers.length == 0
      return nil
    end
    
    sorted_numbers = numbers.sort
    if sorted_numbers.length.odd?
      return sorted_numbers[(sorted_numbers.length / 2)]
    else
      return (sorted_numbers[(sorted_numbers.length / 2) - 1] + sorted_numbers[(sorted_numbers.length / 2)]) / 2.0
    end
  end
  
  # The script is meant to define a method that takes a multi-nested hash, based on the second argument, return that value
  def find_value_in_nested_hash(hash, key)
    if hash.has_key?(key)
      return hash[key]
    else
      hash.values.each do |value|
        if value.is_a?(Hash)
          return find_value_in_nested_hash(value, key) if true
        end
      end
    end
    return nil
  end