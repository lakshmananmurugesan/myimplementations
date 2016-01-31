class Article < ActiveRecord::Base
  has_many :books, dependent: :destroy
  has_many :sections, dependent: :destroy

  def self.search(query)
    where("article_name ILIKE ?", "%#{query}%")
  end
end
