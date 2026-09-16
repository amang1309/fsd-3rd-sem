const fs = require('fs').promises; 

async function fileOperations() {
    try {
        await fs.writeFile('promises.txt', 'Welcome to Full stack development');
        console.log('File created successfully');
    } catch (err) {
        console.log("Error: ", err);
    }
}

fileOperations() ;

async function readFile() {
    try {
        const data = await fs.readFile('promises.txt', 'utf-8');
        console.log('File content:');
        console.log(data);
    } catch (err) {
        console.log("Error: ", err);
    }
}

readFile();

async function appendFile() {
    try {
        await fs.appendFile('promises.txt', '\nSemester:3');
        console.log('File updated successfully');
    } catch (err) {
        console.log("Error: ", err);
    }
}

appendFile();

async function renameFile() {
    try {
        await fs.rename('promises.txt', 'promise_new.txt');
        console.log('File renamed successfully');
    } catch (err) {
        console.log("Error: ", err);
    }
}

renameFile();

async function deleteFile() {
    try {
        await fs.unlink('testing.txt');
        console.log('File deleted successfully');
    } catch (err) {
        console.log("Error: ", err);
    }
}

deleteFile();