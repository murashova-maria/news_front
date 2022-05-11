import {FC, useEffect} from "react";

type Props = {
    slot: string;
};

var adsbygoogle;
export const Adsense: FC<Props> = ({slot}) => {
    const clientId = '3527692473995145';

    useEffect(() => {
        // @ts-ignore
        adsbygoogle = (window.adsbygoogle || []).push({});
    }, []);

    return <div style={{width: "100%"}}>
        <script async
                src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${clientId}`}
                crossOrigin="anonymous"/>
        <ins className="adsbygoogle"
             style={{display: "block"}}
             data-ad-format="autorelaxed"
             data-ad-client={`ca-pub-${clientId}`}
             data-ad-slot={slot}
        />
    </div>
}