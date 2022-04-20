import React, { useEffect, useState } from "react";
import { useHttp } from "../../hooks/useHttp";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { ADMIN_ROUTE } from "../../constants/paths";
import { useGlobalState } from "../../store";

export const SignIn = () => {
  const { request } = useHttp();
  const history = useNavigate();
  const [, setLogin] = useGlobalState("isLogin");

  const [fetchData, setData] = useState({
    login: '',
    password: ''
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (fetchData.login && fetchData.password) {
      (async function () {
        const resp: { token: string; non_field_errors?: [string] } | null =
          await request({
            path: "/signin/",
            method: "POST",
            body: {
              username: fetchData.login,
              password: fetchData.password,
            },
          });
        if (resp?.non_field_errors) toast.error(resp.non_field_errors[0]);
        if (resp?.token) {
          setLogin(true);
          sessionStorage.setItem("token", resp.token);
          sessionStorage.setItem("login", "true");
          history({ pathname: ADMIN_ROUTE });
          window.location.reload();
        }
      })();
    }
  };

  return (
    <Container className="single-in" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 className='single-in__title'>
          Sign in
        </h2>
        <Box className='single-in__box' component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label className='single-in__label'>Log in</label>
              <input
                  value={fetchData.login}
                  onChange={(event) => setData((prev) => ({...prev, login: event.target.value }))}
                  placeholder='login'
                  className='single-in__input'
                  type="text" />
            </Grid>
            <Grid item xs={12}>
              <label className='single-in__label'>Password</label>
              <input
                  value={fetchData.password}
                  onChange={(event) => setData((prev) => ({...prev, password: event.target.value }))}
                  placeholder='password'
                  className='single-in__input'
                  type="text" />
            </Grid>
          </Grid>
          <button className={`single-in__submit ${!fetchData.login || !fetchData.password ? 'disabled' : ''}`}
                  disabled={!fetchData.login || !fetchData.password} type="submit">
            Sign Up
          </button>
        </Box>
      </Box>
    </Container>
  );
};
