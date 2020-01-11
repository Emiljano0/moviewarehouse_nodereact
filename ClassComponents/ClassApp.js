import React from "react"
import CCHeader from "./CCHeader"
import CCMain from "./CCMain"
import CCFooter from "./CCFooter"

class ClassApp extends React.Component {

    render () {
        return (
            <div>
                <CCHeader />
                <CCMain username="Joker"/>
                <CCFooter />
            </div>
        )
    }
}


export default ClassApp