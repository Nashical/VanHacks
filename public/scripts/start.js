var audio = new Audio('./assets/music.mp3');

function start() {
    var x = document.getElementById("startbg");
    var y = document.getElementById("startbutton");
    var l = document.getElementById("startlink");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "block";
      l.style.display = "block";
    } else{
      x.style.display = "none";
      y.style.display = "none";
      l.style.display = "none";
    }
      
    audio.play();
    diagInit();
  }

  function end(){
      var x = document.getElementById("endbg");
      var y = document.getElementById("result");
      var z = document.getElementById("enddisc");
      var l = document.getElementById("startlink");

      x.style.display = "block";
      y.style.display = "block";
      z.style.display = "block";
      l.style.display = "block";

  }