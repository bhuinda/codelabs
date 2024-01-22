class Employee
  attr_reader :name, :position
  
  def initialize(name, position, salary)
    @name = name
    @position = position
    @salary = salary
  end

  def details
    "Name: #{@name}, Position: #{@position}"
  end

  def is_paid_less_than?(other_employee)
    @salary < other_employee.instance_variable_get(:@salary)
  end
end