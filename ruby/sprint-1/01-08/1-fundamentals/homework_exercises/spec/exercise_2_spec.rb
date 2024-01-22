require_relative '../exercises/exercise_2.rb'

describe '#calculate_average' do
  it 'correctly calculates the average of an array of numbers' do
    expect(calculate_average([1, 2, 3, 4, 5])).to eq(3)
    expect(calculate_average([10, 20, 30, 40, 50])).to eq(30)
    expect(calculate_average([-3, -2, -1, 0, 1, 2, 3])).to eq(0)
  end
end

describe '#filter_long_strings' do
  it 'correctly filters strings longer than a given length' do
    expect(filter_long_strings(['apple', 'pear', 'banana', 'plum', 'cherry'], 4)).to eq(['apple', 'banana', 'cherry'])
    expect(filter_long_strings(['a', 'ab', 'abc', 'abcd', 'abcde'], 2)).to eq(['abc', 'abcd', 'abcde'])
    expect(filter_long_strings([], 3)).to eq([])
  end
end

describe '#find_max' do
  it 'correctly finds the maximum number in an array' do
    expect(find_max([1, 3, 5, 7, 9])).to eq(9)
    expect(find_max([-10, -20, -30, -40, -50])).to eq(-10)
    expect(find_max([0])).to eq(0)
  end
end
