const images = ["rcb_vs_mi.png", "rcb_vs_punjab.png", "rcb_vs_csk.png"];
const audios = ["mi.mp3", "punjab.mp3", "csk.mp3"];
let index = 0;

const imgElement = document.getElementById("matchImage");
const btn = document.getElementById("nextBtn");
const winText = document.getElementById("winText");
const music = document.getElementById("bgMusic");

btn.addEventListener("click", () => {
  index++;
  if (index < images.length) {
    imgElement.src = images[index];
    music.src = audios[index];
    music.play();
  } else {
    imgElement.style.display = "none";
    btn.style.display = "none";
    music.pause();
    winText.style.display = "block";
  }
});
