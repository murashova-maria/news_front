import { Modal } from "../shared/Modal/Modal";
import React, { FC } from "react";
import { object, string, mixed } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormProvider, useForm } from "react-hook-form";
import { FormInputContainer } from "../shared/Forms/FormInputContainer/FormInputContainer";
import { FormFileContainer } from "../shared/Forms/FormInputContainer/FormFileContainer";

import { toast } from "react-toastify";
import { useHttp } from "../../hooks/useHttp";
import styles from "./AddNewsModal.module.scss";
type Props = {
  onClose: VoidFunction;
  isOpened: boolean;
};

export const FORM_VALIDATION_SCHEMA = object({
  title: string().required(),
  media: mixed(),
  link: string(),
  text: string().required(),
});

export const AddNewsModal: FC<Props> = ({ onClose, isOpened }) => {
  const methods = useForm<any>({
    defaultValues: {
      title: "",
      link: "",
      text: "",
    },
    resolver: yupResolver(FORM_VALIDATION_SCHEMA),
  });
  const { handleSubmit, getValues } = methods;

  const { request, loading } = useHttp();

  const onSubmitHandler = async () => {
    const requestValues: any = getValues()
    let requestData = new FormData()
    requestData.append('title', requestValues.title)
    requestData.append('text', requestValues.text)
    requestData.append('link', requestValues.link)
    requestData.append('media', requestValues.media)
    try {
      const data = await request({
        path: `/offer_news/`,
        method: "POST",
        body: requestData,
      });

      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success("Success!");
        onClose();
      }
    } catch (e: any) {
      console.log("e", e);
      toast.error("Error!");
    }
  };

  return (
    <FormProvider {...methods}>
      <Modal
        title="Share a story"
        isOpened={isOpened}
        onClose={onClose}
        isLoading={loading}
        confirmButton={{
          handleConfirm: handleSubmit(onSubmitHandler),
          confirmButtonName: "SUBMIT",
          confirmButtonIsDisabled: loading,
          confirmButtonIsHide: loading,
        }}
      >
        <div className={styles.Container}>
          <FormInputContainer name="title" label="Title" />
          <FormFileContainer name="media" label="Upload media" />
          <FormInputContainer name="link" label="Url" />
          <FormInputContainer name="text" label="Text" multiline rows={5} />
        </div>
      </Modal>
    </FormProvider>
  );
};
