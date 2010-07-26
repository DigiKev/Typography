/* =====================================================================
// Typography: Maintain a vertical rhythm
// Copyright (c) 2010 Kevin Rapley - kevin.rapley@yoo-zuh-buhl.co.uk
// Developed by Andy MacDonald - www.sharpbytes.net - andy@sharpbytes.net
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
====================================================================== */

$(function() {
	
	/* ---------------------------------------------------------------------
	// Change the class of headers depending on amount of characters in a
	// line so that margins may be changed in CSS
	--------------------------------------------------------------------- */
	
	// Create variables for the line lengths of each heading
	var lineLengths = {'H1':23, 'H2':28, 'H3':42, 'H4':56, 'H5':64, 'H6':74};
	
	function headingMargin(element) {
		// Create a variable for the line length that the values of the
		// abover line lengths variable can be parsed into
		var lineLength = lineLengths[element.tagName];
		element = $(element);
		// Determine how many characters are in text
		var chars = element.text().length;
		// Calculate a modulus to retrieve the remainder on a line
		var partlines = chars % lineLength;
		// Calculate an integer division
		var lines = (chars - partlines) / lineLength;
		// Check to see if there is part of a line and add '1' if there is
		// Division above create a zero based result
		if (partlines > 0);
		lines++;
		// Create the class name
		var className = "lines-" + lines;
		// Add the class name to the element
		element.addClass(className);
	}
	
	// Pass the selectors we want to target through the function
	$('h1, h2, h3, h4, h5, h6').each(function() {
		headingMargin(this);
	});
	
});