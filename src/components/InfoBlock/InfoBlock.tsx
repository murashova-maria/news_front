import React, { useEffect, useState } from 'react'
import redp from '../../assets/img/redPlanet.png'
import bluep from '../../assets/img/bluePlanet.png'
import greenp from '../../assets/img/greenplanet.png'
import orangep from '../../assets/img/orangePlanet.png'
import violetp from '../../assets/img/violetPlanet.png'
import brownp from '../../assets/img/brownPlanet.png'
import { InfoBlockCard } from '../Cards/InfoBlockCard'
import { useAppSelector } from '../../store'

export const InfoBlock = ({ tag, items, withOutTitle }: any) => {

    const [colorPlanet, setColorPlanet] = useState<string>(tag)
    const actualTag = tag

    useEffect(() => {
        switch (actualTag) {
            case 'New':
                setColorPlanet(redp)
                break
            case 'Sport':
                setColorPlanet(bluep)
                break
            case 'Investigations':
                setColorPlanet(greenp)
                break
            case 'Weather':
                setColorPlanet(orangep)
                break
            case 'Business & Economy':
                setColorPlanet(violetp)
                break
            case 'Technology & Science':
                setColorPlanet(brownp)
                break
        }
    }, [actualTag])

    return (
        <div className='infoBlock'>
            {!withOutTitle && <div className="infoBlock__title">{tag}</div>}
            <div className="infoBlock__items">
                <img className='colorPlanet' src={colorPlanet} alt="colorPlanet" />
                {items.map((el: any) => <InfoBlockCard key={el.id} hasNewsId={false} item={el} />)}
            </div>
            {!withOutTitle && <div className='btnNews'>
                SHOW MORE
            </div>}
        </div>
    )
}
