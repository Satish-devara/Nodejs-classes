import fs from 'fs';

fs.readFile('data.json','utf-8',(err,data) => {
    if(err){
        console.error(err);
        return;
    }
    try{
        const user = JSON.parse(data);
    console.log(`Hi, I am ${user.name}.\n I am from ${user.city} and ${user.age} old`);
    }catch(err){
        console.log(err);
    }
})