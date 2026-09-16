const fs = require('fs');
fs.writeFileSync('secAstudent.txt','today is a sunny day', 'utf8');
console.log('file is written successfully ');

const data = fs.readFileSync('secAstudent.txt', 'utf8');
console.log('file content is given as: ', data); 

fs.appendFileSync('secAstudent.txt', ' and I am happy', 'utf8');
console.log('file is appended successfully ');


// fs.unlinkSync('silver.txt');
// console.log('file is deleted successfully ');

// fs.mkdirSync('sample Folder');
// console.log('folder named Sample Folder is created successfully ');

// fs.rmdirSync('sample Folder');
// console.log('folder named Sample Folder is deleted successfully ');

if(fs.existsSync('secAstudent.txt')) {
    console.log('file exists');
} else {
    console.log('file does not exist');
}