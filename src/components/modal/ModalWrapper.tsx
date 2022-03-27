import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';



export const ModalWrapper: React.FC = ({children}) => {

    const navigation = useNavigate();
    const path: string = useLocation().pathname;
    const ref = React.createRef<HTMLDivElement>();

    

    useEffect(() => {
        document.querySelector('body')!.classList.toggle('lock');

        return () => {
            document.querySelector('body')!.classList.toggle('lock');
        };
    }, []);

    const close = (e: React.MouseEvent<HTMLElement>) => {
        if (e.target === ref.current) {
            navigation(path);
        }
    };


    return (
        <div ref={ref} onClick={close} className={'modal-body'}>
            <div className={`modal-wrapper`}>
                {children}
            </div>
        </div>
    );
};