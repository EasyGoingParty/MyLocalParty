const { spawn } = require('child_process');
require('dotenv').config();

const {
    DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    PG_DATA_PATH
  } = process.env;
const command = `createdb -h ${DB_HOST} -p ${DB_PORT} -U ${DB_USER} ${DB_NAME}`;

const child = spawn(command, { shell: 'cmd.exe', stdio: 'inherit' });

child.on('exit', (code) => {
  process.exit(code);
});
