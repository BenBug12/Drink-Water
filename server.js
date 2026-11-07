const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs'); // Set EJS as the view engine

app.use(express.static('public')); // Express will look into public folder

app.get('/', (req, res) => {
    res.render('home'); // Render the home.ejs file
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

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});