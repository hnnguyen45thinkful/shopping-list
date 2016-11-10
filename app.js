//Edited and Created by Hieu Nguyen
//Start with a document ready with function with $
$(document).ready(function() {
	//
	$("js-shopping-list-form").submit(function(event) { // Attach a function to the submit event: $(selector).submit(function) after applying groceries list
		event.preventDefault();// The event.preventDefault() method stops the default action of an element from happening. http://www.w3schools.com/jquery/event_preventdefault.asp
		event.stopPropagation();//The event.stopPropagation() method stops the bubbling of an event to parent elements, preventing any parent event handlers from being executed.
//then apply The event.preventDefault() method stops the default action of an element from happening.event.preventDefault();
//http://www.w3schools.com/jquery/event_preventdefault.asp
//www.w3schools.com/jquery/event_stoppropagation.asp
			$(".shopping-list").append(
			$("#shopping-list-entry").val() +'<li>' +'</li>' + '<span class="shopping-item">' + '</span>' +'<div class="shopping-item-controls">' +'</div>'+
			'<button class="shopping-item-toggle">' + '</button>' + '<span class="button-label">check</span>'  +'<button class="shopping-item-delete">' +
			'<span class="button-label">delete</span>' + '</button>'   
			); //The append() method inserts specified content at the end of the selected elements. $(selector).append(content,function(index,html))
//All the adding of each of the HTML class for the li(list).
//$(this)Selects the current HTML element
			$(this)[0].reset(); // The reset() method resets the values of all elements in a form (same as clicking the Reset button). http://www.w3schools.com/jsref/met_form_reset.asp
			//start at [0] first element at zero. //is a selector.
			return false;
//http://www.w3schools.com/jquery/html_append.asp
	});
	//Applying the .on() method which is The on() method attaches one or more event handlers for the selected elements and child elements.
	//http://www.w3schools.com/jquery/event_on.asp website is an example using click, $(selector).on(event,childSelector,data,function,map)
	//This applies on clicking the shopping item and either checking or deleting.
	$(".shopping-list").on("click", ".shopping-item-delete", function(event){
		$(this).closest("li").remove();
		//$(selector).closest(filter) with .remove which means Removes the selected element (and its child elements)
		//http://www.w3schools.com/jquery/traversing_closest.asp
	});
	$(".shopping-list").on("click", ".shopping-item-toggle", function(event){
		//Same from above but using hte .find method The find() method returns descendant elements of the selected element. $(selector).find(filter)\
		$(this).closest("li").find(".shopping-item").toggleClass(
		//The toggleClass() method toggles between adding and removing one or more class names from the selected elements. Changing or not deleting the item list.	
			"shopping-item__checked");
	});

});