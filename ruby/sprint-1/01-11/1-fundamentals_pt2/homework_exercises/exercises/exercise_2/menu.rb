class Menu
  def initialize
    @dishes = []
  end
  
  def add_dish(dish)
    if dish.is_a?(Array)
      dish.each do |dish|
        @dishes << dish
      end
    elsif dish.is_a?(Object)
      @dishes << dish
    end
  end

  def remove_dish(dish_name)
    @dishes.reject! { |dish| dish.name == dish_name }
  end

  def display_menu
    @dishes.map(&:name)
  end
end