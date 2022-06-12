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
let xWins = 0;
let oWins = 0;

const xDub = () => {
    xWins = xWins + 1
    document.getElementById('xWins').innerText = `X Score: ${xWins}`
}

const oDub = () => {
    oWins = oWins + 1
    document.getElementById('oWins').innerText = `O Score: ${oWins}`
}

const boxesDone = () => {
    document.getElementById("boxOne").disabled = true;
    document.getElementById("boxTwo").disabled = true;
    document.getElementById("boxThree").disabled = true;
    document.getElementById("boxFour").disabled = true;
    document.getElementById("boxFive").disabled = true;
    document.getElementById("boxSix").disabled = true;
    document.getElementById("boxSeven").disabled = true;
    document.getElementById("boxEight").disabled = true;
    document.getElementById("boxNine").disabled = true; 
}  
    
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

        if (turns === 0 || turns % 2 === 0){
            document.getElementById("turn").innerHTML = "Turn - X"
        }else{
            document.getElementById("turn").innerHTML = "Turn - O"
        }
        if(turns === 9){
            document.getElementById("turn").innerHTML = "Tie" 
        }

        if(document.getElementById("boxOne").value === "X" && document.getElementById("boxTwo").value === "X" && document.getElementById("boxThree").value === "X"){
            document.getElementById("turn").innerHTML = "X Wins";
            document.getElementById('reset').style.cssText += 'color:red;';
            document.getElementById("boxOne").style.cssText += "color:red;";
            document.getElementById("boxTwo").style.cssText += "color:red;";
            document.getElementById("boxThree").style.cssText += "color:red;";
            xDub();
            boxesDone();
        }else if(document.getElementById("boxOne").value === "O" && document.getElementById("boxTwo").value === "O" && document.getElementById("boxThree").value === "O"){
            document.getElementById("turn").innerHTML = "O Wins"
            document.getElementById('reset').style.cssText += 'color:red;';
            document.getElementById("boxOne").style.cssText += "color:red;";
            document.getElementById("boxTwo").style.cssText += "color:red;";
            document.getElementById("boxThree").style.cssText += "color:red;";
            oDub();
            boxesDone();
        }else if(document.getElementById("boxFour").value === "X" && document.getElementById("boxFive").value === "X" && document.getElementById("boxSix").value === "X"){
            document.getElementById("turn").innerHTML = "X Wins"
            document.getElementById('reset').style.cssText += 'color:red;';
            document.getElementById("boxFour").style.cssText += "color:red;";
            document.getElementById("boxFive").style.cssText += "color:red;";
            document.getElementById("boxSix").style.cssText += "color:red;";
            xDub();
            boxesDone();
         }else if(document.getElementById("boxFour").value === "O" && document.getElementById("boxFive").value === "O" && document.getElementById("boxSix").value === "O"){
            document.getElementById("turn").innerHTML = "O Wins"
            document.getElementById('reset').style.cssText += 'color:red;';
            document.getElementById("boxFour").style.cssText += "color:red;";
            document.getElementById("boxFive").style.cssText += "color:red;";
            document.getElementById("boxSix").style.cssText += "color:red;";
            oDub();
            boxesDone();
        }else if(document.getElementById("boxSeven").value === "X" && document.getElementById("boxEight").value === "X" && document.getElementById("boxNine").value === "X"){
            document.getElementById("turn").innerHTML = "X Wins"
            document.getElementById('reset').style.cssText += 'color:red;';
            document.getElementById("boxSeven").style.cssText += "color:red;";
            document.getElementById("boxEight").style.cssText += "color:red;";
            document.getElementById("boxNine").style.cssText += "color:red;";
            xDub();
            boxesDone();
        }else if(document.getElementById("boxSeven").value === "O" && document.getElementById("boxEight").value === "O" && document.getElementById("boxNine").value === "O"){
            document.getElementById("turn").innerHTML = "O Wins"
            document.getElementById('reset').style.cssText += 'color:red;';
            document.getElementById("boxSeven").style.cssText += "color:red;";
            document.getElementById("boxEight").style.cssText += "color:red;";
            document.getElementById("boxNine").style.cssText += "color:red;";
            oDub();
            boxesDone();
        }else if(document.getElementById("boxOne").value === "X" && document.getElementById("boxFour").value === "X" && document.getElementById("boxSeven").value === "X"){
            document.getElementById("turn").innerHTML = "X Wins"
            document.getElementById('reset').style.cssText += 'color:red;';
            document.getElementById("boxOne").style.cssText += "color:red;";
            document.getElementById("boxFour").style.cssText += "color:red;";
            document.getElementById("boxSeven").style.cssText += "color:red;";
            xDub();
            boxesDone();
        }else if(document.getElementById("boxOne").value === "O" && document.getElementById("boxFour").value === "O" && document.getElementById("boxSeven").value === "O"){
            document.getElementById("turn").innerHTML = "O Wins"
            document.getElementById('reset').style.cssText += 'color:red;';
            document.getElementById("boxOne").style.cssText += "color:red;";
            document.getElementById("boxFour").style.cssText += "color:red;";
            document.getElementById("boxSeven").style.cssText += "color:red;";
            oDub();
            boxesDone();
        }else if(document.getElementById("boxTwo").value === "X" && document.getElementById("boxFive").value === "X" && document.getElementById("boxEight").value === "X"){
            document.getElementById("turn").innerHTML = "X Wins"
            document.getElementById('reset').style.cssText += 'color:red;';
            document.getElementById("boxTwo").style.cssText += "color:red;";
            document.getElementById("boxFive").style.cssText += "color:red;";
            document.getElementById("boxEight").style.cssText += "color:red;";
            xDub();
            boxesDone();
        }else if(document.getElementById("boxTwo").value === "O" && document.getElementById("boxFive").value === "O" && document.getElementById("boxEight").value === "O"){
            document.getElementById("turn").innerHTML = "O Wins"
            document.getElementById('reset').style.cssText += 'color:red;';
            document.getElementById("boxTwo").style.cssText += "color:red;";
            document.getElementById("boxFive").style.cssText += "color:red;";
            document.getElementById("boxEight").style.cssText += "color:red;";
            oDub();
            boxesDone();
        }else if(document.getElementById("boxThree").value === "X" && document.getElementById("boxSix").value === "X" && document.getElementById("boxNine").value === "X"){
            document.getElementById("turn").innerHTML = "X Wins"
            document.getElementById('reset').style.cssText += 'color:red;';
            document.getElementById("boxThree").style.cssText += "color:red;";
            document.getElementById("boxSix").style.cssText += "color:red;";
            document.getElementById("boxNine").style.cssText += "color:red;";
            xDub();
            boxesDone();
        }else if(document.getElementById("boxThree").value === "O" && document.getElementById("boxSix").value === "O" && document.getElementById("boxNine").value === "O"){
            document.getElementById("turn").innerHTML = "O Wins"
            document.getElementById('reset').style.cssText += 'color:red;';
            document.getElementById("boxThree").style.cssText += "color:red;";
            document.getElementById("boxSix").style.cssText += "color:red;";
            document.getElementById("boxNine").style.cssText += "color:red;";
            oDub();
            boxesDone();
        }else if(document.getElementById("boxOne").value === "X" && document.getElementById("boxFive").value === "X" && document.getElementById("boxNine").value === "X"){
            document.getElementById("turn").innerHTML = "X Wins"
            document.getElementById('reset').style.cssText += 'color:red;';
            document.getElementById("boxOne").style.cssText += "color:red;";
            document.getElementById("boxFive").style.cssText += "color:red;";
            document.getElementById("boxNine").style.cssText += "color:red;";
            xDub();
            boxesDone();
        }else if(document.getElementById("boxOne").value === "O" && document.getElementById("boxFive").value === "O" && document.getElementById("boxNine").value === "O"){
            document.getElementById("turn").innerHTML = "O Wins"
            document.getElementById('reset').style.cssText += 'color:red;';
            document.getElementById("boxOne").style.cssText += "color:red;";
            document.getElementById("boxFive").style.cssText += "color:red;";
            document.getElementById("boxNine").style.cssText += "color:red;";
            oDub();
            boxesDone();
        }else if(document.getElementById("boxThree").value === "X" && document.getElementById("boxFive").value === "X" && document.getElementById("boxSeven").value === "X"){
            document.getElementById("turn").innerHTML = "X Wins"
            document.getElementById('reset').style.cssText += 'color:red;';
            document.getElementById("boxThree").style.cssText += "color:red;";
            document.getElementById("boxFive").style.cssText += "color:red;";
            document.getElementById("boxSeven").style.cssText += "color:red;";
            xDub();
            boxesDone();
        }else if(document.getElementById("boxThree").value === "O" && document.getElementById("boxFive").value === "O" && document.getElementById("boxSeven").value === "O"){
            document.getElementById("turn").innerHTML = "O Wins"
            document.getElementById('reset').style.cssText += 'color:red;';
            document.getElementById("boxThree").style.cssText += "color:red;";
            document.getElementById("boxFive").style.cssText += "color:red;";
            document.getElementById("boxSeven").style.cssText += "color:red;";
            oDub();  
            boxesDone();  
        }
        if(turns === 9){
            document.getElementById("turn").innerHTML = "Tie"  
        }
    }  
});

