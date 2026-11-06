const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs'); // Set EJS as the view engine

app.use(express.static('public')); // Express will look into public folder

app.get('/', (req, res) => {
    res.render('home'); // Render the home.ejs file
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});