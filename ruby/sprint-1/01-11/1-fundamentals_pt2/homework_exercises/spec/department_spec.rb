require 'rspec'
require_relative '../exercises/exercise_5/department.rb'
require_relative '../exercises/exercise_5/employee.rb'

describe Department do
  let(:department) { Department.new }
  let(:employee1) { Employee.new("John Doe", "Developer", 70000) }
  let(:employee2) { Employee.new("Jane Smith", "Manager", 80000) }

  before do
    department.add_employee(employee1)
    department.add_employee(employee2)
  end

  it "adds employees to the department" do
    expect(department.list_employees).to include(employee1, employee2)
  end

  it "identifies the highest-paid employee among two" do
    highest_paid = department.highest_paid_between(employee1, employee2)
    expect(highest_paid.name).to eq("Jane Smith")
  end

  it "removes an employee from the department" do
    department.remove_employee("John Doe")
    expect(department.list_employees).not_to include(employee1)
  end
end
