import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<any> = (props) => {
    const onChangeHandler = (event: Event, newValue: number | number[]) => {
props.onChange(event, newValue)
    }

    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
            value={props.value}
            onChange={onChangeHandler}
            color={'green'}
        />
    )
}

export default SuperRange
