import * as React from "react";
import Box from "@mui/material/Box";
import {Alert, Button, Container, CssBaseline, InputLabel, MenuItem, Select, Typography, Collapse} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import {Fragment, useState} from "react";
import {useForm} from "react-hook-form";

export default function UpdateUserPage() {
    const onSubmit = async (data) => {

        // try {
        if (validateInputs(data)) {
            //         const response = await axios.post('http://localhost:3001/users/login', data);
            //         navigate('/menu', {state: response.data[0]});
            //         navigate('/admin'); // Para pruebas
            console.log(data);
            setAlertVisible(true);
            setTimeout(() => {
                setAlertVisible(false);
            }, 3000);
        } else {
            console.log('La información proporcionada no es valida');
        }
        // } catch {
        //     alert('Usuario invalido');
        // }
    }
    const [user, setUser] = React.useState('');

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setUser(selectedValue)

        setVisible(selectedValue !== '')
    };
    const {register, handleSubmit} = useForm();
    const [userError, setUserError] = useState(false);
    const [userErrorMessage, setUserErrorMessage] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [listAccessError, setAccessListError] = useState(false);
    const [listAccessErrorMessage, setAccessListErrorMessage] = useState('');
    const [visible, setVisible] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);

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

    return (
        <Fragment>
            <React.Fragment>
                <CssBaseline/>
                <Collapse in={alertVisible}>
                    <Alert variant="filled" severity="success" sx={{marginTop: '16px'}}>
                        This is a filled success Alert.
                    </Alert>
                </Collapse>
                <Container fixed
                           sx={{
                               display: 'flex',
                               justifyContent: 'center',
                               alignItems: 'center',
                               minHeight: '100vh', // Para ocupar toda la altura de la ventana
                           }}
                >
                    <Box
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            width: '50vh',
                            gap: '16px',
                            backgroundColor: 'Silver',
                            borderRadius: '1vh',
                            height: 'auto',
                            alignItems: 'center',
                            padding: '5%',
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="h4"
                            sx={{color: "#e17624"}}
                        >
                            UPDATE USER MENU
                        </Typography>
                        <Typography variant='h6' component="h6" style={{color: "#000000",}}>Elegir
                            Usuario...</Typography>
                        <FormControl>
                            <div>
                                <FormControl sx={{m: 1, minWidth: 250, width: '45vh', color: 'white'}}>
                                    <InputLabel id="demo-simple-select-autowidth-label">Usuario</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        value={user}
                                        onChange={handleChange}
                                        autoWidth
                                        label="Usuario"
                                        variant="outlined">
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={21}>Twenty one</MenuItem>
                                        <MenuItem value={22}>Twenty one and a half</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </FormControl>
                        <Box sx={{
                            display: visible ? 'flex' : 'none',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            width: '50vh',
                            gap: '16px',
                            backgroundColor: 'Silver',
                            borderRadius: '1vh',
                            height: 'auto',
                            alignItems: 'center',
                            padding: '5%',
                        }}>
                            <Typography variant='h6' component="h6" style={{m: 1, color: "#000000",}}>Ingrese los
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
                        </Box>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{width: '45vh', backgroundColor: '#e17624'}}
                        >
                            Actualizar datos
                        </Button>
                    </Box>
                </Container>
            </React.Fragment>
        </Fragment>
    )
}