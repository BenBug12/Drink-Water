const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs'); // Set EJS as the view engine
app.use(express.static('public')); // Express will look into public folder
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies  

const products = [
    { id: 1, title: 'PureSpring Spring Water', category: 'Spring', volumeSize: '1L Pack (6-pack)', price: 15.99, stockQuantity: 50 },
    { id: 2, title: 'Alkaline Mineral Water', category: 'Alkaline', volumeSize: '500ml (12-pack)', price: 19.99, stockQuantity: 30 },
    { id: 3, title: 'PureClean Distilled water', category: 'Distilled', volumeSize: '1 Gallon', price: 5.99, stockQuantity: 100 }
];

const users =[];
const orders = [];

app.get('/', (req, res) => {
    res.render('home'); // Render the home.ejs file
});

app.get('/about', (req, res) => {
    res.render('about'); // Render the about.ejs file
});

app.post('/about', (req, res) => {
    res.render('about'); // Render the about.ejs file
});

app.get('/products', (req, res) => {
    res.render('products', { products }); // Render the products.ejs file and pass the products array
});

app.post('/products', (req, res) => {
    res.render('products', { products }); // Render the products.ejs file and pass the products array
});

app.get('/contact', (req, res) => {
    res.render('contact'); // Render the contact.ejs file
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Here you can handle the form submission, e.g., save to a database or send an email
    console.log(`Received contact form submission: Name: ${name}, Email: ${email}, Message: ${message}`);
    res.send('Thank you for your message! We will get back to you soon.');
});

app.get('/login', (req, res) => {
    res.render('login'); // Render the login.ejs file
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
        console.log(`User logged in successfully: ${foundUser.fullName}`);
        res.send(`Welcome back, ${foundUser.fullName}!`);
    } else {
        console.log(`Login failed for email: ${email}`);
        res.send('Invalid email or password. Please try again.');
    }

});

app.get('/register', (req, res) => {
    res.render('register'); // Render the register.ejs file
});

app.post('/register', (req, res) => {
    const { fullName, email, password, deliveryAddress} = req.body;

    const newUser = {
        userID: users.length + 1,
        fullName,
        email,
        password,
        deliveryAddress,
        role: 'customer'
    };
    users.push(newUser);
    console.log('Registration successful! New user:', newUser);
    res.redirect('/login');
});

app.post('/checkout', (req, res) => {
    const { productId, quantity } = req.body;
    const selectedProduct = products.find(p => p.id == productId);

    if (!selectedProduct) {
        return res.send('Product not found.');
    }
    const totalAmount = selectedProduct.price * quantity;
    const newOrder = {
        orderId: orders.length + 1,
        userId: 1,
        productItems: { productId: selectedProduct.id, title: selectedProduct.title, quantity: Number(quantity) },
        totalAmount: totalAmount.toFixed(2),
        orderDate: new Date(),
        paymentStatus: 'Paid'
    };
    orders.push(newOrder);
    console.log('Order placed Successfuly:', newOrder);
    res.send(`Order placed successfully! Total amount: $${newOrder.totalAmount}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});