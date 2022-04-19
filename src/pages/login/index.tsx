import React, { useEffect } from "react";
import { useHttp } from "../../hooks/useHttp";

export const Login = () => {
  const { request } = useHttp();
  useEffect(() => {
    const fetchData = async () => {
      const resp = await request({
        path: "/signin/",
        method: "POST",
        body: {
          username: "News_admin ",
          password: "UXWY4GikDkCG",
        },
      });
    };
    fetchData();
  }, []);
  return (
    <div>
      <input type="text" />
    </div>
  );
};
