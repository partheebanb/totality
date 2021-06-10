import React, { useState } from 'react'
import { FlatList, View, } from 'react-native'

import Option from './Option'

const OptionList = ({options}) => {
    const [ selected, setSelected ] = useState(options[0])
    // const [ options, setOptions ] = useState(names)
    console.log(selected);
    const switchSelected = (option) => {
        setSelected(option)
        console.log(option)
    }

    return (
        options.map((option, index) => {
            return (
                <Option text={option} key={option} selected={option === selected} onSelect={(key) => switchSelected(key)}/>
            )
        })
    )

}

export default OptionList