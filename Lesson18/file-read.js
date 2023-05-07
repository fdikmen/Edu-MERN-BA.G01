// File System Library
const fs = require('fs');

// read file
// fs.readFile('filename', callback)

fs.readFile('demo.txt', (err, data) => {
console.log("01-File Read");
    if (err) throw err;
    console.log(data.toString());
    console.log("End of the File Read");
}
);

// read file synchronously
// fs.readFileSync('filename')

/*SAMPLE
const data = fs.readFileSync('demo.txt');
console.log(data.toString());
console.log("End of the File Read");
*/

// create & write file
// fs.writeFile fs.appendFile
// fs.writeFileSync fs.appendFileSync
// fs.writeFile('filename', 'content', callback)

fs.appendFile('demo2.txt', 'Hello World! 01!!!', (err) => {
    console.log("02-File Created with append");
    if (err) throw err;
    console.log("File Created");
}
);
//fs.appendFileSync

fs.writeFile('demo2.txt', 'Hello World! 02!!!\nHello World! 03!!!', (err) => {
    console.log("03-File Created with write");
    if (err) throw err;
    console.log("File Created");
}
);
//fs.writeFileSync

// delete file
// fs.unlink
// fs.unlink('filename', callback)

fs.unlink('demo2.txt', (err) => {
    if (err) throw err;
    console.log("04-File Deleted");
}
);
//fs.unlinkSync