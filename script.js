function userSubmit(){
    
    //generate computer guess
    var computerchoice = Math.floor(Math.random() * 3) + 1;
    //getting users choice
    var choice = document.getElementById("rps-select").value;

    //Display the users image
    userDisplayChoice(choice);
    //Display the computers image
    computerDisplayChoice(computerchoice);
    //Find the winner
    findWinner(choice, computerchoice);

    

}



function userDisplayChoice(choice){

    if(choice == 1){
        document.getElementById("humanPick").src="./images/rock.png";

    }
    else if(choice == 2){
        document.getElementById("humanPick").src="./images/paper.png";

    }
    else{
        document.getElementById("humanPick").src="./images/scissors.png";
        
    }

    document.getElementById("humanPick").hidden = false;

}

function computerDisplayChoice(computerchoice){

    if(computerchoice == 1){
        document.getElementById("computerPick").src="./images/rock.png";
    }
    else if(computerchoice == 2){
        document.getElementById("computerPick").src="./images/paper.png";
    }else{
        document.getElementById("computerPick").src="./images/scissors.png";
    }
    document.getElementById("computerPick").hidden = false;

}


function findWinner(choice, computerchoice){

    var winner = document.getElementById("winner");
    winner.innerText = "";

    if(choice==1 && computerchoice==3){
        winner.innerText = "User wins!"
    }
    else if(choice==3 && computerchoice==1){
        winner.innerText = "Computer wins!"
    }
    else if(choice==2 && computerchoice==1){
        winner.innerText = "User wins!"
    }
    else if(choice==1 && computerchoice==2){
        winner.innerText = "Computer wins!"
    }
    else if(choice==3 && computerchoice==2){
        winner.innerText = "User wins!"
    }
    else if(choice==2 && computerchoice==3){
        winner.innerText = "Computer wins!"
    }
    else{
        winner.innerText = "Draw!"
    }

    document.getElementById("winner").hidden = false;

    document.getElementById("computerSelect").hidden = false;
    document.getElementById("humanSelect").hidden = false;


}
