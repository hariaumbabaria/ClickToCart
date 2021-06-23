import { useContext, useState } from "react";
import { Box, Button, makeStyles, Typography, Badge } from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

//component
import LoginDialog from '../login/Login';
import { LoginContext } from '../../context/ContextProvider';
import Profile from './Profile';

const useStyle = makeStyles({
    login: {
        background: '#ffffff',
        color: '#00BCD4',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        boxShadow: 'none',
    },
    wrapper: {
        margin: '0  7% 0 auto',
        display: 'flex',
        '& > *': {
            marginRight: 50,
            alignItems: 'center',
            textDecoration: 'none',
            color: '#fff'
        }
    },
    container: {
        display: 'flex'
    }
})

const HeaderButtons = () => {
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    const {account, setAccount} = useContext(LoginContext);

    const {cartItems} = useSelector(state=>state.cart);

    const openLoginDialog = () => {
        setOpen(true);
    }

    return (
        <Box className ={classes.wrapper} >
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                <Link>
                    <Button variant="contained" onClick={() => openLoginDialog()} className = {classes.login}>Login</Button>
                </Link>
            }
            <Link><Typography style={{marginTop: 5, fontWeight: 600}}> More </Typography></Link>
            <Link to='/cart' className = {classes.container}>
                <Badge badgeContent={cartItems.length} color="Secondary">
                    <ShoppingCart/>
                </Badge>
                <Typography style={{marginLeft: 10, fontWeight: 600}}>Cart</Typography>
            </Link>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount}/>
        </Box>
    )
}

export default HeaderButtons;