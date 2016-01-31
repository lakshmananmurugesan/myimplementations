class MoviesController < ApplicationController
  
  def index
    @movies = Movie.all
  end

  def show
    @movie = Movie.find(params[:id])
    @cart_action = @movie.cart_action current_user.try :id
  end

  def cart_count
    $redis.scard "cart#{id}"
  end

  def cart_total_price
    total_price = 0
    get_cart_movies.each { |movie| total_price+= movie.price }
    total_price
  end

  def get_cart_movies
    cart_ids = $redis.smembers "cart#{id}"
    Movie.find(cart_ids)
  end

  def purchase_cart_movies!
    get_cart_movies.each { |movie| purchase(movie) }
    $redis.del "cart#{id}"
  end

  def purchase(movie)
    movies << movie unless purchase?(movie)
  end

  def purchase?(movie)
    movies.include?(movie)
  end

  def has_payment_info?
    braintree_customer_id
  end


end
