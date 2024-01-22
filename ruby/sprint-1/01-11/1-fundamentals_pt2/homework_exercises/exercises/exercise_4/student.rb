class Student
  attr_accessor :name, :grades

  def initialize(name)
    @name = name
    @grades = []
  end

  def add_grade(grade)
    @grades << grade
  end

  def average_grade
    @grades.sum.to_f / @grades.length.to_f
  end

  def letter_grade
    if average_grade >= 90 then 'A'
    elsif average_grade >= 80 then 'B'
    elsif average_grade >= 70 then 'C'
    elsif average_grade >= 60 then 'D'
    else return 'F'
    end
  end
end