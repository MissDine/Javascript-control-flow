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