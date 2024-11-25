import React, {Fragment, useEffect, useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom';
import {Typography, Button, InputLabel, Select, MenuItem} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import {useForm} from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import axios from "axios";

export default function CreateUserPage() {
    const {register, handleSubmit} = useForm();
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [userError, setUserError] = useState(false);
    const [userErrorMessage, setUserErrorMessage] = useState('');
    const [listAccessError, setAccessListError] = useState(false);
    const [listAccessErrorMessage, setAccessListErrorMessage] = useState('');
    const navigate = useNavigate();

    function validateInputs(data) {
        const username = data.username;
        const password = data.password;
        const listAccess = data.listAccess;

        let isValid = true;

        if (!username) {
            setUserError(true);
            setUserErrorMessage('Porfa no sea menso y ponga algo');
            isValid = false;
        } else {
            setUserError(false);
            setUserErrorMessage('');
        }

        if (!password) {
            setPasswordError(true);
            setPasswordErrorMessage('Porfa no sea menso y ponga algo');
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }

        if (!listAccess) {
            setAccessListError(true);
            setAccessListErrorMessage('Porfa no sea menso y ponga algo')
            isValid = false;
        } else {
            setAccessListError(false);
            setAccessListErrorMessage('');
        }
        return isValid;
    }

    const onSubmit = async (data) => {

        try {
            if (validateInputs(data)) {
                // const response = await axios.post('http://localhost:3001/users/login', data);
                // navigate('/menu', {state: response.data[0]});
                navigate('/admin'); // Para pruebas
            } else {
                console.log('La información proporcionada no es valida');
            }
        } catch {
            alert('Usuario invalido');
        }
    }

    return <Fragment>
        <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', // Altura completa de la ventana
        }}>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '40%',
                    maxWidth: '500px',
                    height: 'auto',
                    gap: '16px',
                    backgroundColor: 'Silver',
                    borderRadius: '1vh',
                    alignItems: 'center',
                    padding: '20px',
                }}
            >
                <Typography
                    variant="h4"
                    component="h4"
                    sx={{color: "#e17624", paddingTop: '1rem'}}
                >
                    CREATE USER MENU
                </Typography>
                    <Typography variant='h6' component="h6" style={{color: "#000000",}}>Ingrese los
                        datos:</Typography>
                    <FormControl>
                        <TextField error={userError}
                                   helperText={userErrorMessage}
                                   id="name"
                                   type="text"
                                   name="user"
                                   autoFocus
                                   required

                                   variant="outlined"
                                   color={userError ? 'error' : 'warning'}
                                   sx={{ariaLabel: 'name', width: '45vh', color: 'white'}}
                                   label="Nombre"
                                   {...register('username')}/>
                    </FormControl>
                    <FormControl>
                        <TextField error={passwordError}
                                   helperText={passwordErrorMessage}
                                   id="password"
                                   type="password"
                                   name="password"
                                   placeholder="••••••"
                                   required

                                   variant="outlined"
                                   color={userError ? 'error' : 'warning'}
                                   sx={{ariaLabel: 'password', width: '45vh', color: 'white'}}
                                   label="Contraseña"
                                   {...register('password')}/>
                    </FormControl>
                    <FormControl>
                        <InputLabel id="listAccess"
                                    color={userError ? 'error' : 'warning'}
                                    sx={{ariaLabel: 'listAccess'}}
                        >Listas de nombres</InputLabel>
                        <Select
                            error={listAccessError}
                            helperText={listAccessErrorMessage}
                            labelId="labelListAccess"
                            id="listAccess"
                            label="Listas de nombres"
                            // onChange={}
                            variant={"outlined"}
                            required
                            color={userError ? 'error' : 'warning'}
                            sx={{ariaLabel: 'listAccess', width: '45vh'}}
                            {...register('listAccess')}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{width: '45vh', backgroundColor: '#e17624'}}
                    >
                        ingresar datos
                    </Button>
            </Box>
        </div>
    </Fragment>
}