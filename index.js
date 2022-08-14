let userSelection;
let computerSelection;

console.log(document.getElementsByTagName('h2'));

const buttonRock = document.querySelector('#rock');
buttonRock.onclick = () => {
  userSelection = 0;
  computerSelection = calcComputerSelection();
  showWinner(userSelection, computerSelection);
}

const buttonPaper = document.querySelector('#paper');
buttonPaper.onclick = () => {
  userSelection = 1;
  computerSelection = calcComputerSelection();
  showWinner(userSelection, computerSelection);
}

const buttonScissors = document.querySelector('#scissors');
buttonScissors.onclick = () => {
  userSelection = 2;
  computerSelection = calcComputerSelection();
  showWinner(userSelection, computerSelection);
}
function calcComputerSelection() {
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

function createMesage(winner) {
  if (winner !== 'none') {
    message = document.getElementsByTagName('h2')[0];
    message.innerHTML = `${winner} wins, user uses ${showOption(userSelection)} and computer uses ${showOption(computerSelection)}`;
  }

  else {
    message = document.getElementsByTagName('h2')[0];
    message.textContent = `Is tie, both have ${showOption(userSelection)}`
  }
}

function showWinner(user, computer) {
  if (user === computer) {
    createMesage('none');
  }

  else if ((user === 2 && computer === 0) || (user === 1 && computer === 2) || (user === 0 && computer === 1)) {
    createMesage('Computer');
  }

  else {
    createMesage('User');
  }
}