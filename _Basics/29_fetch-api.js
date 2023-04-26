// ----------------------- fetch api --------------------------------------

function getData() {
	console.log('get data');
	url = 'https://api.github.com/users';
	fetch(url)
		.then(response => {
			console.log('inside first');
			return response.json();
		})
		.then(data => {
			console.log('inside first');
			console.log(data);
		});
}
function postData() {
	console.log('get data');
	url = 'https://dummy.restapiexample.com/api/v1/create';
	data = '{"name":"c7hhhhhhhhhq","salary":"123","age":"23"}';
	param = {
		method: 'post',
		headers: {
			'content-type': 'application/json',
		},
		body: data,
	};
	fetch(url, param)
		.then(response => {
			console.log('inside first');
			return response.json();
		})
		.then(data => {
			console.log('inside first');
			console.log(data);
		});
}

console.log('before');
// getData();
console.log('after');
