function getData(callback){
    let error = null;
    let data = null;

    if(!data){
        error = 'No data found';
    }

    callback(error, data);
}

getData(function(err, result){
    if(err){
        console.log("error: ", err);
    }else{
        console.log('data: ', result);
    }
});