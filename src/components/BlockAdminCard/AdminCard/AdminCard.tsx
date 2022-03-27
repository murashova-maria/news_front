import React from 'react'
import { IPropsAdmin } from '../../../types'

import decline from '../../../assets/img/decline.svg'
import delet from '../../../assets/img/delete.svg'
import edit from '../../../assets/img/edit.svg'
import publish from '../../../assets/img/publish.svg'
import restore from '../../../assets/img/restore.svg'
import unpublish from '../../../assets/img/unpublish.svg'


export const AdminCard: React.FC<IPropsAdmin> = React.memo(({ item }) => {
    return (
        <div className='adminCard'>
            <div className="adminCard__container">
                <div className="adminCard__top">
                    <img src={item.img} alt="item.img" />
                </div>
                <div className="adminCard__bot">
                    <div className="adminCard__bot_title">{item.title}</div>
                    <div className="adminCard__bot_authorDate">
                        <div className="adminCard__bot_authorDate_block">{item.author}</div>
                        <div className="adminCard__bot_authorDate_block">{item.date}</div>
                    </div>
                    <div className="adminCard__bot_buttons">
                        {item.status === 'newItem' &&
                            <>
                                <div className='btnAdmin red'>Decline <img src={decline} alt="decline"/></div>
                                <div className='btnAdmin yellow'>Edit <img src={edit} alt="edit"/></div>
                                <div className='btnAdmin green'>Publish <img src={publish} alt="publish"/></div>
                            </>
                        }
                        {item.status === 'declinedNews' &&
                            <>
                                <div className='btnAdmin red'>Delete <img src={delet} alt="delete"/></div>
                                <div className='btnAdmin yellow'>Restore <img src={restore} alt="restore"/></div>
                            </>
                        }
                        {item.status === 'publishedNews' &&
                            <>
                                <div className='btnAdmin red'>Unpublish <img src={unpublish} alt="unpublish"/></div>
                                <div className='btnAdmin yellow'>Edit <img src={edit} alt="edit"/></div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
})
