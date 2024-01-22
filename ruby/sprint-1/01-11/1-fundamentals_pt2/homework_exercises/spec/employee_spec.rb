require 'rspec'
require_relative '../exercises/exercise_5/employee.rb'

describe Employee do
  let(:employee1) { Employee.new("John Doe", "Developer", 70000) }
  let(:employee2) { Employee.new("Jane Smith", "Manager", 80000) }

  it "initializes with a name, position, and a private salary" do
    expect(employee1).to have_attributes(name: "John Doe", position: "Developer")
    expect { employee1.salary }.to raise_error(NoMethodError)
  end

  it "displays employee details without salary" do
    expect(employee1.details).to eq("Name: John Doe, Position: Developer")
  end

  context "when comparing salaries" do
    it "determines the higher-paid employee" do
      expect(employee1.is_paid_less_than?(employee2)).to be true
    end
  end
end
