
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const passport = require('passport');

const GOOGLE_CLIENT_ID = "221526380219-5hvv3668l7i3u4upp938cje7f1q7s95h.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
 
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  }, 

  function(accessToken, refreshToken, profile, cb) {
    cb(null, profile);
  }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});