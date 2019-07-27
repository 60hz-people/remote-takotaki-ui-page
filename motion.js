console.log('モーション処理');

window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;

  // 方向データに基づいて処理を行う
  //console.log(event);
}


window.addEventListener("devicemotion", handleOrientation, true);

function handleOrientation(event) {

  //var x  = parseFloat(event.acceleration.x);
  //var y  = parseFloat(event.acceleration.y);
  //var z  = parseFloat(event.acceleration.z);

  // 加速度データに基づいて処理を行う
  // 何故かNullになる？
  //console.log(x + ' ' + y + ' ' + z );

}