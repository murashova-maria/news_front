import React from "react";
import useQuery from "../utils/hooks/useQuery";
import { ModalWrapper } from "./modal/ModalWrapper";

import done from '../assets/img/done.svg'
import fals from '../assets/img/false.svg'
import pending from '../assets/img/pending.svg'
import { useAppDispatch, useAppSelector } from "../store";
import { Tab } from "./Tab";


export const PopupHandler: React.FC = () => {
    const query = useQuery();

    const dispatch = useAppDispatch()
    const tabs = useAppSelector(state => state.dataADmin.tabs)

    const links = [
        {
            link: 'https://www.reuters.com/world/africa/',
            status: 'done'
        },
        {
            link: 'https://www.reuters.com/world/africa/',
            status: 'done'
        },
        {
            link: 'https://www.africanews.com/',
            status: 'false'
        },
        {
            link: 'https://www.aljazeera.com/africa/',
            status: 'pending'
        },
        {
            link: 'https://www.reuters.com/world/africa/',
            status: 'done'
        },
    ]

    return (
        <>
            {/*<>global modal</> */}
            {(query.get("popup") === "monitoring" && (
                <ModalWrapper>
                    <div className="modal-wrapper__title">Monitoring sources</div>
                    <div className="modal-wrapper__content">
                        {
                            links.map(el => (
                                <div className="modal-wrapper__content_item">
                                    <div className="modal-wrapper__content_item_link">{el.link}</div>
                                    <div className="modal-wrapper__content_item_icon">
                                        {el.status === 'done' && <img src={done} alt='done' />}
                                        {el.status === 'false' && <img src={fals} alt='fals' />}
                                        {el.status === 'pending' && <img src={pending} alt='pending' />}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="modal-wrapper__blockBtn">
                        <div className="modal-wrapper__blockBtn_btn">
                            Add new source
                    </div>
                    </div>
                </ModalWrapper>
            ))}
            {(query.get("popup") === "tabs" && (
                <ModalWrapper>
                    <div className="modal-wrapper__title">Tabs</div>
                    <div className="modal-wrapper__content">
                        <div className="create__left_check_block">
                            {tabs.map((el: any, i: any) => (
                                !el.has && <Tab key={i} tab={el.tab} />
                            ))}
                        </div>
                    </div>
                </ModalWrapper>
            ))}
        </>
    );
};