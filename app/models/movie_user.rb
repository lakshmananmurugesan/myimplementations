class MovieUser < ActiveRecord::Base
  has_many :purchases, foreign_key: :buyer_id
  has_many :movies, through: :purchases

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

end
