import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { TextArea } from '../../components/TextArea/TextArea'

import dropIcon from '../../assets/img/dropIcon.png'
import iconAuthor from '../../assets/img/iconAuthor.svg'
import { Checkbox, TextEditor, ToolPanel } from '../../components'
import { Tabs } from '../metainfo/Tabs/tabs'
import { Tab } from '../../components/Tab'
import addTab from '../../assets/img/addTab.svg'
import { useNavigate } from 'react-router'
import { useAppDispatch, useAppSelector } from '../../store'

export const CreatePage: React.FC = () => {

    const history = useNavigate()

    const [drag, setDrag] = useState<boolean>(false)
    const [selectedFile, setSelectedFile] = useState(null)
    const [fileFormat, setFileFormat] = useState('')
    const [preview, setPreview] = useState<any>()

    const [isCheckedBreaking, setIsCheckedBreaking] = useState<boolean>(false)
    const [isCheckedMain, setIsCheckedMain] = useState<boolean>(false)

    const dispatch = useAppDispatch()
    const tabs = useAppSelector(state => state.dataADmin.tabs)

    const dragStartHandler = (e: any) => {
        e.preventDefault()
        setDrag(true)
    }

    const dragLeaveHandler = (e: any) => {
        e.preventDefault()
        setDrag(false)
    }

    const onDropHandler = (e: any) => {
        e.preventDefault()
        let files = [...e.dataTransfer.files]
        if (files[0].name.split('.')[files[0].name.split('.').length - 1] === 'png'
            || files[0].name.split('.')[files[0].name.split('.').length - 1] === 'jpg') {
            setSelectedFile(files[0])
            setFileFormat(files[0].name.split('.')[files[0].name.split('.').length - 1])
            console.log(files[0]);
        } else {
            toast.error('Only PNG, JPG are supported')
        }

        setDrag(false)
    }

    useEffect(() => {
        if (selectedFile) {
            const reader: any = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result)
            }
            reader.readAsDataURL(selectedFile)
        } else {
            setPreview('')
        }
    }, [selectedFile])

    return (
        <>
            <div className="circle firstcircle"></div>
            <div className="circle secondcircle"></div>
            <div className="circle thirdcircle"></div>
            <div className="circlebot fourthcircle"></div>
            <div className='create'>
                <div className="create__right">
                    <TextArea title={true} />
                    {
                        drag
                            ? <div
                                onDragStart={e => dragStartHandler(e)}
                                onDragLeave={e => dragLeaveHandler(e)}
                                onDragOver={e => dragStartHandler(e)}
                                onDrop={e => onDropHandler(e)}
                                className="dropArea">
                                Drag and drop files to upload them
                            </div>
                            : <div
                                onDragStart={e => dragStartHandler(e)}
                                onDragLeave={e => dragLeaveHandler(e)}
                                onDragOver={e => dragStartHandler(e)}
                                className="dropArea">
                                {
                                    preview
                                        ? <img src={preview} alt="preview" className='preview' />
                                        : <img src={dropIcon} alt="dropIcon" />
                                }
                            </div>
                    }
                    <div className="create__right_by">
                        <img src={iconAuthor} alt="iconAuthor" />
                    By
                    </div>
                    <ToolPanel />
                    <TextEditor />
                </div>

                <div className="create__left">
                    <div className="create__left_check">
                        Main item <Checkbox setIsCheckedCreate={setIsCheckedMain} />

                    </div>
                    <div className="create__left_check breaking">
                        <div className="create__left_check_top">Breaking news <Checkbox setIsCheckedCreate={setIsCheckedBreaking} /></div>
                        <div className="create__left_check_bot"><TextArea readOnly={!isCheckedBreaking} breaking={true} placeholder='Enter Cupturn' /></div>
                    </div>
                    <div className="create__left_check tabCreate">
                        Tabs
                        <div className="create__left_check_block">
                            {tabs.map((el: any, i: any) => (
                                el.has && <Tab tabs={tabs} key={i} tab={el.tab} />
                            ))}
                            <img src={addTab} alt="addTab" onClick={() => history({ pathname: '/admin/create?popup=tabs' })} />
                        </div>
                    </div>
                    <div className="create__left_buttons">
                        <div onClick={() => history({ pathname: '/admin' })} className="buttons_monitoring">Close</div>
                        <div className="buttons_create">Publish</div>
                    </div>
                </div>

            </div>
        </>
    )
}
