import React from 'react'
import { AdminCard } from './AdminCard/AdminCard'

export const BlockAdminCard = ({items} : any) => {
    return (
        <div className='blockAdminCard'>
            {items.map((el : any) => (
                <AdminCard item={el} />
            ))}
        </div>
    )
}
