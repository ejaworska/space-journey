import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#f2f2f2',
      surface: '#f2f2f2',
      surface1dp: 'rgba(255,255,255, 0.1)',
    },
    primary: {
      main: '#fff'    
    },
    secondary: {
      main: '#1F2124'
    }, 
  },
});

console.log(theme)

export default theme;