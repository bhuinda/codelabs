class User < ApplicationRecord
    validates :name, presence: true
    validates :email, presence: true, uniqueness: true

    validate :name_cannot_contain_numbers

    before_create :downcase_email

    has_one :profile
    has_many :posts

    private

    def name_cannot_contain_numbers
        if name.match(/\d/)
            errors.add(:name, "cannot contain numbers")
        end
    end

    def downcase_email
        self.email = email.downcase
    end
end
