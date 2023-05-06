// import events module
const events = require('events')

// create an eventEmitter object for management events
// Event Tools (EventEmitter)
const eventEmitter = new events.EventEmitter()

// create an event (Define an event)
// eventEmitter.on('eventName', eventHandler)
// sample
eventEmitter.on('sayhi', (name) => {console.log('Hi!', name)})
// trigger an event once
eventEmitter.once('sayhello',function(name){console.log('Hello!', name)})

function sayAge(age){
    console.log(`Hello! Im ${age} years old.`)
}
eventEmitter.on('sayage', sayAge) // call function (callback)

// trigger an event
// eventEmitter.emit('eventName')
// sample
eventEmitter.emit('sayhi')
// eventEmitter.emit('sayhello')

let counter = 0
setInterval(() => {
    counter++;
    console.log(counter)
    // trigger an event without parameter
    // eventEmitter.emit('eventName')
    // trigger an event with parameter
    // eventEmitter.emit('eventName', 'parameter')
    eventEmitter.emit('sayhi', 'John')
}, 1000)


