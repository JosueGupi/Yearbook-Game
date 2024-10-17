import React, {Fragment, useEffect, useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom';
import {Typography, Button, Grid} from '@mui/material';
import Box from '@mui/material/Box';

export function AdminPage() {
    const navigate = useNavigate();
    const goToCreateUserPage = () => {
      navigate('/createUserPage');
    }

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
                        ADMIN MENU
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
                            Modificar Listas de Nombres
                        </Button>
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
                            onClick={goToCreateUserPage}
                        >
                            Crear Usuario
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
                            Actualizar Usuario
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
                            Eliminar Usuario
                        </Button>
                    </Box>
                </Box>
            </div>
        </Fragment>
    )
}