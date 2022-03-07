const express = require('express');
const cookieSession = require('cookie-session')
const app = express();
const path = require('path');
const port = 3000;
const authRouter = require('./routes/admin/auth');
const adminProductsRouter = require('./routes/admin/products');
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');



app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieSession({
    keys:['mU0>qP8}qB0>iD2{yZ1}']
}));

app.use(authRouter);
app.use(productsRouter);
app.use(adminProductsRouter);
app.use(cartsRouter);

app.use(express.static('public'))
app.listen(port,()=>{
    console.log(`Listen on port ${port}`)
})