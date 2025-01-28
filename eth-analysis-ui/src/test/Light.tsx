import React from "react"

type Props = {
    // some description 
    variant?: 'green' | 'red' | 'yellow'
}


// some comment about this Light component 
const Light = ({variant}: Props) => {
    return <div
        style={{
            display: 'flex',
            width: 50,
            height: 50,
            borderRadius: '50%',
            background: variant
        }}></div>
}

export default Light
