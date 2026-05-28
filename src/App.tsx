
import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import { theme } from './components/shared/theme';
import Portfolio from './components/portfolio';

function App() {

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div>
          <Portfolio/>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default App
