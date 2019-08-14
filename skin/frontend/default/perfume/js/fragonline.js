jQuery(document).ready(function() {
  
	jQuery(".cart-top .summary").click( function() {
		jQuery(".cart-content").slideToggle("fast");
	});

	// Shopping by
	jQuery('#narrow-by-list dt').each(function() {	
    var here = jQuery(this), state = false, answer = here.next('dd').slideUp();
    here.click(function() {
      state = !state;
      answer.slideToggle(state);
      here.toggleClass('active',state);
    });
	jQuery('dd.Category').show();
  });
  
	jQuery(".products-grid li.item").click(function(){
		window.location = jQuery(this).find("a").attr("href");
		preventDefault();
	});
   
});