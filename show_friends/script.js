
// ------------create some variables-----------

// Create an array of friends
var friends = ['Alex', 'Elyse', 'Mae', 'Sartaj'];

// -----------create some functions-------------

// ----------- This function appends the HTML body with a friend list
function createFriendList() {

	// Use JQuery to select the body element in the DOM
	// Use the append method to append the body of your HTML with a string
	// The string includes the opening and closing tags for an HTML list with an id

	$('body').append('<ul id="friendList"></ul>');

	// Call a function that populates the friendList with friendListItem(s)
	updateFriendList();
};

// ----------- This function creates the HTML for friend list items
function updateFriendList() {
	// Remove the existing friend list items
	$('#friendList').empty();
		
	// Iterate over the friends array
	for (i = 0; i < friends.length; i++) {

		// Use JQuery to select an HTML element with the id of "friendList"
		// Append your friendList with a string that includes the opening and closing tags for an HTML list item
		// Each time you iterate over the array, pass the friend at index i into the friendListItem string  
		$('#friendList').append('<li>' + friends[i] + '<button class="unFriend" id='+ i +'>Unfriend</button></li>');
	};
	// I don't quite understand why, but I have to keep this here, otherwise it goes away when I empty the #friendList element
	$('.unFriend').on('click', unFriend);
}

// ----------- This function updates the friend list with the latest and greatest friend list items
function addFriend(){

	// Create a variable to represent the value of the friend input field
	var newFriend = $('#friend_input').val();

	// Check if the friend input field is empty
	// An empty string is the same as 'false' in Javascript
	if (newFriend != false){
		// Update friends to include the new friend
		friends.push(newFriend);

		// Populate the friend list
		updateFriendList();

		//clear the input field
		$('#friend_input').val('');
	};
};

// ----------- This function unfriends bitches who be trifflin' 
// ----------- Gone forever, with no chance for remorse
function unFriend(){
	var currentId = $(this).attr('id');
	friends.splice(currentId, 1);
	$(this).parent().remove();
	updateFriendList();
};

// ----------- And now...let show begin!
$(document).ready(function(){

	createFriendList();

	$('#friend_input_button').on('click', addFriend);

});

