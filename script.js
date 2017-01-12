
var  watch_time = 5000;
var  draw_time = 30000;

function do_some_drawing (watch_time,draw_time) {
  // I just try both play/pause functions, cause I'm lazy, plus this might 'just work' on some other site's vids. It's bad practice, cause debugging, but watever.
  function pause_video(){
    // Youtube
    try{vid.pauseVideo();}catch(err){}
    // Dailymotion
    try{vid.pause();}catch(err){}
  }
  function play_video(){
    // Youtube
    try{vid.playVideo();}catch(err){}
    // Dailymotion
    try{vid.play();}catch(err){}
  }

  function watch(){
    play_video();
    setTimeout(draw, watch_time);
  }
  function draw(){
    pause_video();
    setTimeout(watch, draw_time);
  }

  // Youtube
  var vid = document.getElementById("movie_player");
  if (vid == null){
    // Dailymotion
    var vid = document.getElementById("player");
  }
  if (vid == null){
    alert("Sorry! No video found!");
  }else{
    watch();  
  }
}

