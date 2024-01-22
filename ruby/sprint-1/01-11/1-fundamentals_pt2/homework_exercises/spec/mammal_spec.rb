require 'rspec'
require_relative '../exercises/exercise_3/mammal'

describe Mammal do
  subject { Mammal.new('Benny', 'Bear', 'brown') }

  it 'inherits from Animal and has fur color' do
    expect(subject).to have_attributes(name: 'Benny', species: 'Bear', fur_color: 'brown')
  end

  it 'returns mammal info' do
    expect(subject.mammal_info).to eq('Benny the Bear with brown fur')
  end
end
