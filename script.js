let result = ''

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    draws: 0
  };
  updateScoreElement();

  


function play(usersChoice) {

    const choices = ['rock','paper','scissor']

    let randomIndex = Math.floor(Math.random() * choices.length);

    let computersChoice = choices[randomIndex]

    console.log(`Users Choice: ${usersChoice}`)
    console.log(`Computer Choice: ${computersChoice}`)


    if (usersChoice === computersChoice){

        result = 'Draw.'
    }
    
    else if (usersChoice === `rock` && computersChoice === `paper`){
        
        result = `You Loose...`

    }

    else if (usersChoice === `rock` && computersChoice === `scissor`){

        result = `You Win!!`

    }
    else if (usersChoice === `paper` && computersChoice === `scissor`){
        
        result = `You Loose...`

    }

    else if (usersChoice === `paper` && computersChoice === `rock`){

        result = `You Win!!`

    }
    else if (usersChoice === `scissor` && computersChoice === `rock`){
        
        result = `You Loose...`

    }

    else if (usersChoice === `scissor` && computersChoice === `paper`){

        result = `You Win!!`

    }


    document.querySelector('.results').innerHTML = result;

    document.querySelector('.pcChoice').innerHTML = `Computer <img src="player/${computersChoice}.png">`;
    document.querySelector('.playerChoice').innerHTML = `You <img src="computer/${usersChoice}.png">`;
    


    if (result === 'You Win!!') {
        score.wins += 1;
      } else if (result === 'You Loose...') {
        score.losses += 1;
      } else if (result === 'Draw.') {
        score.draws += 1;
      }

    
      localStorage.setItem('score', JSON.stringify(score));
    
      updateScoreElement();
    
}


function updateScoreElement() {

    document.querySelector(`.scoress`)
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.draws}`;
}














