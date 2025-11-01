// import EventEmitter from 'events';

// const eventEmiter = new EventEmitter();

// eventEmiter.on('practice', () => {
//     console.log('practicing node.js');
// })

// eventEmiter.on('practice', () => {
//     console.log('practicing react.js');
// })

// eventEmiter.on('practice2', (name, language) => {
//     console.log(`${name} is practing ${language}`);
// })


// eventEmiter.emit('practice');
// eventEmiter.emit('practice2', 'satish', 'node.js');

// eventEmiter.once('practice3', () => console.log('practice'));


// eventEmiter.emit('practice3');
// eventEmiter.emit('practice3');

// eventEmiter.removeListener('practice');
// eventEmiter.emit('practice')


function fileDownloading(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('fileDownloaded');
        },5000);
    });
};


async function startDownload() {
    console.log('file downloading');
    let download = await fileDownloading();
    console.log(download);
    console.log('download complete');
}

startDownload();
