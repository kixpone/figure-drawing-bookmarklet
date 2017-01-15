
var  watch_time = 500;
var  draw_time = 3000;


function generate_bookmarklet(){
  var bookmarklet = document.createElement('a');
  bookmarklet.href = `
      javascript: (function () { 
          var jsCode = document.createElement('script'); 
          jsCode.setAttribute('src', 'https://cdn.rawgit.com/kixpone/figure-drawing-bookmarklet/gh-pages/script.js');                  
        document.body.appendChild(jsCode); 
        setTimeout(function () {
          do_some_drawing(${watch_time},${draw_time});
        }, 30);
       }());
      `;
  bookmarklet.innerHTML="foo";
  document.body.appendChild(bookmarklet);
}


function do_some_drawing (watch_time,draw_time) {
  // I just try both play/pause functions, cause I'm lazy, plus this might 'just work' on some other site's vids. It's bad practice, cause debugging, but watever.
  function are_we_drawing(){
    // is this hacky? The hackyest.
    // this can't be best practice, but I'm trying it.
    el = document.getElementById('_figure_drawing');
    if (el == null) {
      return false;
    } else {
      return true;
    }
  }
  function start_drawing(){
    if (!are_we_drawing()) {
      var el = document.createElement("div");
      el.setAttribute("id","_figure_drawing");
      document.body.appendChild(el);
    }
  }
  function stop_drawing(){
    if (are_we_drawing) {
      el = document.getElementById('_figure_drawing');
      el.parentNode.removeChild(el);
    }
  }
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
    console.log("in draw function");
    if (are_we_drawing()) {
      pause_video();
      setTimeout(watch, draw_time);
    }
  }

  function init(){
    console.log("in init function");
    // Youtube
    var vid = document.getElementById("movie_player");
    if (vid == null){
      // Dailymotion
      var vid = document.getElementById("player");
    }
    if (vid == null){
      alert("Sorry! No video found!");
    }else{
      start_drawing();
      watch();  
    }
  }

  console.log("main");
  if (are_we_drawing()) {
    stop_drawing();
  }else{
    init();
  }
}

generate_bookmarklet();
