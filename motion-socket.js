
socket = null;

function initSocket(id) {

	socket = io('http://internal16.beer-server.org/');
  	socket.on('log', function (data) {
    	console.log(data);
  	});

  socket.on('login', function (data) {
	    console.log('ID = ' + data.id + ' さんの接続が完了しました');
  });

  	//送信テスト
  socket.emit('test_log', { my: 'data' });

	socket.emit('login', { id: id });

  let count1 = 0;
  let absoluteMax=0;
  let alphaMax=0;
  let betaMax=0;
  let gammaMax=0;

  window.addEventListener("deviceorientation", handleOrientation, true);

  function handleOrientation(event) {
    var absolute = event.absolute;
    var alpha    = event.alpha;
    var beta     = event.beta;
    var gamma    = event.gamma;

    absoluteMax+=absolute;
    alphaMax+=alpha;
    betaMax+=beta;
    gammaMax+=gamma;
    count1++;

    console.log('aaaa');
    //データをサーバー側に送信
    //socket.emit('raw_motion', { id: id, absolute : absolute,alpha:alpha,beta:beta,gamma:gamma});

  }


  let count2 = 0;
  let xMax=0;
  let yMax=0;
  let zMax=0;

  window.addEventListener("devicemotion", handleMotion, true);

  function handleMotion(event) {

    try {


    var x  = parseFloat(event.acceleration.x);
    var y  = parseFloat(event.acceleration.y);
    var z  = parseFloat(event.acceleration.z);

    xMax+=x;
    yMax+=y;
    zMax+=z;

    count2++;
    }catch (e) {
    }

  } 

  setInterval(function(){

    let data = {};

    data.id = id;

    if(count1>0){
      data.absolute = absoluteMax/count1;
      data.alpha = alphaMax/count1;
      data.beta = betaMax/count1;
      data.gamma = gammaMax/count1;
    }

    if(count2>0){
      data.x = xMax/count2;
      data.y = yMax/count2;
      data.z = zMax/count2;
    }

    console.log(data);

    socket.emit('raw_motion', data);


  }, 300);



}

	


