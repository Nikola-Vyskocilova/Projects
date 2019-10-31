let job = "Chef";
let city = "Paris";
let significantOther = "Peter";
let numChildren = 3;

let fortune = "I will be a " + job + ", living in " + city + ", and maried to " + significantOther + " with our " + numChildren + ".";

console.log(fortune);


let hero = document.querySelector("#hero");
hero.addEventListener("click", startAnimation);

function startAnimation(){
    hero.classList.toggle("enable");
}
