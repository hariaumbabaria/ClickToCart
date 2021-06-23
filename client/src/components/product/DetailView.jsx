import { Box, makeStyles, Typography, Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProductDetails} from '../../redux/actions/productActions';
import {LocalOffer as Badge} from '@material-ui/icons';
import clsx from 'clsx';

//components
import ActionItems from './ActionItems';

const useStyle = makeStyles ({
    component: {
        marginTop: 55,
        background: '#f2f2f2'
    },
    container: {
        margin: '0 80px',
        background: '#fff',
        display: 'flex'
    },
    right: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    smallText: {
        fontSize: 14,
        verticalAlign: 'baseline',
        '& > *': {
            fontSize: 14,
            marginTop: 10
        }
    },
    greyTextColor: {
        color: '#878787'
    },
    price: {
        fontSize: 28,
    },
    badge: {
        fontSize: 14,
        marginRight: 10,
        color: '#00cc00'
    }
})

const DetailView = ({match}) => {
    const classes = useStyle();

    const {product} = useSelector(state => state.getProductDetails);

    const date = new Date(new Date().getTime() + (5*24*60*60*1000));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetails(match.params.id));
    }, [dispatch])

    return (
        <Box className={classes.component}>
            { product && Object.keys(product).length &&
                <Box className={classes.container}>
                    <Box style={{minWidth: '40%'}}>
                        <ActionItems product={product}/>
                    </Box>
                    <Box className={classes.right}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography className={clsx(classes.smallText, classes.greyTextColor)}>
                            8 Ratings & 1 Review
                        </Typography>
                        <Typography>
                            <span className={classes.price}>₹{product.price.cost}</span> &nbsp;&nbsp;&nbsp;
                            <span className={classes.greyTextColor}><strike>₹{product.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;&nbsp;
                            <span style={{color: '#388e3c'}}>{product.price.discount} off</span>
                        </Typography>
                        <Typography style={{marginTop: 20, fontWeight: 600}}>Available Offers</Typography>
                        <Box className={classes.smallText}>
                            <Typography><Badge className={classes.badge}/>Bank Offer 10% off on SBI Credit Card, up to ₹1250. On orders of ₹5000 and above</Typography>
                            <Typography><Badge className={classes.badge}/>Bank Offer 10% off on SBI Credit Card EMI, up to ₹1500. On orders of ₹5000 and above</Typography>
                            <Typography><Badge className={classes.badge}/>Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                            <Typography><Badge className={classes.badge}/>Get Google Nest mini at just ₹1999 on purchase of select Smartphones, TVs, Laptops, TV streaming</Typography>
                        </Box>

                        <Table>
                            <TableBody>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                                    <TableCell style={{fontWeight:600}}>{date.toDateString()} | ₹40</TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                                    <TableCell>No Warranty</TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Seller</TableCell>
                                    <TableCell className={classes.smallText}>
                                        <span style={{color:'#00BCD4'}}>SuperComNet</span>
                                        <Typography>GST invoice Available</Typography>
                                        <Typography>14 Days Return Policy</Typography>
                                        <Typography>View more sellers starting from ₹300</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Description</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>

                    </Box>
                </Box>
            }
        </Box>
    )
}

export default DetailView;