const { spawn } = require('child_process');
require('dotenv').config();

const dataPath = process.env.PG_DATA_PATH;
const command = `pg_ctl start -D ${dataPath} -l ${dataPath}/server.log`;

const child = spawn(command, { shell: true, stdio: 'inherit' });

child.on('exit', (code) => {
  process.exit(code);
});
