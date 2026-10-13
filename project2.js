const fullName = " aline UWASE ";
const strimmedName = fullName.trim();
const separateName= strimmedName.split("");
const sliced= strimmedName.slice(0,5);
const uppercase= stimmedName.toUppercase();
const lowercase= strimmedName.toLowerCase();
const initials = strimmedName.charAt(0)+ strimmedName.charAt(6);
const map = initials.split("").map(word => word.charAt(0).toUppercase(); + wordslice(1)).join(".")+ ".";
const userName = strimmedName.trim().toLocaleLowerCase().split("").to join("");
const length =strimmedName.length;


console.log(strimmedName);
console.log(separateName);
console.log(sliced);
console.log(uppercase);
console.log(lowercase);
console.log(map);
console.log(userName);
console.log(length);

