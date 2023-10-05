import React from "react";
import Homepage from "./Homepage";
import Section from "./Section";

function Main(props) {
    return (
        <div>
            <Homepage data={props.data.main}/>
            <Section data={props.data.section}/>
        </div>
    );
}

export default Main;
