const fs = require('fs')
const file = 'video.mp4'


// Step 1: Create a read stream
const readStrem = fs.createReadStream(file)

// Step 2: Create a write stream
const writeStream = fs.createWriteStream('copy.mp4')

// Step 3: Pipe the read and write operations
readStrem.pipe(writeStream);

// Step 4: Handle stream events --> finish, error
writeStream.on('finish', () => {
    console.log('New file created')
})