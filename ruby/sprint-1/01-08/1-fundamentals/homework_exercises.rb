class Car
  def initialize(make, model)
    @make = make
    @model = model
  end
  def print_color
    puts 'The car is red.'
  end
end

car1 = Car.new('Honda', 'Civic')
car1.print_color

# 2. Inheritance

class Fruit
  def initialize(name)
    @name = name
  end
  def print_name
    puts @name
  end
end

class Apple < Fruit
end

fruit1 = Apple.new('Apple')
fruit1.print_name

# 3. Exercise

class ImprovedCar
  attr_accessor :make, :model, :color
  
  def initialize(make, model, color)
    @make = make
    @model = model
    @color = color
  end
  def get_details
    "#{make}, #{model}, #{color}"
  end
end

class Garage < ImprovedCar
  @@cars = []

  def initialize(car)
    @@cars << car
  
  def add_car(car)
    @@cars << car
  end
  def remove_car(make, model)
    @@cars.each do |car|
      if car.make == make && car.model == model
        @@cars.delete(car)
      end
    end
  end
  def list_cars
    @@cars.each {|car| puts "Car: #{car.get_details}"} end
  end
end

car1 = ImprovedCar.new('Honda', 'Accord', 'Gray')
car2 = ImprovedCar.new('Chevy', 'Camaro', 'Red')
garage = Garage.new(car1)

garage.add_car(car2)
garage.remove_car('Chevy', 'Camaro')
garage.list_cars