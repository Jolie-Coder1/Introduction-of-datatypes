const name = "Aline Uwase";
const location = "Kigali";
const yearsOfExperience = 1;
const isLearningJavaScript = true;
const interests = ["frontend development", "design"];

console.log("name:", name, "| typeof:", typeof name);
console.log("location:", location, "| typeof:", typeof location);
console.log("yearsOfExperience:", yearsOfExperience, "| typeof:", typeof yearsOfExperience);
console.log("isLearningJavaScript:", isLearningJavaScript, "| typeof:", typeof isLearningJavaScript);
console.log("interests:", interests, "| typeof:", typeof interests);

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
