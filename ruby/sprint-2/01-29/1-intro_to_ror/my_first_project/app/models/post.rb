class Post < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    validates :published_at, presence: true

    before_create :capitalize_words_in_title

    belongs_to :user
    has_many :comments

    private

    def capitalize_words_in_title
        self.title = title.split.map(&:capitalize).join(' ')
    end
end
