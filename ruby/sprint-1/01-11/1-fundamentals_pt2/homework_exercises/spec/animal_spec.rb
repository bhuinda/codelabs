require 'rspec'
require_relative '../exercises/exercise_3/animal.rb'

describe Animal do
  subject { Animal.new("Leo", "Lion") }

  it "is initialized with a name and species" do
    expect(subject).to have_attributes(name: "Leo", species: "Lion")
  end

  it "returns basic info" do
    expect(subject.basic_info).to eq("Leo the Lion")
  end
end
