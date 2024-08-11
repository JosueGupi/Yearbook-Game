import React,{Fragment} from 'react'
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



export function LoginPage () {
  
 
  return (
    <Fragment>
      <div style={{display: 'flex',
                  'align-items': 'center',
                  'justify-content': 'center',
                  height: '100vh' /* Altura completa de la ventana */
                             }}>
      <center>
        <Typography variant='h1'component="h1" style={{color:"salmon",'padding-bottom': '60px'}}>YEARBOOK GAME</Typography>
        <Typography variant='h6'component="h6" style={{color:"white"}}>Made by:</Typography>
        <Typography variant='h6'component="h6" style={{color:"white"}}>Josué Gutiérrez Piedra</Typography>
        <Typography variant='h6'component="h6" style={{color:"white"}}>Alejandro Solís Cordero</Typography>
        <br /><br />
        <Button size="large" variant="contained" endIcon={<ArrowForwardIcon/>} style={{'background-color':"salmon"}}>
          Start Game
        </Button>
      </center>
      </div>
      
    </Fragment>
    
  )
}