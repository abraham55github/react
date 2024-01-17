
import { useState } from 'react'
import './App.css'
import confetti from "canvas-confetti"
import { Square } from './components/Square'
import { Turns } from './constants'
import { checkWinnerFrom } from './logic/board'
import { WinnerModal } from './components/WinnerModal'


//programa principal
function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? Turns.X
  })

  //null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null)

  
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(Turns.X)
    setWinner(null)

    window.localStorage.removeItem('board')
  }

  const checkEndGame = (newBoard) =>{
    return (newBoard).every((Square) => Square != null)
  }
  //funcion update board
   
  const updateBoard = (index) => {
    // no actualizamos esta posicion
    if (board[index] || winner) return

    //actualizar el tablero
    const newBoard = [... board]
    newBoard[index] = turn
    setBoard(newBoard)
    //cambiar turno
    const newTurn = turn == Turns.X ? Turns.O : Turns.X
    setTurn(newTurn)
    //guardar aqui partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    // revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner){
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)){
      setWinner(false) //empate
    } //cheack if game is over
  }

  return (
  <main className='board'>  
    <h1>Equis cero</h1>
    <button onClick={resetGame}>Reiniciar juego</button>
    <section className="game">
      {
        board.map((square, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {square}
              </Square>
          )
        })
      }
    </section>
    <section className='turn'>
      <Square isSelected={turn == Turns.X }>
        {Turns.X}
      </Square>
      <Square isSelected={turn == Turns.O}> 
        {Turns.O}
      </Square>
    </section>
    <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
  </main> 
  )
}

export default App
