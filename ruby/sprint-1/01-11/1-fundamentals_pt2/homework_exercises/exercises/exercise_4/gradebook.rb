class Gradebook
  def initialize()
    @students = []
  end

  def add_student(student)
    @students << student
  end

  def remove_student(name)
    @students.reject! { |student| student.name == name }
  end

  def find_student(name)
    @students.find { |student| student.name == name }
  end

  def student_letter_grade(name)
    student = find_student(name)
    student.letter_grade
  end
  def student_average(name)
    student = find_student(name)
    student.average_grade
  end
end