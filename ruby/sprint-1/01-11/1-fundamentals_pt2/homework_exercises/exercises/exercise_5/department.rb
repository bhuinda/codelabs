class Department
  def initialize
    @employees = []
  end

  def add_employee(employee)
    @employees << employee
  end

  def remove_employee(name)
    @employees.delete_if { |employee| employee.name == name }
  end

  def list_employees
    @employees.each do |employee|
      puts employee.details
    end
  end

  def highest_paid_between(employee1, employee2)
    if employee1.instance_variable_get(:@salary) > employee2.instance_variable_get(:@salary) then employee1
    elsif employee2.instance_variable_get(:@salary) > employee1.instance_variable_get(:@salary) then employee2
    else "Same salary."
    end
  end
end