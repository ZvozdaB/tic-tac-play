import React from "react";
import Cros from "./Cros";
import Zero from "./Zero";
function add(props) {
    if (props.item.cros) {
        return <Cros  />       
    } else if (props.item.zero) {
        return <Zero />       
    }
}
function crossOut(props){
    if (props.item.crossOut === "hor"){
        return <div className="cross-out"/>
    } else if (props.item.crossOut === "vert"){
        return <div className="cross-out cross-out_vert" />
    } else if (props.item.crossOut === "dia-l"){
        return <div className="cross-out cross-out_dia-l" />
    } else if (props.item.crossOut === "dia-r") {
        return <div className="cross-out cross-out_dia-r" />
    }
}
export default function FildCell(props){
    
    return(
        <div className="field__cell" onClick={() => {
            props.addPoint(props.item.id) }}>
            {add(props)}
            {crossOut(props)}
        </div>
    )
}