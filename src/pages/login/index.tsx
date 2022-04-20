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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get("login");
    const password = data.get("password");
    if (username && password) {
      (async function () {
        const resp: { token: string; non_field_errors?: [string] } | null =
          await request({
            path: "/signin/",
            method: "POST",
            body: {
              username: username.toString(),
              password: password.toString(),
            },
          });
        if (resp?.non_field_errors) toast.error(resp.non_field_errors[0]);
        if (resp?.token) {
          setLogin(true);
          sessionStorage.setItem("token", resp.token);
          sessionStorage.setItem("login", "true");
          history({ pathname: ADMIN_ROUTE });
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
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          {/*<LockOutlinedIcon />*/}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="login"
                label="Login"
                name="login"
                autoComplete="login"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
