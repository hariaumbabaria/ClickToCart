import { Box, Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import {ShoppingCart as Cart, FlashOn as Flash} from '@material-ui/icons';
import { addToCart } from "../../redux/actions/cartActions";
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

const useStyle = makeStyles({
    leftcontainer: {
        padding: '40px 0 0 80px'
    },
    image: {
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '95%'
    },
    button: {
        height: 50,
        width: '46%',
        borderRadius: 2
    },
    addToCart: {
        background: '#ff9f00',
        color: '#fff',
        marginRight: 10
    },
    buyNow: {
        background: '#fb641b',
        color: '#fff'
    }
})

const ActionItems = ({product}) => {
    const classes = useStyle();

    const history = useHistory();

    const dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(addToCart(product.id));
        history.push('/cart');
    }

    return (
        <Box className={classes.leftcontainer}>
            <img src= {product.detailUrl} className={classes.image}/> <br/>
            <Button onClick={() => addItemToCart()} variant="contained" className={clsx(classes.button, classes.addToCart)}><Cart/>Add to Cart</Button>
            <Button variant="contained" className={clsx(classes.button, classes.buyNow)}><Flash/>Buy Now</Button>
        </Box>
    )
}

export default ActionItems;