
socket = null;

function initSocket(id) {

	//ここを変える必要がある
	socket = io('http://localhost:8080');
  	socket.on('log', function (data) {
    	console.log(data);
  	});

  	socket.on('login', function (data) {
    	    console.log('ID = ' + data.id + ' さんの接続が完了しました');
  	});

  	//送信テスト
  	socket.emit('test_log', { my: 'data' });

	socket.emit('login', { id: id });
}

	


