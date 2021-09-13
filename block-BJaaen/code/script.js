let userRoot = document.querySelector(".user-icons");
let computerRoot = document.querySelector(".computer-icons");
let result = document.querySelector(".result");

let dataSet = [
    {
        name : "rock",
        beats : "scissors",
    },
    {
        name : "scissors",
        beats : "paper",
    },
    {
        name : "paper",
        beats : "rock",
    },
];

let userSelected ={}, computerSelected = {};

function getWinner(user, computer){
    // tie 

    if(user.name === computer.name) {
        result.innerText = "It's a tie";
    } else if(user.beats === computer.name){
        result.innerText = "🎉🎉🎉 You Win 🎉🎉🎉"
    } else {
        result.innerText = "Computer wins 😏";
    }

}

function getRandomNumber(max = 3){
    return Math.floor(Math.random() * max);
}

function creatingUserLayout(){
    userRoot.innerHTML = "";
    dataSet.forEach((icon) => {
        let li = document.createElement('li');
        let i = document.createElement('i');
        i.className = `fa fa-hand-${icon.name}-o`;

        if(userSelected.name === icon.name){
            li.classList.add = "selected";
        }

        li.addEventListener('click', () => {
            userSelected = icon;

            computerSelected = dataSet[getRandomNumber()];

            getWinner(userSelected, computerSelected);

            creatingUserLayout();
            creatingComputerLayout();
            // console.log(userSelected, computerSelected);
        })

        li.append(i);
        userRoot.append(li);
    });
}
creatingUserLayout();

function creatingComputerLayout(){
    computerRoot.innerHTML = "";
    dataSet.forEach((icon) => {
        let li = document.createElement('li');
        let i = document.createElement('i');
        i.className = `fa fa-hand-${icon.name}-o`;

        if(computerSelected.name === icon.name){
            li.classList.add = "selected"
        }

        li.append(i);
        computerRoot.append(li);
    });
}
creatingComputerLayout();