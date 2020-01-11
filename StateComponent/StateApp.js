import React from "react"


class StateApp extends React.Component {

    constructor() {
        super()
        this.state = {
            answer: "ya",
            name: "Borat",
            quote: "is Nice",
            isLoggedIn: false,
            count: 0,
            count2: 9
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(function(prevState) {
            return {
                count: prevState.count + 1,
                count2: prevState.count2 * 1.5
            }
        })
    }

    render() {

        let word
        let expression
        if (this.state.isLoggedIn) {
            word = "In"
            expression = "Welcome Borat"
        } else {
            word = "Out"
            expression = "Goodbye Borat"
        }

        return(
            <div>
                <h1>Is state important to know? {this.state.answer} </h1>
                <p>
                    <h3>Hello {this.state.name}. How are you liking California ?</h3>
                    <h3>{this.state.quote}</h3>
                </p>
                <p>
                    <h2>You are Logged {word} . {expression}</h2>
                </p>
                <div>
                    <p>
                        <h1>{this.state.count} {this.state.count2}</h1>
                        <button onClick={this.handleClick}>Change</button>
                    </p>
                </div>
            </div>
        )
    }

}


export default StateApp