import { TwitterTimelineEmbed } from 'react-twitter-embed';
import {FC, useEffect, useState} from "react";
import {useInterval} from "../../hooks/useInterval";
import styles from './Twitter.module.scss';
import {useHttp} from "../../hooks/useHttp";
import {useWindowSize} from "../../hooks/useWindowSize";

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
];

type Props = {
    isMobile?: boolean;
}

type Twitters = {
    id: number;
    name: string;
}

const TwitterCounts = 3;
const TwitterCountsMobile = 1;
const TwitterChangeInterval = 10000;

const sliceAccounts = (accounts: Twitters[], start: number, counts: number) => {
    if (counts === 1) return [accounts[start]];
    if (start === accounts.length) return [accounts[0], accounts[1], accounts[2]];
    if (accounts.length - start === 1) return [accounts[start], accounts[0], accounts[1]];
    if (accounts.length - counts < start) return [...accounts.slice(start, start + counts), accounts[0]];
    return accounts.slice(start, start + counts);
};

export const Twitter: FC<Props> = ({isMobile = false}) => {
    const { request } = useHttp();

    const [start, setStart] = useState<number>(0);
    const [accounts, setAccounts] = useState<Twitters[]>([])
    const [accountsForShow, setAccountsForShow] = useState<Twitters[]>([])

    const { width } = useWindowSize();
    const countsAccounts = width && width < 768 ? TwitterCountsMobile : TwitterCounts;

    const getTwitters = async () => {
        try {
            const resp: Array<Twitters> | null = await request({
                path: "/twitter/",
                method: "GET",
            });
            if (resp) {
                setAccounts(resp);
                setAccountsForShow(sliceAccounts(resp, start, countsAccounts));
            }
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        getTwitters();
    }, []);

    useInterval(() => {
        if (accounts.length - 1 >= start) setStart(prevState => prevState + countsAccounts >= accounts.length ? 0 : prevState + countsAccounts)
        else setStart(0)
    }, TwitterChangeInterval);

    useEffect(() => {
        if (accounts.length) {
            setAccountsForShow(sliceAccounts(accounts, start, countsAccounts));
        }
    }, [start])

    return <div className={styles.TwitterWrapper}>
        <div className={styles.TwitterContainer}>
            {accountsForShow.length > 0 && accountsForShow.map(({name}) =>
                <div key={name}>
                    <TwitterTimelineEmbed
                        key={name}
                        sourceType="profile"
                        screenName={name}
                        options={{height: isMobile ? 400 : 400, width: 1200, align: 'center'}}
                        noFooter
                    />
                    {/*<div className={styles.Line}/>*/}
                </div>
                )
            }
        </div>
    </div>
}