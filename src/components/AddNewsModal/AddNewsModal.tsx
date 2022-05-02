import {Modal} from "../shared/Modal/Modal";
import React, {FC, } from "react";
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormProvider, useForm } from 'react-hook-form';
import {FormInputContainer} from "../shared/Forms/FormInputContainer/FormInputContainer";
import {toast} from "react-toastify";
import {useHttp} from "../../hooks/useHttp";
import styles from './AddNewsModal.module.scss';
type Props = {
    onClose: VoidFunction;
    isOpened: boolean
};

export const FORM_VALIDATION_SCHEMA = object({
    title: string().required(),
    link: string().required(),
    text: string().required(),
});

export const AddNewsModal: FC<Props> = ({onClose, isOpened}) => {
    const methods = useForm<any>({
        defaultValues: {
            title: '',
            link: '',
            text: '',
        },
        resolver: yupResolver(FORM_VALIDATION_SCHEMA),
    });
    const {
        handleSubmit,
        getValues,
    } = methods;

    const {
        request,
        loading,
    } = useHttp();

    const onSubmitHandler = async () => {
        try {
            const data = await request({
                path: `/offer_news/`,
                method: "POST",
                body: getValues(),
            });

            if (data?.error) {
                toast.error(data.error);
            } else {
                 toast.success("Success!");
                onClose();
            }
        } catch (e: any) {
            console.log('e', e)
            toast.error("Error!");
        }
    };

    return (
        <FormProvider {...methods}>
            <Modal title="ADD NEWS"
                   isOpened={isOpened}
                   onClose={onClose}
                   isLoading={loading}
                   confirmButton={{
                       handleConfirm: handleSubmit(onSubmitHandler),
                       confirmButtonName: "SUBMIT",
                   }
           }>
                <div className={styles.Container}>
                    <FormInputContainer name="title" label="Title"/>
                    <FormInputContainer name="link" label="Url"/>
                    <FormInputContainer name="text" label="Text" multiline rows={5}/>
                </div>

            </Modal>
        </FormProvider>
    );
}