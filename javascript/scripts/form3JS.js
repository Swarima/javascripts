function Emails()
{
var x=document.getElementById("id1").value
var y=x.substring(0,x.indexOf("@"))
var z=x.substring(x.indexOf("@")+1)
document.getElementById("id2").value=y
    document.getElementById("id3").value=z
}

var s=Number(prompt("enter number"," "))

   /* if(s===1){
        console.log("haan")
}
else if(s===67)
    {
        console.log("hgyg")
    }
else
    {
    console.log("else")}*/
/*switch(s)
    {
            case 1:alert("hola")
            break;
            
        case 2:
            alert("yoo")
            break;
            
        default:
            alert("nii h")
            break;
    }*/
/*
var d1=s===1?"Jan":s===2?"Feb":s===3?"March":"not a month"
alert(d1)


*/
var start=0
while(start<=s)
{
    document.write(start+"<br>")
start=start+2
}