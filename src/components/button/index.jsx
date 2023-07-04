import React from "react";
import './styles.css';



export default function Button(props) {
    console.log('btn-props',props)
    return(
            <button>{props.children}</button>
    )
}