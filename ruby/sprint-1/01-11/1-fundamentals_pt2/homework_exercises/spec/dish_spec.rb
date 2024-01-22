require 'rspec'
require_relative '../exercises/exercise_2/dish.rb'

describe Dish do
  subject { Dish.new("Spaghetti", 12.00) }

  it "is initialized with a name and a price" do
    expect(subject).to have_attributes(name: "Spaghetti", price: 12.00)
  end

  it "allows changing its name and price" do
    subject.name = "Pasta"
    subject.price = 10.00
    expect(subject.name).to eq("Pasta")
    expect(subject.price).to eq(10.00)
  end
end
