const Pool = require('pg').Pool;
const pool = new Pool({
     user: 'cndboskdvotiqx',
     password: '237382cfd0a9ff01b8c180d7982e0d7a0f02dd566d68445e900150c2978c6ce5',
     host: 'ec2-50-19-255-190.compute-1.amazonaws.com',
     port: 5432,
     database: 'dfhnlj4kli6f5m',
     ssl: { rejectUnauthorized: false }
})

module.exports = pool