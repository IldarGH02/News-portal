import React from "react";

import prepareDate from "utils/prepareDate";

import './styles.scss'

interface IDataViewParams {
    value: string
}

const DateView: React.FC<IDataViewParams> = ({value}) => {
    const {day, month} = prepareDate(value)

    return (
        <p className="dateView">
            <span className="day">{day}</span> / {" "}
            <span className="month">{month}</span>
        </p>
    )
}

export default DateView