import fs from 'fs';


const student = {
    name: 'sai',
    age: 21,
    city: 'vishakapatnam'
}


const jsondata = JSON.stringify(student,null,2);


fs.writeFile('data.json',jsondata,(err) => {
    if(err){
        console.error(err);
        return
    }

    console.log('json had written successfully');
})