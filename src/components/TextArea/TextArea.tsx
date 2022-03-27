import React from 'react'

export const TextArea = (props: any) => {
    return (
        <div className={props.title ? "text-field title" : `text-field ${props.breaking ? 'breaking' : ''}`}>
            <textarea placeholder={props.placeholder} value={props.value} className="text-field__input"></textarea>
        </div>
    )
}
