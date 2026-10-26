let displayVal = document.getElementById("display-val");
let val = 0;

const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
const themeLogic = document.getElementById("theme-logic");


increment.addEventListener("click",function(){
    val = Number(val)  + 1;
    displayVal.textContent= val;
});

decrement.addEventListener("click",()=>{
    val = Number(val) - 1;
    displayVal.textContent = val;
})

reset.addEventListener("click",()=>{
    val = 0;
    displayVal.textContent = val;
});

themeLogic.addEventListener("click",()=>{
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeLogic.innerHTML = "Switch To Dark Mode";
    }else{
       themeLogic.innerHTML = "Switch To Dark Mode";
    }
})