import React, {useState} from 'react'
import withCounter from "./withCounter"

const ClickCounter =  ({name, incrementCount, count}) => {

    return (
        <div>
            <button onClick={incrementCount}> {name} click {count} Times</button>
        </div>
    )
}

export default withCounter(ClickCounter, 5)