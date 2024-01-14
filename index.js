console.log("hello potato");

let lanterns = document.querySelector('#lanterns');

let form = document.querySelector('#contact');

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully!');
}

function mouseover () {
	alert('Your smile is as bright as these lanterns!');
}


form.addEventListener('submit', handleSubmit);

lanterns.addEventListener('mouseover', mouseover);