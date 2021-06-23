import {AppBar, Toolbar, makeStyles, Typography, Box, withStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';
import HeaderButtons from './HeaderButtons';

import icon from '../../Logo.png';

const useStyle = makeStyles({
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
    }
});

const ToolBar = withStyles({
    root: {
      minHeight: 55
    },
})(Toolbar);

const Header = () => {
    const classes = useStyle();

    return (
        <AppBar className={classes.header}>
            <ToolBar>
                <Link to='/' className={classes.component}>
                    <img src={icon} className={classes.logo} />
                </Link>
                <SearchBar />
                <HeaderButtons />
            </ToolBar>
        </AppBar>
    )
}
export default Header;
