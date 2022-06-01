// LOOPS
// For loop
for(let i = 0; i < 5; i++){
    console.log("in loop:", i);
}
console.log("Loop finished!");

for(let i = 0 ;i < 33;i++){
    console.log(i);
}
console.log("Happy birthday bebe!Yey,you are 33!");

const names = ["Enid","Norbert","Moraa",",Marube"]
for(let i = 0; i < names.length;i++){
    console.log("Good morning",names[i]);
}


// WHILE LOOP
let i = 0
while (i < 26) {
    console.log(i);
    i++
}
console.log("You are 25!");

let Names = ["Mary","Sharon","Lilian","Pauline"]
let a = 0
while(a < Names.length){
    console.log("I love you ", Names[a]);
    a++
}
// DO WHILE LOOP
let m = 3
do{
    console.log("Value is :",m);
    m++
}while(m < 5)

// IF STATEMENTS
const age = 20
if(age >= 18){
    console.log("You are an adult");
}

const ninjas = ["Lilo", "Imma", "Enid", "Ruth", "Valentine","Maple"]
if(ninjas.length < 3){
    console.log("You are a big group");
}
// IF ELSE STATEMENT
let password = "pass"
if(password.length >= 8){
    console.log("The password is long enough");
}else{
    console.log("The password is not long enough!");
}

let Password = 5
if(Password >= 12){
    console.log("That Password is mighty strong");
}else if(Password >= 8){
    console.log("The Password is long enough");
}
else{
    console.log("The Password is not long enough");
}

// LOGICAL OPERATORS- OR (||) and AND(&&)
// For or - atleast once condition must be met
// For and - all conditions must be met .
let word = "enid@"
if(word.length >= 12 && word.includes("@")){
    console.log("That word is mighty strong");
}else if(word.length >= 8 || word.includes("@")&& word.length >= 6){
    console.log("The word is strong enough");
}
else{
    console.log("The word is not long enough");
}
// LOGICAL OPERATOR -NOT(!)
let user = false
if (user) {
    console.log("Please sign up");
}else if(!user){
    console.log("Log in");
}else{
    console.log("You are already logged in");
}