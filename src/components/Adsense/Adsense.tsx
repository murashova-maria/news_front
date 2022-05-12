import {FC, useEffect} from "react";

type Props = {
    slot: string;
    width?: string;
    height?: string;
};

var adsbygoogle;
export const Adsense: FC<Props> = ({slot = false, width = '100%', height = '100%'}) => {
    const clientId = '3527692473995145';

    useEffect(() => {
        setTimeout(() => {
                // @ts-ignore
                adsbygoogle = (window.adsbygoogle || []).push({});
        }, 2000)
    }, []);

    const styles = {display: "inline-block", width: width, height: height}

    return <>
        <script async
               src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${clientId}`}
               crossOrigin="anonymous"/>
        <ins className="adsbygoogle"
             style={styles}
             data-ad-client={`ca-pub-${clientId}`}
             data-ad-slot={slot}
        />
    </>
}