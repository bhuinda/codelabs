require 'rspec'
require_relative '../exercises/exercise_4/gradebook'
require_relative '../exercises/exercise_4/student'

describe Gradebook do
  let(:gradebook) { Gradebook.new }
  let(:student) { Student.new('Jane Smith') }

  before do
    student.add_grade(85)
    student.add_grade(90)
    gradebook.add_student(student)
  end

  it 'adds students to the gradebook' do
    expect(gradebook.find_student('Jane Smith').name).to eq('Jane Smith')
  end

  it "finds a student's average grade" do
    expect(gradebook.student_average('Jane Smith')).to eq(87.5)
  end

  it "finds a student's letter grade" do
    expect(gradebook.student_letter_grade('Jane Smith')).to eq('B')
  end

  it 'removes students from the gradebook' do
    gradebook.remove_student('Jane Smith')
    expect(gradebook.find_student('Jane Smith')).to be_nil
  end
end
