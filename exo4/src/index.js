var path = require('path');
var fs = require('fs')

var log = path.join(__dirname, 'log.txt');
console.log("Fichier log.txt :")
console.log(fs.readFileSync(log, {encoding: "utf-8"}));

var html = path.join(__dirname, '../assets/index.html');
console.log("Fichier index.html :")
console.log(fs.readFileSync(html, {encoding: "utf-8"}));

