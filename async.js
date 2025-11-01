function downloadfile(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('file download successfully!');
        },3000);
    });
}

async function startDownload(){
    console.log('downloading file');
    let result = await downloadfile();
    console.log(result);
    console.log('process finished');
}

startDownload()