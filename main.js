function getRndInteger(min = 1000, max = 9999) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

 
 function removestr(){
    let str = document.getElementById("input_num").value
    let cstr = str.slice(0, -1)
    return cstr
 } 


document.getElementById("submit_btn").addEventListener("click",function(){
    var usr_input = document.getElementById("input_num").value
    var random_num = parseFloat(document.getElementById("random-number").value)
    var number = parseFloat(usr_input)

    if (random_num == number) {
        document.getElementById("match").style.display="block"
        document.getElementById("notmatch").style.display="none"
    } 
    else{

        document.getElementById("notmatch").style.display="block"
        document.getElementById("match").style.display="none"

            let add = document.getElementById("thisone");
            let inside = add.innerHTML
            let number = parseInt(inside)
            const larger = number + 1        
            const getNum = add.innerHTML= larger
        
            if(getNum == 1){
                document.getElementById("action_left").innerHTML = "2 try left"
            }else if(getNum == 2){
                document.getElementById("action_left").innerHTML = "1 try left"
            }else if(getNum == 3){
                document.getElementById("action_left").innerHTML = "0 try left"
                document.getElementById("input_num").disabled = true;
                this.disabled = true;
            }
        
    }
})




