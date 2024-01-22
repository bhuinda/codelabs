require 'rspec'
require_relative '../exercises/exercise_3/bird.rb'

describe Bird do
  subject { Bird.new("Polly", "Parrot", 30) }

  it "inherits from Animal and has a wing span" do
    expect(subject).to have_attributes(name: "Polly", species: "Parrot", wing_span: 30)
  end

  it "returns bird info" do
    expect(subject.bird_info).to eq("Polly the Parrot with a 30cm wing span")
  end
end
