import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import Header from './structure/Header';
import { CssBaseline } from '@mui/material';
import Main from './structure/Main';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
       <Header />
       <Main /> 
    </ThemeProvider>
  );
}

export default App;
