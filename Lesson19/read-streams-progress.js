const fs = require('fs')
const file = 'video.mp4'

// Step 1: Create a read stream
// fs.createReadStream(file)
const readStream = fs.createReadStream(file);

// Step 2: Handle stream events --> data, end, error
// yourSteam.on('data', (chunk) => {})
let counter = 1
let progress = 0

fs.stat(file, (err, data) => {
    const total = data.size
    console.log('Total size: ', total)
    readStream.on('data', (chunk) => {
        //console.log( counter++ , '.little chunk. Size: ', chunk.length, 'bytes\n')
        progress += chunk.length
        console.log(Math.round((100 * progress) / total) + '%')
    }
    )
})

readStream.on('end', () => {
    console.log('end of stream')
    console.log(`Progress: ${progress} bytes`)
}  
)

