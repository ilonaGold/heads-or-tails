const heads = document.querySelector('.heads');
const tails = document.querySelector('.tails');
const btn = document.querySelector('.btn');

let headsOrTails;

btn.addEventListener('click', flip);

function flip(){
    if(headsOrTails = Math.random() < 0.5){
        heads.style.display = 'block';
        heads.style.opacity = '1';
        tails.style.display = 'none';
      } else {
        heads.style.display = 'none';
        tails.style.display = 'block';
        tails.style.opacity = '1';
    }
}




