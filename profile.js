console.log('potatooooo');

let color = document.querySelector('#color');
let place = document.querySelector('#place');
let ritual = document.querySelector('#ritual');
let question = document.querySelector('#question');

function pressColor(evt){
    evt.preventDefault();
    
    alert('Lilac');
}

function pressPlace(evt){
    evt.preventDefault();
    
    alert('Vietnam');
}

function pressRitual(evt){
    evt.preventDefault();
    
    alert('Skincare in the morning and night!');
}

function pressQuestion(evt){
    evt.preventDefault();

    alert('Wherever you are, I wish you happinessa!')
}

color.addEventListener('click', pressColor);

place.addEventListener('click', pressPlace);

ritual.addEventListener('click', pressRitual);

question.addEventListener('submit', pressQuestion);