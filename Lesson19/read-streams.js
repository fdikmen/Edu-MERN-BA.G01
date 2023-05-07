const fs = require('fs')
const file = 'video.mp4'

// Step 1: Create a read stream
// fs.createReadStream(file)
const readStream = fs.createReadStream(file);

// Step 2: Handle stream events --> data, end, error
// yourSteam.on('data', (chunk) => {})
let counter = 1
readStream.on('data', (chunk) => {
    console.log(counter++, '.little chunk. Size: ', chunk.length, 'bytes\n')
})

readStream.on('end', () => {
    console.log('End of stream')
})

