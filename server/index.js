const express = require('express');
const session = require('express-session');
const passport =require('passport');
cosnt Auth0Strategy = requuire('passport-auth0');
const controller = require('./controller');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const path = require('path');
require('dotenv').config({ path: __dirname + '/config/.env'});

const {
    CONNECTION_STRING
} = process.env;



const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(session({
    secret: 'anything',
    resave:false,
    saveUninitialized: false
}));
app.use(passport.initialize() );
app.use(passport.session() );

passport.use( new Auth0Strategy({
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: '/login',
    scope: "openid email profile"
},
function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken - used to call Auth0
    // extraParams - has the JSON web token
    // profile - has all of the info from the user
    return done(null, profile);
}
));



massive(CONNECTION_STRING, { scripts: __dirname + '/db' }).then((dbInstance) => {
    console.log('DB Connected');
    app.set('db', dbInstance);
}).catch((error) =>{
    console.log(error);
})

//Endpoints for Results
app.get('/api/results', controller.get_results);
app.delete('/api/results/:id', controller.delete_result);
app.post('/api/results', controller.create_result);
app.put('/api/results/:id', controller.update_result);
app.get('/api/result/:id', controller.get_result);

// //Endpoints for Profile
app.get('/api/profile', controller.get_profile);
app.post('/api/profile', controller.create_profile);
app.put('/api/profile/:id', controller.update_profile);

// //User Login Route
// app.get('/api/login', (req, res) => {
//     res.send('login');
// })

// //User Regiser Route
// app.get('/api/register', (req, res) => {
//     res.send('register');
// })

// //Register Form POST
// app.post('/register', (req, res) => {
//     let errors=[];

    // if(releaseEvents.body.password != req.body.password2){
    //     errors.push({text: 'Passwords do not match'})
    // }
    // if(req.body.password.length < 4){
    //     res.render('users/register',{
    //         error: errors,
    //         name: req.body.username
    //         email: req.body.email,
    //         password: req.body.password,
    //         r
    //     })
    // }
// })


const PORT = process.env.SERVER_PORT || 3111;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});