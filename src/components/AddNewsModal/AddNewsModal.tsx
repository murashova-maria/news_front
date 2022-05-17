import {Modal} from "../shared/Modal/Modal";
import React, {FC, } from "react";
import { object, string, mixed} from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFormContext, useController } from "react-hook-form";

import { FormProvider, useForm } from 'react-hook-form';
import {FormInputContainer} from "../shared/Forms/FormInputContainer/FormInputContainer";

import {toast} from "react-toastify";
import {useHttp} from "../../hooks/useHttp";
import styles from './AddNewsModal.module.scss';
import {styled} from "@mui/material/styles";
import {TextField} from "@mui/material";
import { FormFileContainer } from "../shared/Forms/FormInputContainer/FormFileInput";
type Props = {
    onClose: VoidFunction;
    isOpened: boolean
};

export const FORM_VALIDATION_SCHEMA = object({
    title: string().required(),
    media: mixed(),
    link: string().required(),
    text: string().required(),
});

export const AddNewsModal: FC<Props> = ({onClose, isOpened}) => {
    const methods = useForm<any>({
        defaultValues: {
            title: '',
            media: '',
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
        const formValues:any = getValues()
        //Embed image file
        const formData = new FormData();
        formData.append('image', formValues.media);
        formValues.media = formData
        console.log(formValues)
        try {
            const data = await request({
                path: `/offer_news/`,
                method: "POST",
                body: formValues,
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
            <Modal title="Share a story"
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
                    <FormFileContainer name="media"/>
                    <FormInputContainer name="link" label="Url"/>
                    <FormInputContainer name="text" label="Text" multiline rows={5}/>
                </div>

            </Modal>
        </FormProvider>
    );
}