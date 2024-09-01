import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from '@mui/material';


import Box from '@mui/material/Box';


import FormControl from '@mui/material/FormControl';

import TextField from '@mui/material/TextField';

import axios from 'axios'
import {useForm} from 'react-hook-form';

export function LoginPage() {
  const {register,handleSubmit} = useForm();
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [userError, setUserError] = useState(false);
  const [userErrorMessage, setUserErrorMessage] = useState('');
  const navigate = useNavigate();
  function validateInputs (data){
    const username = data.username ;
    const password = data.password ;

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

    return isValid;
  };
  const onSubmit = async(data) => {

    try {
      if(validateInputs(data)){
        const response = await axios.post('http://localhost:3001/users/login', data);
        navigate('/');
      }else{
        console.log('La información propocionada no es valida');
      }
    }
    catch{
      alert('Usuario invalido');
    }
  }

  return (
    <Fragment>
      <div style={{
        display: 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        height: '100vh' /* Altura completa de la ventana */
      }}>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '50vh',
            gap: 2,
            backgroundColor: 'Silver',
            borderRadius: '1vh',
            height: '31vh',
            alignItems: 'center',
          }}
        >
          <Typography variant='h4' component="h4" style={{ color: "#e17624",  }}>Ingrese sus datos</Typography>
          <FormControl>

            <TextField
              error={userError}
              helperText={userErrorMessage}
              id="user"
              type="text"
              name="user"
              autoFocus
              required

              variant="outlined"
              color={userError ? 'error' : 'warning'}
              sx={{ ariaLabel: 'user', width: '45vh', color: 'white' }}
              label="Usuario"
              {...register('username')}
            />
          </FormControl>
          <FormControl>
            <TextField
              error={passwordError}
              helperText={passwordErrorMessage}
              name="password"
              placeholder="••••••"
              type="password"
              id="password"
              autoFocus
              required
              sx={{ ariaLabel: 'user', width: '45vh', }}
              variant="outlined"
              color={passwordError ? 'error' : 'warning'}
              label="Contraseña"
              {...register('password')}
            />
          </FormControl>


          <Button
            type="submit"

            variant="contained"
            
            sx={{ width: '45vh', backgroundColor: '#e17624' }}
          >
            ingresar
          </Button>

        </Box>
      </div>

    </Fragment>

  )
}