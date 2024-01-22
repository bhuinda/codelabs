require_relative '../exercises/exercise_3'

describe '#count_words' do
  it 'accurately counts the occurrences of each word' do
    sentence = 'hello world hello'
    expected_result = { 'hello' => 2, 'world' => 1 }
    expect(count_words(sentence)).to eq(expected_result)

    sentence = 'repeat repeat repeat'
    expected_result = { 'repeat' => 3 }
    expect(count_words(sentence)).to eq(expected_result)
  end
end

describe '#calculate_factorial' do
  it 'correctly calculates the factorial of a number' do
    expect(calculate_factorial(5)).to eq(120)
    expect(calculate_factorial(0)).to eq(1)
    expect(calculate_factorial(1)).to eq(1)
    expect(calculate_factorial(10)).to eq(3_628_800)
  end

  it 'returns an error for negative numbers' do
    expect(calculate_factorial(-3)).to eq('Error: Negative number')
  end
end

describe '#find_median' do
  it 'correctly finds the median of an array of numbers' do
    expect(find_median([1, 3, 2])).to eq(2)
    expect(find_median([1, 3, 5, 2, 4])).to eq(3)
    expect(find_median([4, 1, 3, 2])).to eq(2.5)
    expect(find_median([])).to eq(nil)
  end
end

describe '#find_value_in_nested_hash' do
  it 'correctly find value from nested hash' do
    nested_hash = {
      'number' => 0, 
      'level1' => {
        'level2' => {
          'level3' => {
            'key' => 'value'
          },
          'level3_2' => {
            'key3_2' => 'value'
          }
        },
        'name' => "johndoe",
        'level2_2' => {
          'key2_2' => 'value'
        }
      }
    }
    expect(find_value_in_nested_hash(nested_hash, 'key')).to eq('value')
  end
end
