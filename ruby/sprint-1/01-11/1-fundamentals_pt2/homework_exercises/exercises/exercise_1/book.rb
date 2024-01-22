class Book
  attr_accessor :title, :author
  
  def initialize(title, author)
    @title = title
    @author = author
  end
  def description
    "#{title} by #{author}"
  end
end