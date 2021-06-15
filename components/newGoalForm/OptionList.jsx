import React, { useState } from 'react'
import { FlatList, View, } from 'react-native'

import Option from './Option'

const OptionList = ({options}) => {
    const [ selected, setSelected ] = useState(options[0])
    // const [ options, setOptions ] = useState(names)
    console.log(selected);
    const switchSelected = (index) => {
        setSelected(options[index])
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