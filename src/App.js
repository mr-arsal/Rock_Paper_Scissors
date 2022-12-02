import './App.css';

function App() {
  const game = () => {
    let user = prompt('rock, paper or scissors');
    let system = Math.floor(Math.random() * 3);
    let cpu = ['rock', 'paper', 'scissors'][system]

    const match = (cpu, user) => {
      if (cpu === user) {
        return 'Match is tied! No one'
      } else if (cpu === 'rock' && user === 'paper') {
        return 'User'
      } else if (cpu === 'rock' && user === 'scissors') {
        return 'Cpu'
      } else if (cpu === 'paper' && user === 'rock') {
        return 'Cpu'
      } else if (cpu === 'paper' && user === 'scissors') {
        return 'User'
      } else if (cpu === 'scissors' && user === 'rock') {
        return 'User'
      } else if (cpu === 'scissors' && user === 'paper') {
        return 'User'
      }
    }
    let result = match(cpu, user);
    document.getElementById('result').innerHTML = `User = ${user} <br/> CPU = ${cpu} <br/><br/> Result: ${result} has  won the match.`
    document.getElementById('vanished').innerHTML = 'Play Again'
    document.getElementById('vanished1').innerHTML = ''
  }

  return (

    <div className='background'>
      <h1 id='result'>Rock Paper Scissors</h1>
      <button id='vanished' onClick={game}>Start the game</button>
      <p className='caution' id='vanished1'>Two players display one of three symbols: a rock, paper, or scissors. A rock beats scissors, scissors beat paper by cutting it, and paper beats rock by covering it.</p>
    </div>

  );
}

export default App;