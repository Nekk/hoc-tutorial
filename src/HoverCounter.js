import React,{useState} from 'react'
import withCounter from "./withCounter"

const HoverCounter = ({name, incrementCount, count}) => {
    return (
        <div>
            <h2 onMouseOver={incrementCount}>{name} hover {count} times</h2>   
        </div>
    )
}

export default withCounter(HoverCounter, 10)