
import NavBar from './NavBar'
import Banner from './Banner';
import { Box, makeStyles } from '@material-ui/core';

const useStyle = makeStyles ({
    component: {
        padding: 10,
        background: '#f2f2f2'
    }
})

const Home = () => {
    const classes = useStyle();
    return (
        <div>
            <NavBar />
            <Box className = {classes.component}>
                <Banner />
            </Box>
        </div>
    )
}

export default Home;