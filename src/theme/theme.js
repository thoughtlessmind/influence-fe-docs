import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

console.log('green', green)

const theme = createMuiTheme({
  props:{
    MuiButton:{
      disableElevation: true,
    }
  },
  palette: {
    primary: {
      main: '#2c66c3',
    },
    secondary: {
      main: green[500],
    },
    warning:{
      main:'#ff9800'
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1:{
      fontSize: '2rem'
    },
    h2:{
      fontSize: '1.7rem'
    },
    h3:{
      fontSize:'1.5rem'
    },
    h4:{
      fontSize:'1.3rem'
    },
    h5:{
      fontSize:'1.2rem'
    },
    h6:{
      fontSize:'1rem'
    },
    body1:{
      fontSize:'1rem'
    },
    body2:{
      fontSize:'0.8rem'
    },
    caption:{
      fontSize:'0.8rem'
    },
    overline:{
      fontSize:'0.8rem'
    }
  },
  overrides:{
    MuiButton: {
      root: {
          borderRadius: '4px',
          textTransform: 'capitalize',
          height: '32px',
          fontSize: '12px',
          fontWeight: '400',
          padding: '15px'
      },
      contained: {
          background: 'linear-gradient(180deg, #264966 0, #12344d 100%)',
          borderColor: 'transparent',
          border: '1px solid #12344d',
          backgroundColor: '#12344d',
          color: '#fff',
          '&:hover':{
            background: 'transparent',
              // background:'green',
              backgroundColor: '#12344d'
          }
      },
      outlined: {
          background: 'linear-gradient(180deg, #fff 0, #f5f7f9 100%)',
          color: 'rgb(51,51,51)',
          border:'1px solid #cfd7df',
          '&:hover':{
            background: 'transparent',  
            backgroundColor: '#f5f7f9',

              
          }
      }
  },
  }
});




export default theme