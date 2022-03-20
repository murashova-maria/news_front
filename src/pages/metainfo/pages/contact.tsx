import React from 'react'
import { Input } from '../../../components/Input/Input'
import { TextArea } from '../../../components/TextArea/TextArea'

export const Contact: React.FC = () => {



    return (
        <div className='contact'>
            <div className="contact__title">To contact us, please enter the following information and click the "Submit" button.</div>
            <div className="contact__form">
                <div className="contact__form_top">
                    <Input placeholder='First Name' value='' />
                    <Input placeholder='Email' value='' />
                </div>
                <div className="contact__form_top">
                    <Input placeholder='Position' value='' />
                    <Input placeholder='Phone' value='' />
                </div>
                <div className="contact__form_area">
                    <TextArea placeholder='Message' value='' />
                </div>
                <div className='btnNews littlebtn'>
                    SUBMIT
            </div>
            </div>
        </div>
    )
}