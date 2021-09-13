let form = document.querySelector("form");
let modal = document.querySelector(".modal_overlay");
let modalinfo = document.querySelector(".modal_info");

let userData = {};

form.addEventListener("submit",(event) => {
    event.preventDefault();
    let elements = event.target.elements;
    userData.name = elements.name.value;
    userData.emailtext = elements.emailtext.value;
    userData.movie = elements.gender.value;
    userData.color = elements.color.value;
    userData.rating = elements.range.value;
    userData.drone = elements.drone.value;
    userData.terms = elements.terms.value;
    
    modal.classList.add("open");

    // let close = document.querySelector("modal_close");
    // close.addEventListener('click', () => {
    //     modal.classList.remove("open");
    // })

    displayForm(userData);
});


function displayForm(data = {}){
    modalinfo.innerHTML = "";
    let name = document.createElement('h2');
    name.innerText = `Hello ${data.name}`;
    let email = document.createElement('p');
    email.innerText = `Email : ${data.emailtext}`;
    let movie = document.createElement('p');
    movie.innerText = `Movie : ${data.movie}`;
    let color = document.createElement('p');
    color.innerText = `Color : ${data.color}`;
    let rating = document.createElement('p');
    rating.innerText = `Rating : ${data.rating}`;
    let drone = document.createElement('p');
    drone.innerText = `Drone : ${data.drone}`;
    let terms = document.createElement('p');
    terms.innerText = `Terms : ${data.terms}`;


    modalinfo.append(name,email,movie,color,rating,drone,terms);    
    // modalinfo.append(name);

}