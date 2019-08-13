 function isNumber(valueToCheck) {
            return !isNaN(valueToCheck)
        }
function isString(str){
    var letter = str[0];
if (letter !== letter.toUpperCase()){
   
}
}
 
        window.onload = function(e){
            var numeric = document.getElementById('id1')
            var info1 = document.getElementById('div1')

            var text=document.getElementById('id2')
            
            var info2=document.getElementById('div2')

            var submitForm = document.getElementById('id5')
 
            numeric.onkeydown = function(evt){
                if (!isNumber(String.fromCharCode(evt.which)) && evt.which !== 8 ) {
                    info1.innerHTML = 'Enter Numeric data only'
                    this.style.backgroundColor = 'red'
                    evt.preventDefault()
                }
                else{
                    info1.innerHTML = ''
                    this.style.backgroundColor =  'aqua'
                }
            }
                
                
               numeric.onkeydown = function(evt1){
                if (isString(String.fromCharCode(evt1.which)) {
                    info2.innerHTML = 'Enter capital letters and Minimum length is 5'
                    this.style.backgroundColor = 'red'
                    evt1.preventDefault()
                }
                else{
                    info2.innerHTML = ''
                    this.style.backgroundColor =  'aqua'
                }
            }
             
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
        }
