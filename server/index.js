const express = require('express');
const controller = require('./controller');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const multer = require('multer');
const path = require('path');
require('dotenv').config({ path: __dirname + '/config/.env'});

const {
    CONNECTION_STRING
} = process.env;

const storage=multer.diskStorage({
    destination: './public/uploads',
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage
}).single('profileImage');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(express.static('./public'));

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
// app.get('/login/login', (req, res) => {
//     res.render('login/login');
// })

// //User Regiser Route
// app.get('/register', (req, res) => {
//     res.render('register/register');
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