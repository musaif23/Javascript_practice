
let b=()=>{
    console.log("Select What You Want To Order");
    console.log("1. Starter\n 2. Recomended \n 3. Main Menue");
    alert("Select What You Want To Order \n1. Starter\n 2. Recomended \n 3. Main Menue");
    
}

let c=()=>{
    console.log("Select Starter that You Want To Order");
    console.log("1. Chicken Roll\n 2. Chicken Shorma \n 3. Chicken Lollypop");
    let a1=prompt("Enter your choice\n 1. Chicken Roll\n 2. Chicken Shorma \n 3. Chicken Lollypop");
    a1=Number.parseInt(a1);
    switch(a1){
        case 1 : alert("You have Ordered Chicken Roll\n Your ordered takes five minutes \n thanks for order");
        break;
        case 2 : alert("You have Ordered Chicken Shorma\n Your ordered takes five minutes \n thanks for order");
        break;
        case 3 : alert("You have Ordered Chicken Lollypop\n Your ordered takes five minutes \n thanks for order");
    }
    
}


let d=()=>{
    console.log("Select Recomended Dish that You Want To Order");
    console.log("1. Biryani\n 2. Chicken korma \n 3. Nihari");
    let a2=prompt("Enter your choice \n 1. Biryani\n 2. Chicken korma \n 3. Nihari");
    a2=Number.parseInt(a2);
    switch(a2){
        case 1 : alert("You have Ordered Biryani\n Your ordered takes five minutes \n thanks for order");
        break;
        case 2 : alert("You have Ordered Chicken Korma\n Your ordered takes five minutes \n thanks for order");
        break;
        case 3 : alert("You have Ordered Nihari\n Your ordered takes five minutes \n thanks for order");
    }
    
}

let e=()=>{
    console.log("Select Main Menue Dish that You Want To Order");
    console.log("1. Kashmiri Pulav\n 2. Tahari \n 3. Murg Musalam");
    let a3=prompt("Enter your choice \n 1. Kashmiri Pulav\n 2. Tahari \n 3. Murg Musalam");
    a2=Number.parseInt(a2);
    switch(a3){
        case 1 : alert("You have Ordered Kashmiri Pulav\n Your ordered takes five minutes \n thanks for order");
        break;
        case 2 : alert("You have Ordered Tahari\n Your ordered takes five minutes \n thanks for order");
        break;
        case 3 : alert("You have Ordered Murg Musalam\n Your ordered takes five minutes \n thanks for order");
    }
    
}

b();
let s=prompt("Enter your choice");

if(s==1){
    c();
}
else if(s==2){
    d();
}
else if(s==3){
    e();
}
else{
    console.log("Invalid Input");
    alert("Invalid Input");
}
