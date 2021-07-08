import React from "react";

export default function WinScrin(props){
    function win(win){
        if (win==="cros"){
            return "crosses won" 
        }
        else if (win === "zero"){
            return "zeros won"    
        }
        else if (win === "draw")
            return "draw"

    }
    return(
        <div className="win" style={(props.Game) ? { display: "none" } : { display: "flex" }}>
            <p className="win__player"> {win(props.win)}</p>
            <div className="win__btn">
                <div className="win__new-game" onClick={() => { props.newGame()}}><p>Next Game</p></div>
                <div className="win__new-game" onClick={() => { props.newSession()}}><p>New Session</p></div>
            </div>
        </div>
    )
}