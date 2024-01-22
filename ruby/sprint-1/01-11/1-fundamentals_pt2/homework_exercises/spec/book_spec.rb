require 'rspec'
require_relative '../exercises/exercise_1/book.rb'

describe Book do
  subject { Book.new("1984", "George Orwell") }

  it "is initialized with a title and an author" do
    expect(subject).to have_attributes(title: "1984", author: "George Orwell")
  end

  it "returns a correct description" do
    expect(subject.description).to eq("1984 by George Orwell")
  end
end