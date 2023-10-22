const { Pool } = require('pg');
const donenv = require('dotenv').config();
const pool = new Pool({
    dev: {
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        host: process.env.PGHOST,
        port: process.env.PGPORT,
    }
});

module.exports = pool;