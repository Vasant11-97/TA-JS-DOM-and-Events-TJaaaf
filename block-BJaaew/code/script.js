let container = document.querySelector("main")
let rootTag =document.querySelector("ul")
let search = document.querySelector(".search")

let allPeople = got.houses.reduce((acc,cv)=>{
    acc =acc.concat(cv.people);
    return acc;
},[])

let allTags = got.houses.map((house)=>house.name);

let activeHouse = "";
function card(data = []){
    container.innerText=""
          data.forEach((peoples)=>{
              let div =document.createElement("div");
              div.classList.add("box");
              let img =document.createElement("img");
              img.src =peoples.image;
              let h2 =document.createElement("h2");
              h2.innerText = peoples.name;
              let p =document.createElement("p");
              p.innerText =peoples.description;
              let button = document.createElement("button");
               
              button.href = peoples.wikiLink;
              button.innerText = "Know More";

              div.append(img,h2,p,button)
              container.append(div)
          })
      
}
      
function createTagUI(tags=[]){
          rootTag.innerText ="";
          tags.forEach((tag)=>{
              let li =document.createElement("li")
              li.innerText=tag;
              li.addEventListener("click",()=>{
                  activeHouse = tag;
                  let peopleOfGotHouses = got.houses.find((house)=> house.name === tag ).people || [];
                  card(peopleOfGotHouses);
              })
              rootTag.append(li);
          })
      }
function handleSearch(event){
let text = event.target.value;
let filteredPeople =allPeople.filter((p)=>p.name.toLowerCase().includes(text.toLowerCase()));
card(filteredPeople);
}
      search.addEventListener("input",handleSearch);
      card(allPeople);
      createTagUI(allTags);