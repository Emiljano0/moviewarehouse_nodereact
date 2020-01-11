import React from "react"
import './CSS_comp.css'

function MainContent() {

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

    return (
        <main className="jadajada">
            <h1 style={styles}>Good {part_of_day} Joker ! </h1>
        </main>
    )
}

export default MainContent