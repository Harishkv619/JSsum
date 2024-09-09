let sum=0, count
count=parseInt(prompt("Enter anumber between 0 and 1 million: "))
if(count<0 && count>1000000)
{
    console.log("Invalid number");
}
else{
    for(let i=0;i<=count;i++){
    sum+=count
    }
    document.write("Sum of numbers up to "+ count + " is " +sum)
}