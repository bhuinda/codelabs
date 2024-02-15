class EventParticipant < ApplicationRecord
  # validations
  validates :rating, numericality: {only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5}, allow_nil: true

  # associations
  belongs_to :user
  belongs_to :event
end
