import React from "react"
import './ClassApp.css'


class CCMain extends React.Component {



    render() {

        const styles = {
            color: "purple",
        }

        const date = new Date()
        const hour = date.getHours()
        let part_of_day

        if (hour < 12) {
            part_of_day = "morning"
            styles.backgroundColor= "lightgreen"
        } else if (hour >= 12 || hour < 19){
            part_of_day = "afternoon"
            styles.backgroundColor= "green"
        } else {
            part_of_day = "night"
            styles.backgroundColor= "olive"
        }

        return(
            <p className="jadajada">
                <h1 style={styles}>Good {part_of_day} {this.props.username} ! </h1>
            </p>
        )
    }

}


export default CCMain