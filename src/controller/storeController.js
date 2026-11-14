const { users, products, orders, subscriptions, deliveries } = require('../models/data');

// Static Pages
exports.getHome = (req, res) => res.render('home');
exports.getAbout = (req, res) => res.render('about');
exports.getContact = (req, res) => res.render('contact');

exports.postContact = (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received contact form submission: Name: ${name}, Email: ${email}, Message: ${message}`);
    res.send('Thank you for your message! We will get back to you soon.');
};

// Products & Store
exports.getProducts = (req, res) => res.render('products', { products });

// Authentication
exports.getLogin = (req, res) => res.render('login');

exports.postLogin = (req, res) => {
    const { email, password } = req.body;
    const foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
        req.session.user = foundUser; 
        console.log(`User logged in successfully: ${foundUser.fullName} (${foundUser.role})`);
        
        if (foundUser.role === 'admin') {
            return res.redirect('/admin');
        } else {
            return res.redirect('/products');
        }
    } else {
        console.log(`Login failed for email: ${email}`);
        res.send('Invalid email or password. Please try again.');
    }
};

exports.getRegister = (req, res) => {
    res.render('register');
};

exports.postRegister = (req, res) => {
    const { fullName, email, password, deliveryAddress } = req.body;
    const newUser = {
        id: users.length + 1,
        fullName,
        email,
        password,
        address: deliveryAddress,
        role: 'customer'
    };
    users.push(newUser);
    console.log('Registration successful! New user:', newUser);
    res.redirect('/login');
};

exports.getLogout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
};

// Orders & Checkout
exports.postCheckout = (req, res) => {
    const { productId, quantity, shippingAddress } = req.body;
    const selectedProduct = products.find(p => p.id == productId);

    if (!selectedProduct || selectedProduct.stockQuantity < Number(quantity)) {
        return res.send('Product not found or insufficient stock.');
    }

    selectedProduct.stockQuantity -= Number(quantity);

    const totalAmount = selectedProduct.price * quantity;
    const newOrder = {
        orderId: orders.length + 1,
        userId: req.session.user ? req.session.user.id : 1,
        productItems: { productId: selectedProduct.id, title: selectedProduct.title, quantity: Number(quantity) },
        totalAmount: totalAmount.toFixed(2),
        orderDate: new Date(),
        paymentStatus: 'Paid'
    };
    orders.push(newOrder);

    const newDelivery = {
        deliveryId: deliveries.length + 1,
        orderId: newOrder.orderId,
        shippingAddress: shippingAddress || '123 Main St, Palmview, TX',
        deliveryDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        carrierStatus: 'Processing'
    };
    deliveries.push(newDelivery);

    res.send(`Order placed successfully! Order ID: #${newOrder.orderId}, Delivery Status: ${newDelivery.carrierStatus}`);
};

exports.getOrders = (req, res) => res.render('orders', { orders });

// Subscriptions
exports.getSubscriptions = (req, res) => res.render('subscriptions', { products, subscriptions });

exports.postSubscribe = (req, res) => {
    const { productId, frequency, quantity } = req.body;
    const selectedProduct = products.find(p => p.id == productId);

    if (!selectedProduct) {
        return res.send('Product not found.');
    }

    const newSubscription = {
        subscriptionId: subscriptions.length + 1,
        userId: req.session.user ? req.session.user.id : 1,
        productTitle: selectedProduct.title,
        quantity: Number(quantity),
        frequency: frequency,
        pricePerDelivery: (selectedProduct.price * quantity).toFixed(2),
        status: 'Active',
        startDate: new Date()
    };

    subscriptions.push(newSubscription);
    res.redirect('/subscriptions');
};

// Admin Dashboard
exports.getAdmin = (req, res) => {
    res.render('admin', { users, orders, products, deliveries });
};