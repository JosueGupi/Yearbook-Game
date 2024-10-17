import React,{Fragment} from 'react'
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



export function LandingPage () {
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    }

    return (
        <Fragment>
        <div style={{display: 'flex',
                    'alignItems': 'center',
                    'justifyContent': 'center',
                    height: '100vh' /* Altura completa de la ventana */
                                }}>
        <center>
            <Typography variant='h1'component="h1" style={{color:"#e17624",'paddingBottom': '60px'}}>YEARBOOK GAME</Typography>
            <Typography variant='h6'component="h6" style={{color:"white"}}>Made by:</Typography>
            <Typography variant='h6'component="h6" style={{color:"white"}}>Josué Gutiérrez Piedra</Typography>
            <Typography variant='h6'component="h6" style={{color:"white"}}>Alejandro Solís Cordero</Typography>
            <br /><br />
            <Button size="large" variant="contained" endIcon={<ArrowForwardIcon/>} style={{'backgroundColor':"#e17624"}} onClick={goToLogin}>
            Start Game
            </Button>
        </center>
        </div>
        
        </Fragment>
        
    )
}