let form = document.querySelector("form");
let displayData = document.querySelector('.display')
let movieDetail = {};
function handleInput(event) {
  event.preventDefault();
  movieDetail.movie = form.elements.movie.value;
  createUi();
}

function createUi() {
    let insideDisplay = document.createElement('div')
    insideDisplay.classList.add('insideDisplay')

    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox')
   
    
    

    let movieName = document.createElement('h3')
    movieName.innerHTML = movieDetail.movie
    movieName.classList.add('movieName')
    movieName.style.marginLeft  = '2rem'

    

    let cross = document.createElement('h4');
    cross.innerHTML = '❌'
    cross.style.marginLeft = '3rem'
    cross.style.cursor = 'pointer'
    cross.addEventListener('click', ()=>{
        insideDisplay.remove('insideDisplay')
    })

    insideDisplay.append(checkbox,movieName,cross)
    displayData.append(insideDisplay)

    form.elements.movie.value = '';
}

form.addEventListener("submit", handleInput);