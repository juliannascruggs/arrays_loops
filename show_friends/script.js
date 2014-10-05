// Create an array of friends
var friends = ['Alex', 'Elyse', 'Mae', 'Sartaj'];

// Create a friendList variable and make it equal to a string
// The string includes the opening and closing tags for an HTML list with an id
var friendList = '<ul id="friendList"></ul>'

// Create a variable to represent your friend list items
var friendListItem;

// Create a variable to represent the value of the friend input field
var friendInputValue; 

// This is a function that creates the HTML for friend list items
function populateFriendList() {

	// Iterate over the friends array
	for (i = 0; i < friends.length; i++) {

		// Set friendListItem to be equal to a string that includes the opening and closing tags for an HTML list item
		// Each time you iterate over the array, pass the friend at index i into the friendListItem string  
		friendListItem = '<li>' + friends[i] + '</li>';

		// Add your friend list item to the DOM
		addFriendListItem();
	};
}

// This is a function that appends an HTML with the id of "friendList" with a friend list item
function addFriendListItem(){

	// Use JQuery to select an HTML element with the id of "friendList"
	// Append that element with the friendListItem variable
	$('#friendList').append(friendListItem);

};

// This is a function that appends the HTML body with a friend list
function createFriendList() {

	// Use JQuery to select the body element in the DOM
	// Use the append method to append the body of your HTML with your friendList string
	$('body').append(friendList);

	// Call a function that populates the friendList with friendListItem(s)
	populateFriendList();
};


$(document).ready(function(){});

createFriendList();
console.log(friendList);

$('#friend_input_button').on('click', updateFriendList);

// var empty = 'George';
// var friendInputValue;

// function setFriendInputValue(){
// 	friendInputValue = $('#friend_input').val();
// 	return friendInputValue;
// 	console.log('friendInputValue');
// };
// console.log(setFriendInputValue);

function updateFriendList(){
	friendInputValue = $('#friend_input').val();
	console.log(friendInputValue);
	if (friendInputValue != ''){

	// if ($('#friend_input:input').val() != ''){
		friends.push($('#friend_input').val());
		$('#friendList').empty();
		populateFriendList();
	}
}


function addFriend(){
	friends.push($('#friend_input').val());
};



