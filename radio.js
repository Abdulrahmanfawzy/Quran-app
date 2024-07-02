document.addEventListener("click", (e) => {
    let audioSound = document.getElementById("audioSound");
    let audierId = document.getElementById("audierId");
    let audio_icon = document.getElementById("audio_icon");
    let radio_icone_navbar = document.getElementById("radio_icone_navbar");
    if(e.target.id == "radio"){
      audioSound.src = "https://qurango.net/radio/salma";
      audierId.style.display = "block";
      if (radio_icone_navbar.className == "fa-solid fa-pause") {
        radio_icone_navbar.className = "fa-solid fa-play";
        audio_icon.className = "fa-solid fa-play";
        audioSound.pause();
      } else {
        radio_icone_navbar.className = "fa-solid fa-pause";
        audio_icon.className = "fa-solid fa-pause";
        audioSound.play();
      }
    }
  });