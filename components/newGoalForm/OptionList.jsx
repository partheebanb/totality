import React, { useState } from 'react'

import Option from './Option.jsx'

const OptionList = ({options, onChange}) => {
    const [ selected, setSelected ] = useState(options[0])
    // const [ options, setOptions ] = useState(names)
    console.log(selected);
    const switchSelected = (index) => {
        setSelected(options[index])
        onChange(options[index])
    }

    return (
        options.map((option, index) => {
            return (
                <Option text={option} index={index} key={index} selected={option === selected} onSelect={(index) => switchSelected(index)}/>
            )
        })
    )

}

export default OptionList