var express = require('express');
var passport = require('passport');
var GoogleStrategy = require( 'passport-google-oauth20' ).Strategy;
var keys = require('./config/google.js');
var session = require('express-session');

var app = express();

// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

app.use(passport.initialize());
app.use(session({
  secret: 'mySecret',
  resave: false,
  saveUninitialized: true,
}));

passport.use(new GoogleStrategy({
    clientID:     keys.CLIENT_ID,
    clientSecret: keys.CLIENT_SECRET,
    callbackURL: "http://localhost:8000/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    // request.session.name = profile.name
    console.log(profile);
    done();
}));

app.get('/auth/google',
  passport.authenticate('google', { scope: 
    [ 'https://www.googleapis.com/auth/plus.login',
    , 'https://www.googleapis.com/auth/plus.profile.emails.read' ] }
));

app.get( '/auth/google/callback', 
  passport.authenticate( 'google', { 
      successRedirect: '/',
      failureRedirect: '/'
}));

app.get('/login', function(req, res, next) {
  // console.log(req.user);
  if (!req.user) {
    console.log('no user')
    res.status(200).send('no');
  } else {
    res.status(200).send('yes');
  }
});
// start listening to requests on port 8000
app.listen(8000);

// export our app for testing and flexibility, required by index.js
module.exports = app;