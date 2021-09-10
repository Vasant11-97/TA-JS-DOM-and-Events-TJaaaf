
let number =document.querySelectorAll(".box");
 number.forEach((elem,index)=>{
     elem.addEventListener("click",(event)=>{
         event.target.innerText = index + 1;
         setTimeout(()=>{
            event.target.innerText = ""
         },2000)
     });
 });

 let numbers =document.querySelector(".second");
numbers.addEventListener("click",(event) => {
    let text = event.target.dataset.text;
    event.target.innerText = text;
    setTimeout(()=>{
        event.target.innerText ="";
    },2000)
})