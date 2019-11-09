const path = require('path');
const fs = require('fs');
const csv = require('fast-csv');

const obj = []


fs.createReadStream(path.resolve(__dirname,process.argv[2]))
  .pipe(csv.parse({ headers: true }))
  .on('data', row => obj.push(row))
  .on('end', ()=> console.log(obj))