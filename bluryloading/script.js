const blurImage = document.querySelector(".blur_image");
const text = document.querySelector(".text");

let load = 1;
let int = setInterval(bluring, 30);

function bluring() {
  load++;
  if(load > 99){
    clearInterval(int)
  }

  text.innerText = `${load}%`;
  text.style.opacity = scale(load , 0 , 100 , 1 ,0)
  blurImage.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}


function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}