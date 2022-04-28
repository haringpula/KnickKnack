function signup(e){
	event.preventDefault();


	var name=document.getElementById('name').value;
	var username=document.getElementById('username').value;
	var password=document.getElementById('password').value;
	var career=document.getElementById('career').value;

	var user = {
		name: name,
		username:username,
		password:password,
		career:career};

		var json = JSON.stringify(user);
		localStorage.setItem(username,json);
		console.log(document.location='login.html');

	}

function loginFunc(e){
	event.preventDefault();


	var username=document.getElementById('username').value;
	var pass = document.getElementById('password').value;
	var result = document.getElementById('result');

	var user = localStorage.getItem(username);
	var data = JSON.parse(user);
	console.log(data);

	
	if(user == null){
		result.innerHTML = 'wrong username';
	}
	else if (username == data.username && pass == data.password){
		result.innerHTML =document.location='index.html';
	}else{
		result.innerHTML = 'error input';
	}
}