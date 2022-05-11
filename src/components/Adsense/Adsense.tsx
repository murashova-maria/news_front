import {FC} from "react";

type Props = {
    slot: string;
};

export const Adsense: FC<Props> = ({slot}) => {
    const clientId = '3527692473995145';
    return <>
        <script async
                src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${clientId}`}
                crossOrigin="anonymous"/>
        <ins className="adsbygoogle"
             style={{display: "block"}}
             data-ad-format="autorelaxed"
             data-ad-client={`ca-pub-${clientId}`}
             data-ad-slot={slot}
        />
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
    </>
}