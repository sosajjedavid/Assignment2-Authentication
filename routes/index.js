var express = require('express');
var router = express.Router();
var axios = require('axios');

var controller = require('../server/controller/controller');
var authRoute = require('../server/controller/auth');

router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  if(req.isAuthenticated()){
    res.render('about', { title: 'About' });
  }else{
    res.render('login', {title: 'Login'});
  }
});

router.get('/projects', function(req, res, next) {
  if(req.isAuthenticated()){
    res.render('projects', { title: 'Projects' });
  }else{
    res.render('login', {title: 'Login'});
  }
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

router.get('/contactlist', function(req, res, next) {
  if(req.isAuthenticated()){
    axios.get('http://localhost:3000/api/contactlist')
    .then(function(response){
        res.render('contactlist', { users : response.data, title: 'ContactList' });
    })
    .catch(err =>{
        res.send(err);
    })
  }else{
    res.render('login', {title: 'Login'});
  }
});



router.get('/add-contact', function(req, res, next) {
  res.render('add_contact', { title: 'Add Contact' });
});

router.get('/update-contact', function(req, res, next) {
  axios.get('http://localhost:3000/api/contactlist', { params : { id : req.query.id }})
      .then(function(contactdata){
          res.render("update_contact", { title: 'Update Contact', contact : contactdata.data})
      })
      .catch(err =>{
          res.send(err);
      })
});

router.post('/api/contactlist', controller.create);
router.get('/api/contactlist', controller.find);
router.put('/api/contactlist/:id', controller.update);
router.delete('/api/contactlist/:id', controller.delete);

router.post('/login', authRoute.login);
router.get('/logout', authRoute.logout);

module.exports = router ;