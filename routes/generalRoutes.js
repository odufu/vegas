var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Express' });
});

router.get('/properties', function(req, res, next) {
    res.render('properties', { title: 'Express' });
});

router.get('/property-list', function(req, res, next) {
    res.render('property-list', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'Express' });
});

module.exports = router;











