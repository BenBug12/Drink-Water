const express = require('express');
const router = express.Router();
const storeController = require('../controller/storeController');

// Admin security middleware
function isAdmin(req, res, next) {
    if (req.session.user && req.session.user.role === 'admin') {
        return next();
    }
    res.status(403).send('Access Denied: Administrator privileges required to view this page.');
}

// Routes
router.get('/', storeController.getHome);
router.get('/about', storeController.getAbout);
router.post('/about', storeController.getAbout);

router.get('/products', storeController.getProducts);
router.post('/products', storeController.getProducts);

router.get('/contact', storeController.getContact);
router.post('/contact', storeController.postContact);

router.get('/login', storeController.getLogin);
router.post('/login', storeController.postLogin);

router.get('/register', storeController.getRegister);
router.post('/register', storeController.postRegister);
router.get('/logout', storeController.getLogout);

router.post('/checkout', storeController.postCheckout);
router.get('/orders', storeController.getOrders);

router.get('/subscriptions', storeController.getSubscriptions);
router.post('/subscribe', storeController.postSubscribe);

router.get('/admin', isAdmin, storeController.getAdmin);

module.exports = router;