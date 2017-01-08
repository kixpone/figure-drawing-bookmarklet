
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var  watch_time = 5000;
var  draw_time = 30000;

// Youtube
var vid = document.getElementById("movie_player");
if (vid == null){
  // Dailymotion
  var vid = document.getElementById("player");
}
if (vid == null){
  alert("Sorry! No video found!");
}else{
  while (true){

    sleep(watch_time);
    // Youtube
    vid.pauseVideo();
    // Dailymotion
    vid.pause();

    sleep(draw_time);
    // Youtube
    vid.playVideo();
    // Dailymotion
    vid.play();
  }
}
