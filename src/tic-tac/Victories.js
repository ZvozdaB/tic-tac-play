import React from "react";


export default function Victories(props){
    
    return(
        <div className="victories">
            <div className="victories_titel">Number of victories:</div>
            <div className="victories_player">Zeros: {props.winZero}</div>
            <div className="victories_player">Crosses: {props.winCros}</div>
            <div className="victories_player">Drow: {props.draw}</div>
        </div>
    )
}