import React, {FC, useEffect, useState} from "react";
import styles from './TwitterAccountsModal.module.scss'
import {useHttp} from "../../hooks/useHttp";
import {Button, Color} from "../shared/Button/Button";
import {Input} from "../Input/Input";
import {toast} from "react-toastify";

type Twitters = {
    id: number;
    name: string;
}

export const TwitterAccountsModal:FC = () => {
    const { loading, request } = useHttp();
    const [twitters, setTwitters] = useState<Twitters[]>([]);
    const [accountName, setAccountName] = useState<string>('');


    const getTwitters = async () => {
        try {
            const resp: Array<Twitters> | null = await request({
                path: "/twitter/",
                method: "GET",
            });
            if (resp) {
                setTwitters(resp);
            }
        } catch (e) {
            console.log(e);
            toast.error('Error');
        }
    };
    useEffect(() => {
        getTwitters();
    }, []);

    const onDelete = async (id: number) => {
      try {
          const resp = await request({
              path: `/twitter/${id}`,
              method: "DELETE",
          });
          if (resp?.error) {
              toast.error(resp.error);
          } else {
              toast.success("Success!");
              getTwitters();
          }
      } catch (e) {
          console.log(e);
          toast.error('Error');
      }
    };

    const onAdd = async () => {
      try {
          if (!accountName) {
              toast.error('Please input a Name');
              return;
          }
          const resp = await request({
              path: `/twitter/`,
              method: "POST",
              body: {
                  name: accountName,
              }
          });
          if (resp.error) {
              toast.error(resp.error);
          } else {
              toast.success("Success!");
              setAccountName('');
              getTwitters();
          }
      } catch (e) {
          console.log(e);
          toast.error('Error');
      }
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccountName(event.target.value)
    }

    return <div className={styles.Container}>
        {loading && <h2 className={styles.Loader}>
            Loading...
        </h2>}
        {!loading && <>
        <div className={styles.Title}>Twitter accounts</div>
            <div className={styles.Content}>
            {twitters.map((el) => (
                <div className={styles.Content_item}>
                <div>{el.name}</div>
                <Button onClick={() => onDelete(el.id)}>Delete</Button>
                </div>

            ))}
            </div>
            <div className={styles.Action}>
                <Input placeholder="Account name" onChange={onChange} value={accountName} />
                <Button color={Color.Secondary} onClick={onAdd}>Add account</Button>
            </div>

        </>}

    </div>
}