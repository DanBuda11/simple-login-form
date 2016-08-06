var logins = [
	{user: 'admin@admin.com',
		password: 'puppies'
	},
	{user: 'dan@dan.com',
		password: 'kittens'
	}
];

// 1. Checks for a matching username/password pair
	// If ok, "logs in" with a website redirect (my portfolio!)
	// If username exists but password doesn't match, shows password error
	// If username doesn't exist, shows username error  
$('#form').submit(function(e) {
	e.preventDefault();
	var nameInfo = $('#username').val();
	var passInfo = $('#password').val();
	$('#noUser').hide();
	for (var i = 0; i < logins.length; i++) {
		if (nameInfo === logins[i].user && passInfo === logins[i].password) {
			window.location = 'http://www.danbuda.com';
			return;
		} else if (nameInfo === logins[i].user && passInfo !== logins[i].password) {
			$('#badPass').show();
			return;
		}
	};
	$('#noUser').show();
});