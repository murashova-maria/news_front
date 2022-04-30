import React, {FC, useState} from "react";
import DefaultImg from "../../../assets/img/placeholder.png";

type Props = {
    src?: string;
    alt?: string;
    className?: string;
}

export const Image: FC<Props> = ({src, alt = '', className = ''}) => {
    const [imgSrc, setImgSrc] = useState<string | undefined>(src)
    const onError = () => setImgSrc(DefaultImg)
    return <img
            src={imgSrc ? imgSrc : DefaultImg}
            alt={alt}
            onError={onError}
            className={className}
        />
}