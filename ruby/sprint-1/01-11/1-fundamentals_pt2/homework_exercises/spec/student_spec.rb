require 'rspec'
require_relative '../exercises/exercise_4/student'

describe Student do
  subject { Student.new("John Doe") }

  it "initializes with a name and an empty array of grades" do
    expect(subject.name).to eq("John Doe")
    expect(subject.grades).to eq([])
  end

  context "managing grades" do
    before do
      subject.add_grade(90)
      subject.add_grade(80)
      subject.add_grade(70)
    end

    it "adds grades correctly" do
      expect(subject.grades).to eq([90, 80, 70])
    end

    it "calculates the average grade" do
      expect(subject.average_grade).to eq(80)
    end

    it "determines the correct letter grade" do
      expect(subject.letter_grade).to eq("B")
    end
  end
end
