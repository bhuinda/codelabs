class Mammal < Animal
  attr_accessor :fur_color

  def initialize(name, species, fur_color)
    super(name, species)
    @fur_color = fur_color
  end

  def mammal_info
    "#{@name} the #{@species} with #{@fur_color} fur"
  end
end