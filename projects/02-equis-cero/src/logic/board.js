import { WINNER_COMBOS } from "../constants"
export const checkWinnerFrom = (boardTocheack) =>{

    //revisar todas las combinaciones ganadoras
    //para ver si x u o gano
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if (
        boardTocheack[a] &&
        boardTocheack[a] == boardTocheack[b] &&
        boardTocheack[a] == boardTocheack[c]
      ){
        return boardTocheack[a]
      }
    }
    return null
}
