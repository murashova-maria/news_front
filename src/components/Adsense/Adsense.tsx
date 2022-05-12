import {FC, useEffect} from "react";

type Props = {
    slot: string;
    isHorisontal?: boolean;
    width?: string;
    height?: string;
};

var adsbygoogle;
export const Adsense: FC<Props> = ({slot, isHorisontal = false, width = '100%', height = '100%'}) => {
    const clientId = '3527692473995145';

    useEffect(() => {
        setTimeout(() => {
                // @ts-ignore
                adsbygoogle = (window.adsbygoogle || []).push({});
        }, 2000)
    }, []);

    const styles = {display: "inline-block", width: width, height: height}

    return <div style={{width: "100%", height: "100%"}}>
        <script async
                               src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${clientId}`}
                               crossOrigin="anonymous"/>
        <ins className="adsbygoogle"
             style={styles}
             data-ad-client={`ca-pub-${clientId}`}
             data-ad-slot={slot}
             // data-matched-content-rows-num={isHorisontal ? "1, 4" : "8, 8"}
             // data-matched-content-columns-num={isHorisontal ? "8, 1" : "1, 1"}
             // data-matched-content-ui-type="image_sidebyside, image_card_sidebyside"
        />
    </div>
}