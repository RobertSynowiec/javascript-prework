function playGame(playerInput){ 
    clearMessages ();
    


    let randomNumber = Math.floor(Math.random() * 3 + 1);
    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

    let argComputerMove = getMoveName(randomNumber);
    let argPlayerMove = getMoveName(playerInput);

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        }
        else if (argMoveId == 2) {
            return 'papier';
        }
        else if (argMoveId == 3) {
            return 'nożyce';
        }
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
    console.log('Wylosowana liczba to: ' + randomNumber);
    printMessage('Ruch komputera: ' + argComputerMove);

    console.log('Gracz wpisał: ' + playerInput);
    printMessage('Twój ruch to: ' + argPlayerMove);

    console.log('moves:', argComputerMove, argPlayerMove);
    function displayResult(argComputerMove , argPlayerMove){
        printMessage ('Zagrałem' + argComputerMove +' , a Ty' + argPlayerMove)
    ;}

    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Ty wygrywasz!');
    }
    else if (argComputerMove == 'kamień' && argPlayerMove  == 'nożyce') {
        printMessage('Komputer wygrywa!');
    }

    else if (argComputerMove == 'papier' && argPlayerMove  == 'nożyce') {
        printMessage('Ty wygrywasz');
    }
    else if (argComputerMove == 'papier' && argPlayerMove  == 'kamień') {
        printMessage('Komputer wygrywa!');
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove  == 'papier') {
        printMessage('Komputer wygrywa!');
    }
    else if (argComputerMove== 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Komputer wygrywa!');
    }
    else if (argPlayerMove == 'nieznany ruch') {
        printMessage('Komputer wygrywa!');
    }
    else  {
        printMessage('remis');
    }

}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });