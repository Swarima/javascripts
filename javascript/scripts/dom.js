var btn=document.getElementById('test')
var p=document.querySelector('#output')
btn.addEventListener('click',function(){
    p.style.backgroundColor='red'
    p.style.color='white'
    p.innerHTML="hello everyone"
})

var arr=[1,2,3,4,5]
for(var a in arr)
    console.log(arr[a])
var s=[7,8,9]
for(var b in s)
    console.log(s[b])
console.log(arr.concat(s))
document.write(arr.includes(6))
console.log(arr.pop())
console.log(s.push(7))
console.log(arr.join('*'))
console.log(arr.keys())
console.log(arr.toString())
console.log(arr.reverse())
console.log(arr.indexOf(4))
console.log(arr.slice(1,3))





