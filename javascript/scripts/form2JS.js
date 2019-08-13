function addNumbers()
{
    var num1=parseFloat (document.getElementById("id1").value)
    var num2=parseFloat(document.getElementById("id2").value)
    if(isNaN(num1))
        {
            alert("enter reee")
        }
    if(isNaN(num2))
        {
            alert("plzz enter")
        }
    
    
        document.getElementById("id3").value=num1 + num2                         }
var x="Good \'morning\' to all"
var y="MorNing"
/*var r=x+" "+y
console.log(r)*/
/*
var r=x.concat(" ",y)
console.log(y.length)
*/
/*alert(y.length)*/
console.log(x.replace("all","too"))
var s="hii heloo Hii and bye"
var k=s.replace(/hii/gi,"hola")
console.log(k)
var l=s.indexOf('h')
console.log(l)