import express from 'express';
import { userSignup, userLoginIn } from '../controller/user-controller.js';
import {getProducts, getProductbyId} from '../controller/product-controller.js';

const router = express.Router();


router.post('/signup', userSignup);
router.post('/login', userLoginIn);

router.get('/products', getProducts);
router.get('/product/:id', getProductbyId);

export default router;