const name = "Aline uwase";
const location= "kigali";
const yearsofexperience= 1 ;
const withlearningofjavascript = true;
const withinterests = ["frontend developer","design"];

console.log ("name:", name , typeof name);
console.log ("location :", typeof location);
console.log("yearsofexperience :", typeofyearsofexperience);
console.log ("withlearningof javascript :", typeofwithlearningofjavascript);
console.log ("withinterests ", typeofwithinterests);


const phrase = "frontend-developer-kigali";
const titleCasePhrase = phrase
	.split("-")
	.map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
	.join(" ");
console.log(titleCasePhrase);

const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random integer:", randomNumber);
console.log("Is even:", randomNumber % 2 === 0);
console.log("Square root:", Math.sqrt(randomNumber).toFixed(2));











