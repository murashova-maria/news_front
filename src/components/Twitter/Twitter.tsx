import { TwitterTimelineEmbed } from 'react-twitter-embed';

const accounts = [
'StandtoEndRape',
'AdultRapeClinic',
'womenforchange5',
'MeTooMVMT',
'ChildSoldiersIn',
'Foundation_IL',
]

export const Twitter = () => {
    return <>
        {accounts.map((profile) => <TwitterTimelineEmbed
            sourceType="profile"
            screenName={profile}
            options={{height: 400}}
        />)}
    </>

}