import React from 'react';
import cl from './DropDownList.module.css'

const DropDownList = ({defaultVal, options, onChange, value}) => {
    return (
        <select
            value={value}
             onChange={event => onChange(event.target.value)}
            className={cl.selecter}>
            <option value="" disabled>{defaultVal}</option>
            {
                options.map(option =>
                    <option key={option.value} value={option.value}>{option.name}</option>
                )
            }
        </select>
    );
};

export default DropDownList;