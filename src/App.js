import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { useState } from "react";
import Album from "./components/Album";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  let [passwordAccepted, setPasswordAccepted] = useState();

  const defaultTheme = createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#f5eccd",
      },
      primary: {
        main: "#cd8987",
      },
      secondary: {
        main: "#8093f1",
      },
      info: {
        main: "#cd8987",
      },
      text: {
        primary: "rgba(88,54,75,0.87)",
        secondary: "rgba(88,54,75,0.87)",
      },
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Header />
      {passwordAccepted ? (
        <>
          <Album />
          <Footer />
        </>
      ) : (
        <Login setPasswordAccepted={setPasswordAccepted} />
      )}
    </ThemeProvider>
  );
}

export default App;
