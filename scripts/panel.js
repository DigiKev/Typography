jQuery.fn.ampersand = function (str, className) {
  var regex = new RegExp(str, 'g');
	
  return this.each(function () {
    this.innerHTML = this.innerHTML.replace(regex, "<abbr title=\"and\" class=\"" + className + "\">" + str + "</abbr>");
  });
};

$(function() {
	
	// Toggle grid lines on and off
	$('#panel a#grid').toggle(function() {	
		$('body').removeClass('grid-on').addClass('grid-off');
	},
	function() {
		$('body').removeClass('grid-off').addClass('grid-on');
	});
	
	// Toggle script on and off
	$('#panel a#script').toggle(function() {	
		$('body').removeClass('script-on').addClass('script-off');
	},
	function() {
		$('body').removeClass('script-off').addClass('script-on');
	});
	
	// Find ampersands and wrap a <abbr title="and" class="amp" /> around them
	$('#page h1, #page h2, #page h3, #page h4, #page h5, #page h6').ampersand('&amp;', 'amp');
	$('#page h1, #page h2, #page h3, #page h4, #page h5, #page h6').ampersand('&#38;', 'amp');
	
});