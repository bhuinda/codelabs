require 'rspec'
require_relative '../exercises/exercise_2/dish'
require_relative '../exercises/exercise_2/menu'

describe Menu do
  let(:dish1) { Dish.new("Spaghetti", 12.00) }
  let(:dish2) { Dish.new("Salad", 8.50) }
  let(:menu) { Menu.new }

  before do
    menu.add_dish(dish1)
    menu.add_dish(dish2)
  end

  it "adds dishes to the menu" do
    expect(menu.display_menu).to include("Spaghetti", "Salad")
  end

  it "removes a dish from the menu" do
    menu.remove_dish("Salad")
    expect(menu.display_menu).not_to include("Salad")
  end
end
