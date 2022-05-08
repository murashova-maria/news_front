import { TwitterTimelineEmbed } from 'react-twitter-embed';
import {FC} from "react";

const accounts = [
'StandtoEndRape',
'AdultRapeClinic',
// 'womenforchange5',
// 'MeTooMVMT',
// 'ChildSoldiersIn',
// 'Foundation_IL',
]

type Props = {
    isMobile?: boolean;
}

export const Twitter: FC<Props> = ({isMobile = false}) => {
    return <>
        {accounts.map((profile) => <TwitterTimelineEmbed
            key={profile}
            sourceType="profile"
            screenName={profile}
            options={{height: isMobile ? 400 : 400}}
            noFooter
        />)}
    </>

}