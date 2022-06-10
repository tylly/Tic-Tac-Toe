const choicesArr = [
    "boxOne", 
    "boxTwo", 
    "boxThree", 
    "boxFour", 
    "boxFive", 
    "boxSix", 
    "boxSeven", 
    "boxEight", 
    "boxNine"]

    let turns = 0;
    console.log(turns)
choicesArr.map((choice) => {
    
    document.getElementById(choice).onclick = () => {
        
        if (turns === 0 || turns % 2 === 0){
        document.getElementById(choice).value = 'X'
        document.getElementById(choice).disabled = true;
        turns = turns + 1;
        }else{
            document.getElementById(choice).value = 'O'
            document.getElementById(choice).disabled = true;
            turns = turns + 1;
        }
        if(document.getElementById("boxOne").value === "X" && document.getElementById("boxTwo").value === "X" && document.getElementById("boxThree").value === "X"){
            console.log("X wins")
        }else if(document.getElementById("boxOne").value === "O" && document.getElementById("boxTwo").value === "O" && document.getElementById("boxThree").value === "O"){
             console.log("O wins")
        }
        else if(document.getElementById("boxFour").value === "X" && document.getElementById("boxFive").value === "X" && document.getElementById("boxSix").value === "X"){
            console.log("X wins")
         }else if(document.getElementById("boxFour").value === "O" && document.getElementById("boxFive").value === "O" && document.getElementById("boxSix").value === "O"){
            console.log("O wins")
        }else if(document.getElementById("boxSeven").value === "X" && document.getElementById("boxEight").value === "X" && document.getElementById("boxNine").value === "X"){
            console.log("X wins")
        }else if(document.getElementById("boxSeven").value === "O" && document.getElementById("boxEight").value === "O" && document.getElementById("boxNine").value === "O"){
            console.log("O wins")
        }else if(document.getElementById("boxOne").value === "X" && document.getElementById("boxFour").value === "X" && document.getElementById("boxSeven").value === "X"){
            console.log("X wins")
        }else if(document.getElementById("boxOne").value === "O" && document.getElementById("boxFour").value === "O" && document.getElementById("boxSeven").value === "O"){
            console.log("O wins")
        }else if(document.getElementById("boxTwo").value === "X" && document.getElementById("boxFive").value === "X" && document.getElementById("boxEight").value === "X"){
            console.log("X wins")
        }else if(document.getElementById("boxTwo").value === "O" && document.getElementById("boxFive").value === "O" && document.getElementById("boxEight").value === "O"){
            console.log("O wins")
        }else if(document.getElementById("boxThree").value === "X" && document.getElementById("boxSix").value === "X" && document.getElementById("boxNine").value === "X"){
            console.log("X wins")
        }else if(document.getElementById("boxThree").value === "O" && document.getElementById("boxSix").value === "O" && document.getElementById("boxNine").value === "O"){
            console.log("O wins")
        }else if(document.getElementById("boxOne").value === "X" && document.getElementById("boxFive").value === "X" && document.getElementById("boxNine").value === "X"){
            console.log("X wins")
        }else if(document.getElementById("boxOne").value === "O" && document.getElementById("boxFive").value === "O" && document.getElementById("boxNine").value === "O"){
            console.log("O wins")
        }else if(document.getElementById("boxThree").value === "X" && document.getElementById("boxFive").value === "X" && document.getElementById("boxSeven").value === "X"){
            console.log("X wins")
        }else if(document.getElementById("boxThree").value === "O" && document.getElementById("boxFive").value === "O" && document.getElementById("boxSeven").value === "O"){
            console.log("O wins")
        }
        }
        
    }
    
      );

// const cells = [...document.querySelectorAll(".cell")]
// //console.log(cells)
// cells.forEach(item => {
//     console.log(item.value)
// })
    
    






