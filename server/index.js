const express = require('express');
const session = require('express-session');
const passport =require('passport');
const controller = require('./controller');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const path = require('path');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
require('dotenv').config({ path: __dirname + '/config/.env'});


const {
    CONNECTION_STRING
} = process.env;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized: false
}));
app.use(passport.initialize() );
app.use(passport.session() );





massive(CONNECTION_STRING, { scripts: __dirname + '/db' }).then((dbInstance) => {
    console.log('DB Connected');
    app.set('db', dbInstance);
}).catch((error) =>{
    console.log(error);
})

passport.use('register', new LocalStrategy({
    passReqToCallback: true,
}, (req, username, password, done) => {
    const db = app.get('db');
    const { email } = req.body;

    db.query(`
        select * from "Users"
        where email ilike \${email}
            OR username ilike \${username}
    `, { username, email })
        .then(users => {
            if (users.length > 0) {
                return done('Username or email is already in use');
            }

            bcrypt.hash(password, 15, (err, hashedPassword) => {
                if (err) {
                    return done('System failure');
                }

                db.Users.insert({
                    ...req.body,
                    password: hashedPassword,
                    role_id: 3,
                })
                    .then(user => {
                        delete user.password;

                        done(null, user);
                    })
                    .catch(err => {
                        console.warn(err);
                        done('System failure');
                    });
            });
        })
        .catch(err => {
            console.warn(err);
            done('System failure');
        });
}));

passport.use('login', new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    const db = app.get('db');

    db.Users.find({ email })
        .then(users => {
            if (users.length == 0) {
                return done('Username or password is incorrect');
            }

            const user = users[0];

            bcrypt.compare(password, user.password, (err, isSame) => {
                if (err) {
                    return done('System failure');
                }

                if (!isSame) {
                    return done('Username or password is incorrect');
                }

                delete user.password;

                done(null, user);
            });
        })
        .catch(err => {
            console.warn(err);
            done('System failure');
        });
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    const db = app.get('db');

    db.Users.find(id)
        .then(user => {
            if (!user) return done(null, undefined);

            delete user.password;

            return done(null, user);
        })
        .catch(err => {
            console.warn(err);
            done('System failure');
        });
});

app.use(passport.initialize() );
app.use(passport.session() );

app.post('/auth/register', passport.authenticate('register'), (req, res) => {
    res.send({ message: 'Successfully registered', user: req.user });
});

app.post('/auth/login', passport.authenticate('login'), (req, res) => {
    res.send({ message: 'Successfully logged in', user: req.user });
});

app.get('/auth/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
});

app.get('/api/me', (req, res) => {
    res.send(req.user);
});


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




const PORT = process.env.SERVER_PORT || 3111;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});