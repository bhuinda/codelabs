# 1.
array_people = [
  ['James', 'Bond', '90'],
  ['John', 'Smith', '13'],
  ['Bob', 'Dylan', '45']
]

array_people.each {|p| puts "Hi #{p[0]} #{p[1]}! You are #{p[2]} years old today."}

# 2.
hash_people = [
  {
    first_name: 'Jill',
    last_name: 'Smith',
    age: '25'
  },
  {
    first_name: 'Grace',
    last_name: 'Won',
    age: '64'
  },
  {
    first_name: 'Hyacinth',
    last_name: 'Brown',
    age: '135'
  }
]

hash_people.each {|p| puts "Hi #{p[:first_name]} #{p[:last_name]}! You are #{p[:age]} years old today."}

# 3.

hello_world = "Hello world"

hello_world.split('').each {|letter| puts letter}

# 4.

def fizz_buzzer
  (1..100).each do |n|
    if n % 3 == 0 && n % 5 == 0
      puts "FizzBuzz"
    elsif n % 3 == 0
      puts "Fizz"
    elsif n % 5 == 0
      puts "Buzz"
    else
      puts n
    end
  end
end

fizz_buzzer

# 5.

def sum(numbers)
  numbers.inject(:+)
end

puts sum((1..10).to_a)

# 6.

def average(numbers)
  numbers.inject(:+).to_f / numbers.length
end

puts average((1..10).to_a)

# 7.

def length_finder(words)
  words.map {|word| word.length}
end

words = ["hello", "what", "is", "up", "dude"]

puts length_finder(words)

# 8.

def reverse(str)
  reversed_str = ""
  i = str.length - 1
  while i >= 0
    reversed_str += str[i]
    i -= 1
  end
  return reversed_str
end

puts reverse("hello world")

# 9.

def find_longest_word(words)
  longest_word = ""
  words.each {|word| longest_word = word if word.length > longest_word.length}
  return longest_word
end

puts find_longest_word(words)

# 10.

# cheat way
def high(hash)
  hash.map {|k, v| v}.max
end

high_scores = {
  :bronze => 10,
  :silver => 20,
  :gold => 30
}

puts high(high_scores)

# 11.

hash = {
  :a => {
    :b => 30
  },
  :c => {
    :d => 40
  },
  :e => {
    :f => {
      :g => 50
    }
  }
}