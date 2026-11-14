const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const port = 3000;

// Import Routes
const storeRoutes = require('./src/routes/storeRoutes');

// Configuration
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


// Session Middleware, I dont think this works very well
app.use(session({
    secret: 'water-bottle-secret-keu-change-this',
    resave: false,
    saveUninitialized: false
}));

app.use('/', storeRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});