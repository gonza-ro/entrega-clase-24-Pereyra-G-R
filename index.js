/* const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express(); */

/* Persistencia por REDIS database */
/* const redis = require('redis');
const client = redis.createClient();
const RedisStore = require('connect-redis')(session);

app.use(cookieParser());

app.use(session)({ */
    /* persistencia por redis database */
   /*  store: new RedisStore({
        host: 'localhost',
        port: 3306,
        client: client,
        ttl: 300
    }),
    secret: 'hola mundo',
    resave: false,
    saveUninitialized: false  */
    /* ,
    cookie: {
        maxAge: 40000 
    }*/
/* }) */