var audio = new Audio('./assets/music.mp3');

function start() {
    var x = document.getElementById("startbg");
    var y = document.getElementById("startbutton");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "block";
    } else{
      x.style.display = "none";
      y.style.display = "none";
    }
      
    audio.play();
  }