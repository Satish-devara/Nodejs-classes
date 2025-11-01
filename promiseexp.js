let myPromise = new Promise((resolve, reject) => {
    let isDone = false;

    if(isDone){
        resolve('task completed');
    }else{
        reject('task is not completed');
    }
});

myPromise
.then((message)=>{
    console.log(message)
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('task completed');
})