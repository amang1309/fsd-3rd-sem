const fs = require('fs');

fs.writeFile('sample.txt','Welcome to Full stack development', (err) => {
        if (err){
            console.log('Error creating file:', err);   
            return; 
        }
        console.log('File created successfully');
    
});

fs.readFile('sample.txt', 'utf-8', (err, data) => {
    if (err){
        console.log('Error reading file:', err);
        return;
    }

    console.log ('File content:');
    console.log (data);

});

fs.appendFile('sample.txt','\nSemster:3',(err) => {
    if (err){
        console.log('Error updating file:', err);
    }else{
        console.log('File updated successfully');
    }
})

fs.readFile('sample.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('Error reading file:', err);
        return;     
    }

    console.log ('File Content :');
    console.log (data);
});

fs.unlink ('example.txt', (err) => {
    if (err){
        console.log('Error deleting file:', err);
    }else{
        console.log('File deleted successfully');
    }
})