const reset = () => {
    turns = 0
    document.getElementById('reset').style.cssText += 'color:white;';
    document.getElementById("boxOne").setAttribute('value', ' ')
    document.getElementById("boxOne").disabled = false;
    document.getElementById("boxOne").style.cssText += "color:white;"
    
    document.getElementById("boxTwo").setAttribute('value', ' ')
    document.getElementById("boxTwo").disabled = false;
    document.getElementById("boxTwo").style.cssText += "color:white;"
    
    document.getElementById("boxThree").setAttribute('value', ' ')
    document.getElementById("boxThree").disabled = false;
    document.getElementById("boxThree").style.cssText += "color:white;"
    
    document.getElementById("boxFour").setAttribute('value', ' ')
    document.getElementById("boxFour").disabled = false;
    document.getElementById("boxFour").style.cssText += "color:white;"
    
    document.getElementById("boxFive").setAttribute('value', ' ')
    document.getElementById("boxFive").disabled = false;
    document.getElementById("boxFive").style.cssText += "color:white;"
    
    document.getElementById("boxSix").setAttribute('value', ' ')
    document.getElementById("boxSix").disabled = false;
    document.getElementById("boxSix").style.cssText += "color:white;"
    
    document.getElementById("boxSeven").setAttribute('value', ' ')
    document.getElementById("boxSeven").disabled = false;
    document.getElementById("boxSeven").style.cssText += "color:white;"
    
    document.getElementById("boxEight").setAttribute('value', ' ')
    document.getElementById("boxEight").disabled = false;
    document.getElementById("boxEight").style.cssText += "color:white;"
    
    document.getElementById("boxNine").setAttribute('value', ' ')
    document.getElementById("boxNine").disabled = false;
    document.getElementById("boxNine").style.cssText += "color:white;"
    
    document.getElementById("turn").innerHTML = "Turn - X";
}

const resetScore = () => {
    xWins = 0;
    oWins = 0;
    document.getElementById('xWins').innerText = `X Score: ${xWins}`
    document.getElementById('oWins').innerText = `O Score: ${oWins}`
}

document.getElementById("reset").addEventListener("click", reset);
document.getElementById("newGame").addEventListener("click", resetScore);