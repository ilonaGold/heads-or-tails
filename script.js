const btn = document.querySelector('.btn');
const main = document.querySelector('.main')

btn.addEventListener('click', flip);

function flip(){
  let headsOrTails = Math.random();
    if(headsOrTails < 0.5){
        main.innerHTML = `<img class="head flip-vertical-right" src="images/euro-head.png" alt="euro coin head" style="display: block; opacity: 1;">`
     } else {
        main.innerHTML = `<img class="tail flip-vertical-right" src="images/euro-tail.png" alt="euro coin tail" style="display: block; opacity: 1;">`
    }
}







