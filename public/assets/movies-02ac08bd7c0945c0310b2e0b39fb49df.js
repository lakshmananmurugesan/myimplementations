(function() {
  $('.remove_from_cart').click(function(e) {
    var $this, url;
    e.preventDefault();
    $this = $(this);
    url = $this.data('targeturl');
    alert(url);
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
