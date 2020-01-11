import React from "react"
import ContactCard from "./ContactCard"

function Contacts() {
    return(
        <div>
            <ContactCard
                name="Yoda"
                imgURL="http://placekitten.com/300/200"
                phoneNr="355693552000"
                Email="yeti95yeti@gmail.com"/>
            <ContactCard
                name="John Cena"
                imgURL="http://placekitten.com/300/200"
                phoneNr="355693552000"
                Email="yeti95yeti@gmail.com"/>
            <ContactCard
                name="Fluffy"
                imgURL="http://placekitten.com/300/200"
                phoneNr="355693552000"
                Email="yeti95yeti@gmail.com"/>
            <ContactCard
                name="Beni"
                imgURL="http://placekitten.com/300/200"
                phoneNr="355693552000"
                Email="yeti95yeti@gmail.com"/>
        </div>
    )
}

export default Contacts