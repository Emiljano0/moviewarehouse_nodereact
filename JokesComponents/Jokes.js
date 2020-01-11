import React from "react"
import JokeEl from "./JokeEl"
import jokesData from "./jokesData"


function Jokes() {

    const jokeArray = jokesData.map(function(fnct_param) {
        return (
            <JokeEl
                key={fnct_param.id}
                question={fnct_param.question}
                punchline={fnct_param.punchline}
            />
        )
    })

    return (
        <div>
            {jokeArray}
        </div>
        )

}


export default Jokes