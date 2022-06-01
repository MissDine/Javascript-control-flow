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

// BREAK AND CONTINUE
const scores = [50,63,0,55,100,90,87]
for(let i = 0; i<scores.length;i++){
    if(scores[i] ===0){
        continue
    }
    console.log("Your score is",scores[i])
    if(scores[i] === 100){
        console.log("Congrats you got the to score!");
        break
    }
}
// Switch statements
const grade = "C"
switch(grade){
    case "A":
        console.log("You got an A!");
    case "B":
        console.log("You got an B!");
    case "C":
        console.log("You got an C!");
    case "D":
        console.log("You got an D!");
    case "E":
        console.log("You got an E!");
    default:
        console.log("Not a valid grade");
}

// When we use break then it prints the value defined only for instance A
const grades = "A"
switch(grades){
    case "A":
        console.log("You got an A!");
        break
    case "B":
        console.log("You got an B!");
        break
    case "C":
        console.log("You got an C!");
        break
    case "D":
        console.log("You got an D!");
        break
    case "E":
        console.log("You got an E!");
        break
    default:
        console.log("Not a valid grade");
}

// VARIABLES AND BLOCK SCOPE
// Scope- the area in which a variable value is relevant
// A  variable defined at the root of a document can be accessed anywhere within the document.
// For instance can be accessed anywhere
let Age = 33
if(true){
    console.log("Inside scope",Age);
}
console.log("Outside scope",Age);
// We can redefine a code block inside a function but we cannot redefine it outsie
// if we try let age = 50 outside we get an error but when we do this we won't

let Year = 33
if(true){
    let Year = 50
    let name = "Enid"
    console.log("Inside scope",Year,name);
}
// The new variable and name wont be shown in the outside scope because they are to be used in the function area(scope) alone
console.log("Outside scope",Year, name);