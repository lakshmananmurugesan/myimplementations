(function() {
  $('.button.cartbox').click(function(e) {
    var $this, cart_text, url;
    e.preventDefault();
    $this = $(this).closest('a');
    cart_text = $this.text();
    if ($.trim(cart_text) === "Remove from Cart") {
      $this.html("<i class=\"fi-shopping-cart\"></i><span> Add to Cart</span>");
      url = $this.data('removeurl');
    } else {
      url = $this.data('addurl');
      $this.html("<i class=\"fi-shopping-cart\"></i><span> Remove from Cart</span>");
    }
    return $.ajax({
      url: url,
      type: 'put',
      success: function(data) {
        $('.cart-count').html(data);
        return $this.closest('.cart-movie').slideUp();
      }
    });
  });

}).call(this);
