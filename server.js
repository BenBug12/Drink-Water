const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs'); // Set EJS as the view engine

app.use(express.static('public')); // Express will look into public folder

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
    res.render('products'); // Render the products.ejs file
});

app.post('/products', (req, res) => {
    res.render('products'); // Render the products.ejs file
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
})

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Here you can handle the login logic, e.g., check credentials against a database
    console.log(`Received login attempt: Username: ${username}, Password: ${password}`);
    // For demonstration purposes, we'll just send a response back
    res.send('Login attempt received. (In a real application, you would check credentials here.)');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});