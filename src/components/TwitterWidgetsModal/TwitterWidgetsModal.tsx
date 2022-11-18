import { useCallback, useEffect, useState } from "react";
import { useHttp } from "../../hooks/useHttp";
import { Input } from "../Input/Input";
import { Button } from "../shared/Button/Button";
import s from "./TwitterWidgetsModal.module.scss";

const TwitterWidgetsModal = () => {
  const { loading, request } = useHttp();
  const [links, setLinks] = useState<{ [key: string]: string }>({});

  const getTweetIds = useCallback(async () => {
    try {
      const resp = await request({
        path: "/tw_post_links/",
        method: "GET",
      });
      if (resp) {
        const obj: any = {};
        resp.forEach((link: any) => {
          obj[link.id] = link.link;
        });
        setLinks(obj);
      }
    } catch (e) {
      console.log(e);
    }
  }, [request])

  useEffect(() => {
    getTweetIds();
  }, []);


  const handleSave = useCallback(async (val: string, id: string) => {
    try {
        const resp = await request({
          path: `/tw_post_links/${id}/`,
          method: "POST",
          body: {link: val, active: 'True'}
        });
        if (resp) {

        }
      } catch (e) {
        console.log(e);
      }
}, [request])

  return (
    <div className={s.Container}>
      <h2 className={s.Title}>Twitter accounts</h2>
      {!loading && (
        <>
          {Object.keys(links).map((linkId) => {
            return (
              <div className={s.InputBox} key={linkId}>
                <Input
                  placeholder="Tweet ID"
                  onChange={(e: any) =>
                    setLinks((p) => ({ ...p, [linkId]: e.target.value }))
                  }
                  value={links[linkId]}
                />
                <Button onClick={() => handleSave(links[linkId], linkId)}>Save</Button>
              </div>
            );
          })}
        </>
      )}
      {loading && <h2 className={s.Loader}>Loading...</h2>}
    </div>
  );
};

export default TwitterWidgetsModal;
