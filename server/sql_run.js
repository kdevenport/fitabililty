require('dotenv').config({path: __dirname + '/.env'});
const massive = require('massive');4

let db;

massive(process.env.CONNECTION_STRING, { scripts: __dirname + '/db'})
    .then(dbInstance => {
        db = dbInstance;
        return db.setup.create_roles();
    })
    .then(() => {
        return db.setup.create_users();
    })
    .then(() => {
        console.log('setup successfully');
    })
    .catch( error => {
        console.error(error);
    })