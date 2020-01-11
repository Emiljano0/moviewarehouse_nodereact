import React from "react"
import "./JokeElCSS.css"

function JokeEl(props) {
    return(
        <div className="JokeCss">
            <p>Question : {props.question}</p>
            <p>Punchline : {props.punchline}</p>
            <p>{props.jadajada}</p>
        </div>
    )
}


export default JokeEl