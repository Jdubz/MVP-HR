var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
var passport = require('passport');

passport.use(new GoogleStrategy({
    clientID:     CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: "http://localhost:8000/",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

// var searchGoogle = (options, callback, context) => {
//   var url = 'https://www.googleapis.com/youtube/v3/search?q=' + options + '&type=video&videoEmbeddable=true';
//   $.ajax ({
//     url: url,
//     type: 'GET',
//     dataType: 'jsonp',
//     data: {
//       part: 'snippet',
//       key: YOUTUBE_API_KEY
//     },
//     success: (data) => { callback(data, context); },
//     error: (data) => { console.log('your site is broken. so sad.', data); }
//   });
// };

window.googleAuth = _.debounce(passport.authenticate('google'), 400);
