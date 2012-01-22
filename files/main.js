
// Sticky Menu
$(document).ready(function() {
	$('.navigation').stickyMenubar();
});

// Stock Values
(function($){
   $.fn.stockify = function() {

       return this.each(function() {
           var $this = $(this);
           var level = parseInt($this.text(),10);
           var text;

			if (level < 25) text = "";
			if (level >= 25) text = ""
			if (level > 40) text = "";
			if (level == 1 ) text = "Only 1 left ";
			if (level == 2 ) text = "2 left ";
			if (level == 3 ) text = "3 left ";
			if (level == 4 ) text = "";
			if (level == 5 ) text = "";
			if (level == 0) text = "None";
			$this.text(text);
       });
   };
})(jQuery);


// Page Navigation Selector
$(document).ready( function() {

	// set any current links in the #nav to be "active"
	$(".navigation a").each(function(){
		var href = this.getAttribute('href',1);

		var location = new String( document.location );
		location = location.substr(location.length-href.length, href.length )

		if ( location == href) {
			$(this).addClass("active");
		}
	});


	// set any current links in the #nav to be "active"
	$(".categories li a").each(function(){
		var href = this.getAttribute('href',1);

		var location = new String( document.location );
		location = location.substr(location.length-href.length, href.length )

		if ( location == href) {
			$(this).addClass("active");
		}
	});


});



/*

	var J = jQuery.noConflict();
	
	J(document).ready(function(){
	
		/ / Add divs and classes
		J('<div class="clear"></div>').insertAfter('#products_grid .single_grid_product:nth-child(4n)');
		J('<div class="clear"></div>').insertAfter('#archive_grid .single_grid_product:nth-child(3n)');
		J('<div class="clear"></div>').insertAfter('.Cart66ButtonPrimary');
		
		/ / Adds class to commenters
		J("ul.commentlist li:not(.bypostauthor)").children(".the_comment").addClass("not_author");
		
		J("#navigation").sticky({topSpacing:0});
	
	});
	
*/