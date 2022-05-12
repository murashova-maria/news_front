import { TwitterTimelineEmbed } from 'react-twitter-embed';
import {FC, useEffect, useState} from "react";
import {useInterval} from "../../hooks/useInterval";
import styles from './Twitter.module.scss';
import {useHttp} from "../../hooks/useHttp";

const accountsLocal = [
    {
        id: 1,
        name: 'StandtoEndRape',
    },
    {
        id: 2,
        name: 'AdultRapeClinic',
    },
    {
        id: 3,
        name: 'womenforchange5',
    },
    {
        id: 4,
        name: 'MeTooMVMT',
    },
    {
        id: 5,
        name: 'ChildSoldiersIn',
    },
    {
        id: 6,
        name: 'Foundation_IL',
    },
]

type Props = {
    isMobile?: boolean;
}

type Twitters = {
    id: number;
    name: string;
}

export const Twitter: FC<Props> = ({isMobile = false}) => {
    const { request } = useHttp();

    const [activeProfile, setActiveProfile] = useState(0);
    const [accounts, setAccounts] = useState<Twitters[]>(accountsLocal || [])

    const getTwitters = async () => {
        try {
            const resp: Array<Twitters> | null = await request({
                path: "/twitter/",
                method: "GET",
            });
            if (resp) {
                setAccounts(resp);
            }
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        getTwitters();
    }, []);

    useInterval(() => {
        if (accounts.length - 1 !== activeProfile) setActiveProfile(prevState => prevState + 1)
        else setActiveProfile(0)
    }, 10000);

    return <>
        <div className={styles.TwitterContainer}>
            {accounts &&
                <>
                    <TwitterTimelineEmbed
                        key={activeProfile}
                        sourceType="profile"
                        screenName={accounts[activeProfile]?.name}
                        options={{height: isMobile ? 400 : 400}}
                        noFooter
                    />
                    <div className={styles.Line}/>
                </>
            }
        </div>
    </>
}