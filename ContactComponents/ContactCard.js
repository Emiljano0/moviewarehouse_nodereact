import React from "react"

function ContactCard(props) {
    return(
    <div>
        <img src={props.imgURL} />
        <h3>{props.name}</h3>
        <p>Phone : {props.phoneNr}</p>
        <p>Email : {props.Email}</p>
    </div>
    )
}

export default ContactCard