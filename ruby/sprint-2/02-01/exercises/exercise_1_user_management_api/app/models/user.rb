class User < ApplicationRecord
    validates :full_name, presence: true, length: { minimum: 3, maximum: 50 }
    validates :email, presence: true, uniqueness: true, length: { minimum: 5, maximum: 255 }, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :age, presence: true, numericality: { only_integer: true, greater_than: 18, less_than_or_equal_to: 100 }

    before_save :lowercase_email

    def lowercase_email
        self.email = email.downcase
    end
end
