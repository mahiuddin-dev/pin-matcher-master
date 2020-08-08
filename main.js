
  document.getElementById("generate").addEventListener("click", function(){
    let randomNum = Math.floor(Math.random() * (9999 - 1000) ) + 1000;
    document.getElementById('random-number').value = randomNum;
    document.getElementById("input_num").value = "";
  }) // set a random number and remove the user input value

 function removestr(){
    let str = document.getElementById("input_num").value
    let cstr = str.slice(0, -1)
    return cstr
 }  // remove the last one by one

document.getElementById("submit_btn").addEventListener("click",function(){

    let getUsrInput = document.getElementById("input_num")
    let usr_input = getUsrInput.value
    const random_num = parseFloat(document.getElementById("random-number").value)
    const number = parseFloat(usr_input)
    // paesefloat user input & random number

    var ActionValue = document.getElementById("action_left") // try left action id
    var TryCounter = document.getElementById("thisone")  // try left action value count id

    if (random_num == number) {
        document.getElementById("match").style.display="block"
        document.getElementById("notmatch").style.display="none"

        let tryCounterTxt =  TryCounter.innerText
        let tryCounterInt = parseInt(tryCounterTxt)  // Count Pin Didn't Match Value
        
        if ( tryCounterInt == 1 || tryCounterInt == 2) {
            ActionValue.innerHTML = "3 try left"
            TryCounter.innerHTML = "0"
        }  // close last if sta...... if ans false and then true. Return 3 try left again 

    }  // close 1st if sta.....

    else{

        document.getElementById("notmatch").style.display="block"
        document.getElementById("match").style.display="none"

            let inside = TryCounter.innerText
            let number = parseInt(inside)
            let larger = number + 1        
            const getNum = TryCounter.innerHTML= larger // add the how many time wrong ans
            // count how much type wrong pin
            
            if(getNum == 1){
                ActionValue.innerHTML = "2 try left"
            }else if(getNum == 2){
                ActionValue.innerHTML = "1 try left"
            }else if(getNum == 3){
                ActionValue.innerHTML = "0 try left"
                getUsrInput.disabled = true;
                this.disabled = true;
            }      
    } // close else sta......

})
