import { FC, MouseEvent } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

export enum Size {
    Default = 'default',
}

export enum Type {
    Button = 'button',
    Submit = 'submit',
}

export enum Color {
    Primary = 'primary',
    Secondary = 'secondary',
}

interface Props {
    type?: Type;
    size?: Size;
    disabled?: boolean;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    color?: Color;
    withoutBorder?: boolean;
    className?: string;
}

export const Button: FC<Props> = ({
    size = Size.Default,
    type = Type.Button,
    color = Color.Primary,
    disabled,
    onClick,
    withoutBorder,
                                      className,
    children,
}) => {
    return (
        <button
            type={type}
            className={cn(
                styles.btn,
                styles[size],
                styles[color],
                withoutBorder ? styles.withoutBorder : '',
                className ? className : '',
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};