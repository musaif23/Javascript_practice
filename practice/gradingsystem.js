let english=prompt("Enter Your English Marks");
english=Number.parseInt(english);

let maths=prompt("Enter Your Maths Marks");
maths=Number.parseInt(maths);

let science=prompt("Enter Your Science Marks");
science=Number.parseInt(science);

let computer_science=prompt("Enter Your Computer Science marks");
computer_science=Number.parseInt(computer_science);

let total=400;
let obtain=english+maths+science+computer_science;

let per=(obtain/total)*100;

console.log("Marks Obtain="+obtain);
console.log("Total Marks="+total);
console.log("Percentage="+per);

if(per>=90){
    console.log("status = Pass");
    console.log("Grade = A+");
    alert("You are Pass With A+ Grade");
}
else if(per>=80){
    console.log("status = Pass");
    console.log("Grade = A");
    alert("You are Pass With A Grade");
}

else if(per>=60){
    console.log("status = Pass");
    console.log("Grade = B+");
    alert("You are Pass With B+ Grade");
}
else if(per>=50){
    console.log("status = Pass");
    console.log("Grade = B");
    alert("You are Pass With B Grade");
}
else if(per>=35){
    console.log("status = Pass");
    console.log("Grade = C");
    alert("You are Pass With C Grade");
}
else{
    console.log("status = Fail");
    alert("Your Are Fail");
}

