
var friends = ['Alex', 'Elyse', 'Mae', 'Sartaj'];

function populateFriendList() {

	for (i = 0; i < friends.length; i++) {
		addFriendToList(friends[i]);
	};
}

function addFriendToList(friend) {
	$('#friendList').append('<li><span>' + friend + '</span><button>Unfriend</button> </li>');
}

function addFriend(){
	var newFriend = $('#friend_input').val();
	if (newFriend != false){
		friends.push(newFriend);
		addFriendToList(newFriend);
		$('#friend_input').val('');
	};
};

function unFriend(){
	li = $(this).parent()
	friend = $(li.find('span')[0]).text();
	index = friends.indexOf(friend);
	friends.splice(index, 1);
	li.remove();
};


$(document).ready(function(){

	populateFriendList();

	$('#friend_input_button').on('click', addFriend);
	$('#friendList').on('click', 'button', unFriend);

});

