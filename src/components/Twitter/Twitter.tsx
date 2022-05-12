import { TwitterTimelineEmbed } from 'react-twitter-embed';
import {FC, useState} from "react";
import {useInterval} from "../../hooks/useInterval";
import styles from './Twitter.module.scss';
const accounts = [
'StandtoEndRape',
'AdultRapeClinic',
'womenforchange5',
'MeTooMVMT',
'ChildSoldiersIn',
'Foundation_IL',
]

type Props = {
    isMobile?: boolean;
}

export const Twitter: FC<Props> = ({isMobile = false}) => {
    const [activeProfile, setActiveProfile] = useState(0);

    useInterval(() => {
        if (accounts.length - 1 !== activeProfile) setActiveProfile(prevState => prevState + 1)
        else setActiveProfile(0)
    }, 10000);

    return <>
        <div className={styles.TwitterContainer}>
            <TwitterTimelineEmbed
                key={activeProfile}
                sourceType="profile"
                screenName={accounts[activeProfile]}
                options={{height: isMobile ? 400 : 400}}
                noFooter
            />
            <div className={styles.Line}/>
        </div>
    </>
}