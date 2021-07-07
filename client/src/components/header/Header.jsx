import {AppBar, Toolbar, makeStyles, Typography, Box, withStyles, IconButton, Drawer, List, ListItem} from '@material-ui/core';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';
import HeaderButtons from './HeaderButtons';

import icon from '../../Logo.png';
import { Menu } from '@material-ui/icons';

import { useState } from 'react';

const useStyle = makeStyles(theme=>({
    header: {
        background: '#00BCD4',
        height: 55
    },
    logo: {
        width: 150
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    customBtn: {
        margin: '0 10% 0 auto',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }     
    }
}));

const ToolBar = withStyles({
    root: {
      minHeight: 55
    },
})(Toolbar);

const Header = () => {
    const classes = useStyle();

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box onClick={handleClose}>
            <List>
                <ListItem button>
                    <HeaderButtons />
                </ListItem>
            </List>
        </Box>
    )

    return (
        <AppBar className={classes.header}>
            <ToolBar>
                <IconButton
                    color="inherit"
                    className={classes.menuButton}
                    onClick={handleOpen}
                >
                    <Menu/>
                </IconButton>

                <Drawer open={open} onClose={handleClose} >
                    {list()}
                </Drawer>

                <Link to='/' className={classes.component}>
                    <img src={icon} className={classes.logo} />
                </Link>
                <SearchBar />
                <span className={classes.customBtn}><HeaderButtons /></span>
            </ToolBar>
        </AppBar>
    )
}
export default Header;
