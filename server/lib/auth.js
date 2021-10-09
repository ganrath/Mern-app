const passport = require('passport');


export default {
    initialize: passport.initialize(),
    session: passport.session(),
    setUser: (req,res,next) => {
        res.locals.user = req.user;
        return next();
    }
}