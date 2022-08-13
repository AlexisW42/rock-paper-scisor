let userSelection;

const buttonRock = document.querySelector('#rock');
buttonRock.onclick = () => {
  userSelection = 0;
  showWinner(userSelection, computerSelection());
}

const buttonPaper = document.querySelector('#paper');
buttonPaper.onclick = () => {
  userSelection = 1;
  showWinner(userSelection, computerSelection());
}

const buttonScissors = document.querySelector('#scissors');
buttonScissors.onclick = () => {
  userSelection = 2;
  showWinner(userSelection, computerSelection());
}
function computerSelection() {
  return Math.floor(Math.random() * 3);
}

function showOption(num) {
  switch (num) {
    case 0:
      return `rock`;
      break;
    case 1:
      return `paper`
    case 2:
      return `scissors`;
    default:
      break;
  }
}

function showWinner(user, computer) {
  if (user === computer)
    alert(`Is equal, both have ${showOption(user)}`);

  else if ((user === 2 && computer === 0) || (user === 1 && computer === 2) || (user ===0 && computer===1))
    alert(`Computer wins, user uses ${showOption(user)} and computer uses ${showOption(computer)}`);

  else
    alert(`User wins, user uses ${showOption(user)} and computer uses ${showOption(computer)}`)
}