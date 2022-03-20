import React, { useState } from 'react'

export const Input = (props : any) => {


    return (
        <div className="text-field">
            <input className="text-field__input" placeholder={props.placeholder} value={props.value}/>
        </div>
    )
}