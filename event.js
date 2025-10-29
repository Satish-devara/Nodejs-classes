import EventEmitter from 'events';

const eventEmmiter = new EventEmitter()


// eventEmmiter.on('greetings', (name) =>{
//     console.log(` Hi ${name}`);
// })

// eventEmmiter.emit('greetings','satish');

// const showMessage = () => console.log("event triggered");

// eventEmmiter.on('remove', showMessage);
// eventEmmiter.emit('remove');

// eventEmmiter.removeListener('remove', showMessage);
// eventEmmiter.emit('remove');

// eventEmmiter.on('data', () => console.log('data received'));
// eventEmmiter.on('data', () => console.log('data processed'));
// eventEmmiter.on('data', () => console.log('data saved'));

// eventEmmiter.emit('data');

eventEmmiter.once('start', () => {
    console.log('event emmitted');
})

eventEmmiter.emit('start');
eventEmmiter.emit('start');