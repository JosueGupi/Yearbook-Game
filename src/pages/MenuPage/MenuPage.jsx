import React, {Fragment, useEffect, useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom';
import {Typography, Button, Grid} from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";


export function MenuPage() {

    const navigate = useNavigate();
    const {state} = useLocation();
    const [adminConfirmation, setAdminConfirmation] = useState(false);
    useEffect(() => {
        setAdminConfirmation(state.admin)
    }, []);

    return (
        <Fragment>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh', // Altura completa de la ventana
            }}>
                <Box
                    sx={{
                        textAlign: 'center',
                        width: '15%',
                    }}
                >
                    <Typography
                        variant="h4"
                        component="h4"
                        sx={{color: "#e17624"}}
                    >
                        MENU
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'Silver',
                            padding: '5%',
                            gap: '16px', // Espacio entre los botones
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                width: {
                                    xs: '80%',    // 80% del contenedor en pantallas pequeñas
                                    sm: '60%',    // 60% del contenedor en pantallas medianas
                                    md: '50%',    // 50% en pantallas grandes
                                },
                                backgroundColor: '#e17624',
                                margin: '8px',
                            }}
                        >
                            Iniciar Partida
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                width: {
                                    xs: '80%',
                                    sm: '60%',
                                    md: '50%',
                                },
                                backgroundColor: '#e17624',
                                margin: '8px',
                            }}
                        >
                            Unirse a partida
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                width: {
                                    xs: '80%',
                                    sm: '60%',
                                    md: '50%',
                                },
                                backgroundColor: '#e17624',
                                margin: '8px',
                            }}
                        >
                            Estadísticas
                        </Button>
                        {adminConfirmation &&
                            <Button
                                variant="contained"
                                sx={{
                                    width: {
                                        xs: '80%',    // 80% del contenedor en pantallas pequeñas
                                        sm: '60%',    // 60% del contenedor en pantallas medianas
                                        md: '50%',   // 45vh en pantallas grandes
                                    },
                                    backgroundColor: '#e17624',
                                    margin: '8px',
                                }}
                            >
                                Admin
                            </Button>
                        }
                    </Box>
                </Box>
            </div>
        </Fragment>
    )
}