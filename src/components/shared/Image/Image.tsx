import React, {FC, useEffect, useState} from "react";
import DefaultImg from "../../../assets/img/placeholderRed.png";

type Props = {
    src?: string;
    alt?: string;
    className?: string;
}

export const Image: FC<Props> = ({src, alt = '', className = ''}) => {
    const [imgSrc, setImgSrc] = useState<string | undefined>(src)

    const onError = () => setImgSrc(DefaultImg);

    useEffect(() => {
        setImgSrc(undefined)
        setTimeout(() => setImgSrc(src), 0)
    }, [src])

    return <img
            src={imgSrc ? imgSrc : DefaultImg}
            alt={alt}
            onError={onError}
            className={className}
            style={{background: `url(${DefaultImg}) center no-repeat`}}
        />
}