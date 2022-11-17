import { useState } from 'react'
import { Input } from '../Input/Input'
import s from './TwitterWidgetsModal.module.scss'


const TwitterWidgetsModal = () => {

    const [firstLink, setFirstLink] = useState<string>('')
    const [secondLink, setSecondLink] = useState<string>('')
    const [thirdLink, setThirdLink] = useState<string>('')

    return <div className={s.Container}>
        <h2 className={s.Title}>Twitter accounts</h2>
        <Input placeholder="First widget URL" onChange={(e: any) => setFirstLink(e.target.value)} value={firstLink} />
        <Input placeholder="Second widget URL" onChange={(e: any) => setSecondLink(e.target.value)} value={secondLink} />
        <Input placeholder="Third widget URL" onChange={(e: any) => setThirdLink(e.target.value)} value={thirdLink} />
    </div>
}

export default TwitterWidgetsModal