import React from "react"


class APIApp extends React.Component {

    constructor() {
        super()
        this.state = {
            character: {}
        }
    }

    componentDidMount() {
        fetch("https://the-one-api.herokuapp.com/v1/book/5cf5805fb53e011a64671582")
            .then(response => response.json())
            .then(data => {
                this.setState({ character: data })
            })
    }

    render() {
        return (
            <div>
                 CodeG oes here . Also {this.state.character.name}
            </div>
        )
    }

}


export default APIApp