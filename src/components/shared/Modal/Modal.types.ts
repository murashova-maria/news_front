import { ReactNode } from 'react';

type ConfirmButton = {
  confirmButtonName?: string;
  handleConfirm?: VoidFunction;
  confirmButtonIsDisabled?: boolean;
  confirmButtonIsHide?: boolean;
};

export type Props = {
  isOpened: boolean;
  title: string;
  onClose: VoidFunction;
  confirmButton?: ConfirmButton;
  isLoading?: boolean;
  children: ReactNode;
  fullWidth?: boolean;
};
