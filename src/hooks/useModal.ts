import { useCallback, useState } from 'react';

export const useModal = ({ defaultOpen = false } = {}) => {
  const [isOpened, setIsOpened] = useState(defaultOpen);

  const onClose = useCallback(() => {
    setIsOpened(false);
  }, []);

  const onOpen = useCallback(() => {
    setIsOpened(true);
  }, []);

  const onToggle = useCallback(() => {
    setIsOpened((prevState) => !prevState);
  }, []);

  return {
    isOpened,
    onOpen,
    onClose,
    onToggle,
  };
};
