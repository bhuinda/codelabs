require_relative '../exercises/exercise_1.rb'

describe '#concatenate_strings' do
  it 'concatenates two strings' do
    expect(concatenate_strings("Hello", "World")).to eq("HelloWorld")
  end
end

describe '#perform_operations' do
  it 'performs arithmetic operations on an integer and a float' do
    result = perform_operations(10, 2.5)
    expect(result).to eq([12.5, 7.5, 25.0, 4.0])
  end
end

describe '#evaluate_logic' do
  it 'evaluates boolean logic' do
    expect(evaluate_logic(true, false)).to eq([false, true, false, true])
  end