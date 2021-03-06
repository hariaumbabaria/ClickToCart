import { Box, Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import {ShoppingCart as Cart, FlashOn as Flash} from '@material-ui/icons';
import { addToCart } from "../../redux/actions/cartActions";
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

const useStyle = makeStyles(theme => ({
    leftcontainer: {
        padding: '40px 0 0 80px',
        [theme.breakpoints.down('md')]: {
            padding: '20px 40px'
        }
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
        background: '#f9d423',
        color: '#fff',
        marginRight: 10
    },
    buyNow: {
        background: '#f1828d',
        color: '#fff'
    }
}))

const ActionItems = ({product}) => {
    const classes = useStyle();

    const history = useHistory();

    const dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(addToCart(product.id));
        history.push('/cart');
    }

    const buyNow = async () => {
        let response = await payUsingPaytm({amount: 500, email: 'ajay@gmail.com'});
        
        let information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response
        }
        post(information);
    }

    return (
        <Box className={classes.leftcontainer}>
            <img src= {product.detailUrl} className={classes.image}/> <br/>
            <Button onClick={() => addItemToCart()} variant="contained" className={clsx(classes.button, classes.addToCart)}><Cart/>Add to Cart</Button>
            <Button onClick={() => buyNow()} variant="contained" className={clsx(classes.button, classes.buyNow)}><Flash/>Buy Now</Button>
        </Box>
    )
}

export default ActionItems;