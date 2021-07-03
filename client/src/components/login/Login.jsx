import { useState } from 'react';
import {Dialog, DialogContent, makeStyles, Box, Typography, TextField, Button} from '@material-ui/core';
import { authenticateSignup, authenticateLogin } from '../../service/api';

const useStyle = makeStyles({
    component: {
        height: '70vh',
        width: '90vh'
    },
    image: {
        backgroundImage: `url(${'data:image/png;base64,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'})`,
        height: '70vh',
        backgroundRepeat: 'no-repeat',
        background: '#44b2e5',
        width: '40%',
        backgroundPosition: 'center 85%',
        padding: '45px 35px',
        '& > *': {
            color: '#ffffff',
            fontWeight: 600
        }
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *': {
            marginTop: 20,

        }
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    loginB: {
        textTransform: 'none',
        background: '#f1828d',
        color: '#ffffff',
        fontWeight: 600,
        height: 48,
        borderRadius: 2
    },
    reqB: {
        textTransform: 'none',
        background: '#ffffff',
        color: '#00BCD4',
        fontWeight: 550,
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'
    },
    createTxt: {
        textAlign: 'center',
        marginTop: 'auto',
        fontSize: 14,
        color: '#00BCD4',
        fontWeight: 600,
        cursor: 'pointer' 
    },
    error: {
        fontSize: 10,
        color: '#ff6161',
        marginTop: 10,
        fontWeight: 600,
        lineHeight: 0
    }
})

const initialValue = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations' 
    },
    signup: {
        view: 'signup',
        heading: 'Looks like youre new here!',
        subHeading: 'Sign up with your mobile number to get started'
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};

const loginInitialValues = {
    username: '',
    password: ''
}

const Login = ({open, setOpen, setAccount}) => {
    const classes = useStyle();

    const [account, toggleAccount] = useState(initialValue.login);

    const [signup, setSignup] = useState(signupInitialValues);

    const [login, setLogin] = useState(loginInitialValues);

    const [error, setError] = useState(false);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(initialValue.login)
    }

    const toggleUserAccount = () => {
        toggleAccount(initialValue.signup)
    }

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.username)
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        if(!response) {
            setError(true);
            return;
        }
        handleClose();
        setAccount(login.username)
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup);
    }
    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    return (
        <Dialog open = {open} onClose={handleClose}>
            <DialogContent className={classes.component}>
                <Box style={{display: 'flex'}}>
                    <Box className={classes.image}>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
                    </Box>
                    {
                        account.view === 'login' ?
                        <Box className={classes.login}>
                            <TextField onChange={(e) => onValueChange(e)} name='username' label='Enter Username/Mobile number' />
                            <TextField onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                            {error && <Typography className={classes.error}>Invalid Username or Password</Typography>}
                            <Typography className={classes.text}>By continuing, you agree to ClickToCart's Terms of Use and Privacy Policy.</Typography>
                            <Button variant="contained" onClick={() => loginUser()} className={classes.loginB }>Login</Button>
                            <Typography className={classes.text} style={{textAlign: 'center'}}>OR</Typography>
                            <Button variant="contained" className={classes.reqB}>Request OTP</Button>
                            <Typography onClick ={() => toggleUserAccount() } className={classes.createTxt}>New to ClickToCart? Create an account</Typography>
                        </Box> :
                        <Box className={classes.login}>
                            <TextField onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                            <TextField onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
                            <TextField onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                            <TextField onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                            <TextField onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                            <TextField onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone Number' />
                            <Button variant="contained" onClick={() => signupUser()} className={classes.loginB}>Signup</Button>
                        </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Login;