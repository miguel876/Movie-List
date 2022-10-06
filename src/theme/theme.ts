import { createTheme } from "@mui/material";
import { palette } from "./palette";

const theme = createTheme({
    palette, 
    typography: {
      fontFamily: 'Roboto',
      fontSize: 16
    },
    spacing: 1,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            padding: 0,
            margin: 0,
            height: '100%'
          }
        }
      }
    }
  });

export default theme