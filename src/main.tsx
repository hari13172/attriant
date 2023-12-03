import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// Define your custom primary color
const theme = createTheme({
  palette: {
    primary: {
      main: "#212121", // Replace with your desired primary color
    },
    secondary: {
      main: "#b069f0",
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
    
  </React.StrictMode>,
)
