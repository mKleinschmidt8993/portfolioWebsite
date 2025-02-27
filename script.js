function lines(){
    let sizeW = Math.random() * 12;   // randomize size
    let duration = Math.random() * 3;   //randomizes peed
    let e = document.createElement('div');
    e.setAttribute('class','circle');
    document.body.appendChild(e)
    e.style.width = 2 + sizeW + 'px';   // randomize size
    e.style.left = Math.random() * innerWidth + 'px';   //randomize placement
    e.style.animationDuration = 2 + duration + 's';   //randomize speed

    setTimeout(function(){
        document.body.removeChild(e)
    }, 5000);
}

setInterval(function(){
    lines();
}, 200);


const carousel = document.querySelector(".carousel-container");
const slide = document.querySelector(".carousel-slide");

function handleCarouselMove(positive = true) {
  const slideWidth = slide.clientWidth;
  carousel.scrollLeft = positive ? carousel.scrollLeft + slideWidth : carousel.scrollLeft - slideWidth;
}