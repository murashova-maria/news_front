import React from 'react'

export const TextArea = (props: any) => {
    return (
        <div className="text-field">
            <textarea placeholder={props.placeholder} value={props.value} className="text-field__input"></textarea>
        </div>
    )
}
