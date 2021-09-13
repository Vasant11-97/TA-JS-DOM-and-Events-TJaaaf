let form = document.querySelector('form');
let output = document.querySelector('.output');

let userInfo = {};

function eventHandler(event){
    event.preventDefault();
    console.log(event);
    userInfo.name = form.elements.text.value;
    userInfo.emailtext = form.elements.emailtext.value;
    userInfo.movie = form.elements.gender.value;
    userInfo.color = form.elements.color.value;
    userInfo.rating = form.elements.range.value;
    userInfo.drone = form.elements.drone.value;
    userInfo.terms = form.elements.terms.checked;
    console.log(userInfo);
    displayForm();
}

form.addEventListener("submit", eventHandler);

function displayForm(){

    let div = document.createElement('div');
    div.classList.add('main-div');

    let cross = document.createElement('i')
    cross.innerHTML = `<i class="fas fa-times"></i>`
    cross.classList.add('cross')
    cross.addEventListener('click',()=> {
        div.style.display = 'none'
    })

    let name = document.createElement('h2');
    name.innerHtml = `Your name is ${userInfo.name}`;

    let email = document.createElement('h2');
    email.innerHTML = `Your email id is ${userInfo.email}`;

    let movie = document.createElement('h2');
    email.innerHTML = `Your movie is ${userInfo.movie}`;

    let color = document.createElement('h2');
    email.innerHTML = `Your color is ${userInfo.color}`;

    let rating = document.createElement('h2');
    email.innerHTML = `Your rating is ${userInfo.rating}`;

    let drone = document.createElement('h2');
    email.innerHTML = `Your drone is ${userInfo.drone}`;

    let terms = document.createElement('h2');
    email.innerHTML = `Your terms is ${userInfo.terms}`;

    div.append(name,email,movie,color,rating,drone,terms);
    output.append(div);
    

}