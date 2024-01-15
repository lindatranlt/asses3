console.log('potatooooo');

let color = document.querySelector('#color');
let place = document.querySelector('#place');
let ritual = document.querySelector('#ritual');

function pressColor(evt){
    evt.preventDefault();
    
    alert('Blue');
}

function pressPlace(evt){
    evt.preventDefault();
    
    alert('Vietnam');
}

function pressRitual(evt){
    evt.preventDefault();
    
    alert('Having pho for breakfast!!');
}

color.addEventListener('click', pressColor);

place.addEventListener('click', pressPlace);

ritual.addEventListener('click', pressRitual);