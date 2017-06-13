var config = {
    database: process.env.DB,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    max: 5, //set pool max size to 20
    min: 3, //set min pool size to 4
    idleTimeoutMillis: 10000,
};

module.exports = config;
