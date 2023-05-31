let a= prompt("Enter Your Age");
a=Number.parseInt(a);
if(a>0 && a<18)
{
    alert("You are a kid ,not eligible to drive");
}
else if(a>=18 && a<=65)
{
    alert("You are eligible to drive");
}
else{
    alert("not valid");
}