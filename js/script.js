{ 
    const playerPointSpan = document.querySelector(".player-points"),
          computerPointSpan = document.querySelector(".computer-points"),
          playerChoiseSpan = document.querySelector(".player-choise"),
          computerChoiseSpan = document.querySelector(".computer-choise"),
          resultText = document.querySelector(".result-text");


    let playerPoints = 0, 
        computerPoints = 0;


    const setGame = function() {
        playerPointSpan.innerHTML = playerPoints;
        computerPointSpan.innerHTML = computerPoints;
    };
    
    const playGame = function(playerInput){
        clearMessages();    
        console.log ('player game = ' + playerInput);

        /* losowanie numeru dla komputera */
        const randomNumber = Math.floor(Math.random()* 3 + 1)

        /* przypisanie ruchu dla komputera i playera po wybraniu nr 1,2,3 */
        const getMoveName = function(argMoveId){
            if(argMoveId == 1){
            return 'kamień';
            } 
            else if(argMoveId == 2){
                return 'papier';
            }
            else if(argMoveId == 3){
                return 'nożyce';
            }
            else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
            }
        }
        /* wybór papier, kamien, nożyczki po losowo wybranym numerze*/
        const computerMove = getMoveName(randomNumber)

        /* wybór papier, kamien, nożyczki przez playera*/
        const playerMove = getMoveName(playerInput);
    
        /* funkcja wyniku gry*/
        const displayResult = function(argComputerMove, argPlayerMove)
        {
        if (
            (argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) 
            {
            //printMessage('Ty wygrałeś');
            playerPoints++;
            playerPointSpan.innerHTML = playerPoints;
            resultText.innerHTML = 'Wygrałeś';
            }
            else if (
                (argPlayerMove == 'kamień' && argComputerMove == 'papier' ) || ( argPlayerMove == 'papier' && argComputerMove == 'nożyce' ) || (argPlayerMove == 'nożyce' && argComputerMove == 'kamień')
                )
                    {
                    computerPoints++;
                    computerPointSpan.innerHTML = computerPoints;
                    resultText.innerHTML = 'Przegrałeś';
                    }
            else if (argComputerMove === argPlayerMove)
                {
                resultText.innerHTML = 'Remis';
                }
            else {
                computerPoints++;
                computerPointSpan.innerHTML = computerPoints;
                resultText.innerHTML = 'Przegrałeś'; 
            }
        }
    /* inicjacja funkcji displayResult*/
    displayResult(computerMove, playerMove);
    (computerChoiseSpan.innerHTML = computerMove, playerChoiseSpan.innerHTML = playerMove);
        
    console.log('wybór komputera: ' + computerMove, 'wybór playera: ' + playerMove);

}

    document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1');
    });
    document.getElementById('play-paper').addEventListener('click', function(){
        playGame('2');
    });
    document.getElementById('play-scissors').addEventListener('click', function(){
        playGame('3');
    });
    window.onload - setGame();
    
}