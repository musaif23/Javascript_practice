let a1=()=>{
    let num=prompt("which Numbers table you want");
     for(let n=1; n<=10; n++){
        console.log(`${n} X ${num} = ${n*num}`);
     }
}

let b1=()=>{
    let num=prompt("which Numbers table you want");
    let n=1;
    while(n<=10){
        console.log(`${n} * ${num} = ${n*num}`);
        n++;
    }
}

let c1=()=>{
    let num=prompt("which Numbers table you want");
    let n=1;
    do{
        console.log(`${n} INTO ${num} = ${n*num}`);
        n++;

    }while(n<=10);

}

let d1=()=>{
    alert("Choose A style you want\n 1. 1 X 1 = 1 with for loop \n 2. 1 * 1 = 1 With while loop \n 3. 1 INTO 1 = 1 with do while loop");
}

d1();
let s=prompt("Enter your choice");
switch(s){
    case "1" : a1();
    break;
    case "2" : b1();
    break;
    case "3" : c1();
    break;
    default : console.log("Invalid Input");

}