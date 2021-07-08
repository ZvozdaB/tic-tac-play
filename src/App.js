import React from "react";
import FildCell from "./tic-tac/FildCell";
import WinScrin from "./tic-tac/WinScrin";
import Victories from "./tic-tac/Victories";


function App() {
  let [item, setItem] =React.useState([
    { id: 1, cros: false, zero: false, crossOut: "" },
    { id: 2, cros: false, zero: false, crossOut: "" },
    { id: 3, cros: false, zero: false, crossOut: "" },
    { id: 4, cros: false, zero: false, crossOut: "" },
    { id: 5, cros: false, zero: false, crossOut: "" },
    { id: 6, cros: false, zero: false, crossOut: "" },
    { id: 7, cros: false, zero: false, crossOut: "" },
    { id: 8, cros: false, zero: false, crossOut: "" },
    { id: 9, cros: false, zero: false, crossOut: "" },
  ])
  let [counter, setCounter] = React.useState(0)
  let Game = true
  let win = ""
  let [winCros, setWinCros] = React.useState(0)
  let [winZero, setWinZero] = React.useState(0)
  let [draw, setDraw] = React.useState(0)
  
  function addPoint(id){
    setItem(
      item.map(item=>{
        if(item.id === id){
          if (counter%2===0){
            if (!item.zero){
              item.cros = true
              setCounter(counter+1)
            }
          }
          else {
            if (!item.cros){
            item.zero = true
            setCounter(counter + 1)
            }
          }
        }
        return item
      })
    )
  }
  function checkIfWon() {
    const winCombHor = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ]
    const winCombVer = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ]
    // переможці по горезонталі
    for (let i = 0; i < winCombHor.length; i++) {
      const [a, b, c] = winCombHor[i]
      // переможець хрестик
      if (item[a].cros && item[b].cros && item[c].cros){
        win = "cros"
        Game = false
        item[a].crossOut = item[b].crossOut = item[c].crossOut = "hor"
        return
      }
      // переможець нулік
      if (item[a].zero && item[b].zero && item[c].zero){
        win = "zero"
        Game = false
        item[a].crossOut = item[b].crossOut = item[c].crossOut = "hor"
        return
      }
    }
    // переможці по вертекалі
    for (let i = 0; i < winCombVer.length; i++) {
      const [a, b, c] = winCombVer[i]
      // переможець хрестик
      if (item[a].cros && item[b].cros && item[c].cros) {
        win = "cros"
        Game = false
        item[a].crossOut = item[b].crossOut = item[c].crossOut = "vert"
        return
      }
      // переможець нулік
      if (item[a].zero && item[b].zero && item[c].zero) {
        win = "zero"
        Game = false
        item[a].crossOut = item[b].crossOut = item[c].crossOut = "vert"
        return
      }
    }
    // переможці по діагоналі вправо
    // хрестики
    if (item[0].cros && item[4].cros && item[8].cros){
      win = "cros"
      Game = false
      item[0].crossOut = item[4].crossOut = item[8].crossOut = "dia-r"
      return
    }
    // нолики
    if (item[0].zero && item[4].zero && item[8].zero) {
      win = "zero"
      Game = false
      item[0].crossOut = item[4].crossOut = item[8].crossOut = "dia-r"
      return
    }
    // переможці по діагоналі вліво
    // хрестики
    if (item[2].cros && item[4].cros && item[6].cros) {
      win = "cros"
      Game = false
      item[2].crossOut = item[4].crossOut = item[6].crossOut = "dia-l"
      return
    }
    // нолики
    if (item[2].zero && item[4].zero && item[6].zero) {
      win = "zero"
      Game = false
      item[2].crossOut = item[4].crossOut = item[6].crossOut = "dia-l"
      return
    }
    // нічія
    else if (counter > 8) {
      win = "draw"
      Game = false
      return
  }
}

  

  function newGame(){
  setItem(
    item.map(
      (item) =>{
      item.cros = false
      item.zero = false
      item.crossOut = ""
      setCounter(0)
        if (win === "cros"){
          setWinCros(winCros + 1)
        }
        else if (win === "zero"){
          setWinZero(winZero + 1)
        }
        else if(win === "draw"){
          setDraw(draw + 1)
        }
      return item
    }
      )
    )
  } 
  
  function newSession(){
    newGame()
    setWinCros(0)
    setWinZero(0)
    setDraw(0)
  }
  return (
    <div className="wrapper">
      {checkIfWon()}
      <Victories winCros={winCros} winZero={winZero} draw={draw}/>
      <div className="field" >
        {item.map((item, index)=>{
          return <FildCell className="field__cell" key={index} item={item} addPoint={addPoint} />
        })}
      </div>
      <WinScrin Game={Game} newGame={newGame} win={win} newSession={newSession}/>
      <div className="player ">Move the player: <span style={{textTransform: "uppercase"}}> {(counter % 2 === 0) ? "cros" : "zero"} </span> </div>
    </div>
  );
}

export default App;

