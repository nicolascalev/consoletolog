#!/usr/bin/env node

const { argv } = require('yargs').demandOption(['name']).describe('name', 'Process name');
const shell = require('shelljs');
const fs = require('fs');
var packagej = require('../package.json')

const processName = argv.name;

shell.mkdir('-p', `./${processName}`, `./${processName}/logs`);

var runjs = `
const shell = require('shelljs')
const moment = require('moment')

moment.locale('es')
var fileName = \`\${moment(Date.now()).format('DD-MM-YYYY_hh-mm-ss')}.txt\`;
shell.exec(\`node ./${processName}/${processName}.js > ./${processName}/logs/\${fileName}\`)
`;

fs.appendFile(`${processName}/run.js`, runjs, err => {
    if (err) throw err;
});

var ejemplo = `
console.log('Ejecuta el script ${processName}')
console.log('Todos los console.log que pongas aquí se van a guardar en la carpeta logs al correr este script')
`;

fs.appendFile(`${processName}/${processName}.js`, ejemplo, err => {
    if (err) throw err;
});

packagej.scripts[processName] = `node ./${processName}/run.js`;
var newPackage = JSON.stringify(packagej, undefined, 2);
fs.writeFile('package.json', newPackage, err => {
    if (err) throw err;
});

console.log('\nProceso creado! \n')
console.log(`Run the process as - npm run ${processName} \n`)
