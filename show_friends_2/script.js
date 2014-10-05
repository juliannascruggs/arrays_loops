
var friends = ['Alex', 'Elyse', 'Mae', 'Sartaj'];

function populateFriendList() {

	for (i = 0; i < friends.length; i++) {
		addFriendToList(friends[i]);
	};
}

function addFriendToList(friend) {
	$('#friendList').append('<li>' + friend + '<button>Unfriend</button> </li>');
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
	$(this).parent().remove();
};


$(document).ready(function(){

	populateFriendList();

	$('#friend_input_button').on('click', addFriend);
	$('#friendList').on('click', 'button', unFriend);

});

