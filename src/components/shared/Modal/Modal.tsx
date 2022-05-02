import {
    Dialog,
    DialogActions,
    DialogContent,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { FC } from 'react';
import { ReactComponent as CloseIcon } from '../../../assets/img/close.svg';

import styles from './Modal.module.scss'

import { Props } from './Modal.types';
import { Button } from "../Button/Button";

const StyledDialogActions = styled(DialogActions)(() => ({
    padding: '0',
    justifyContent: 'center'
}));

const StyledDialog = styled(Dialog)(() => ({
    '.MuiPaper-root' : {
        padding: '20px 40px 40px 40px',
        borderRadius: '20px',
    }
}));

const StyledDialogContent = styled(DialogContent)(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    minWidth: '350px',
    fontSize: '15px',
}));

export const Modal: FC<Props> = ({
                                     isOpened = false,
                                     title,
                                     onClose,
                                     confirmButton,
                                     isLoading,
                                     children,
                                 }) => {
    const disabled = confirmButton?.confirmButtonIsDisabled || isLoading;

    const onCloseHandler = () => {
        if (disabled) {
            return;
        }
        onClose();
    };
    return (
        <StyledDialog
            open={isOpened}
            onClose={onCloseHandler}
            disableEscapeKeyDown
            keepMounted
        >
            <div className={styles.Container}>
                <div className={styles.Header}>
                    <div className={styles.Title}>{title}</div>
                    <div className={styles.CloseButton} onClick={onClose}><CloseIcon/></div>
                </div>
                <StyledDialogContent>
                    {isLoading ? '...Loading' : children}
                </StyledDialogContent>
                <StyledDialogActions>
                    {confirmButton?.handleConfirm && (
                        <Button onClick={confirmButton.handleConfirm} disabled={disabled}>
                            {confirmButton?.confirmButtonName || 'Confirm'}
                        </Button>
                    )}
                </StyledDialogActions>
            </div>
        </StyledDialog>
    );
};
