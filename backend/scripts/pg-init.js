const { spawn } = require('child_process');
require('dotenv').config();

const {
    PGUSER,
    PGPASSWORD,
    PGHOST,
    PGDATABASE,
    PGPORT
  } = process.env;
const command = `createdb -h ${PGHOST} -p ${PGPORT} -U ${PGUSER} ${PGDATABASE}`;

const child = spawn(command, { shell: 'cmd.exe', stdio: 'inherit' });

child.on('exit', (code) => {
  process.exit(code);
});
