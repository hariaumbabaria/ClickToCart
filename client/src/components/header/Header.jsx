import {AppBar, Toolbar, makeStyles, Typography, Box, withStyles} from '@material-ui/core';

import SearchBar from './SearchBar';
import HeaderButtons from './HeaderButtons';

const useStyle = makeStyles({
    header: {
        background: '#2874f0',
        height: 55
    },
    logo: {
        width: 75
    },
    subUrl: {
        width: 10,
        marginLeft: 4,
        height:10
    },
    container: {
        display: 'flex'
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0
    },
    subheading: {
        fontSize: 10,
        fontStyle: 'italic'
    },
});

const ToolBar = withStyles({
    root: {
      minHeight: 55
    },
})(Toolbar);

const Header = () => {
    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <AppBar className={classes.header}>
            <ToolBar>
                <Box className={classes.component}>
                    <img src={logoURL} className={classes.logo} />
                    <Box className={classes.container}>
                        <Typography className={classes.subheading}>Explore <Box component="span" style={{color:'#FFE500'}}>Plus</Box></Typography>
                        <img src={subURL} className={classes.subUrl} />
                    </Box>
                </Box>
                <SearchBar />
                <HeaderButtons />
            </ToolBar>
        </AppBar>
    )
}
export default Header;
