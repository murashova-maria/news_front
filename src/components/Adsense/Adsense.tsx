import {FC, useEffect} from "react";

type Props = {
    slot: string;
    width?: string;
    height?: string;
};

const clientId = '3527692473995145';
var adsbygoogle;

export const Adsense: FC<Props> = ({slot = false, width = '100%', height = '100%'}) => {
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
             data-matched-content-ui-type="image_stacked"
        />
    </>
}

export const AdsenseVertical: FC<Props> = ({slot}) => {
    useEffect(() => {
        setTimeout(() => {
            // @ts-ignore
            adsbygoogle = (window.adsbygoogle || []).push({});
        }, 2000)
    }, []);

    const styles = {display: "block"}

    return <>
        <script async
                src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${clientId}`}
                crossOrigin="anonymous"/>
        <ins className="adsbygoogle"
             style={styles}
             data-ad-client={`ca-pub-${clientId}`}
             data-ad-slot={slot}
             data-matched-content-rows-num="25"
             data-matched-content-columns-num="1"
             data-matched-content-ui-type="image_stacked"
        />
    </>
}