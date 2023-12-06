import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { TextField } from "@mui/material";

export default function Login({ setPasswordAccepted }) {
  let [passwordInput, setPasswordInput] = React.useState();
  let [invalid, setInvalid] = React.useState(false);

  let handleChange = (e) => {
    setPasswordInput(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === "123") {
      setPasswordAccepted(true);
      setInvalid(false);
    } else {
      setPasswordAccepted(false);
      setInvalid(true);
    }
  };

  return (
    <div>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container align="center" maxWidth="sm">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <TextField
                error={invalid}
                helperText={invalid ? "Incorrect password." : undefined}
                onChange={handleChange}
                id="outlined-password-input"
                label="Password"
                type="password"
              />
            </Box>
          </Container>
        </Box>
      </main>
    </div>
  );
}
