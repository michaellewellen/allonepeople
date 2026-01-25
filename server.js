const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { page: 'home' });
});

app.get('/mission', (req, res) => {
    res.render('mission', { page: 'mission'});
});

app.get('/where-we-work', (req, res) => {
    res.render('where', { page: 'where' });
});

// app.get('/projects', (req, res) => {
//     res.render('projects', { page: 'where' });
// });

app.get('/ways-to-give', (req, res) => {
    res.render('give', { page: 'give' });
});

app.get('/about', (req, res) => {
    res.render('about', { page: 'about' });
});

app.get('/contact', (req,res) => {
    res.render('contact', { page: 'contact' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

