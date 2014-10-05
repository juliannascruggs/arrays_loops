// Create an array of friends
var friends = ['Alex', 'Elyse', 'Mae', 'Sartaj'];

// Create a friendList variable 
var friendList = '<ul id="friendList"></ul>'

// Create a friendListItem variable
var friendListItem;

// This is a function that creates the HTML for a friend list item
function populateFriendList() {

	// Iterate over the friends array
	for (i = 0; i < friends.length; i++) {

		// Set friendListItem to be equal to a string that includes the opening and closing tags for an HTML list item
		// Each time you iterate over the array, pass the friend at index i into the friendListItem string  
		friendListItem = '<li>' + friends[i] + '</li>';

		//
		modifyFriendList();
	};
}

// This is a function that appends the friend list HTML with a friend list item
function modifyFriendList(){
	// Add the friendListItem variable to the end of your friendList variable
	$('#friendList').append(friendListItem);
	// friendList += friendListItem;
};

// This is a function that creates an HTML list and adds that list to your HTML page
function createFriendList() {

	// // Set your friendList variable to be equal to a string is the opening tag of an unordered HTML list element
	// friendList = '<ul id="friendList">';

	// // Call a function that
	// populateFriendList();

	// // Add an unordered list closing tag to the end of your friendList string
	// friendList += '</ul>';

	// Use JQuery to select the body element in the DOM
	// Use the append method to append the body of your HTML with your friendList string
	$('body').append(friendList);

	// Call a function that populates the friendList with friendListItem(s)
	populateFriendList();
};

$(document).ready(function(){});

createFriendList();
console.log(friendList);

//
$('#friend_input_button').on('click', updateFriendList);

function updateFriendList(){
	addFriend();
	createFriendList();
}

var friendInputValue = $('#friend_input').val()

function addFriend(){
	friends.push($('#friend_input').val());
};



