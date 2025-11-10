import fs from 'fs';


fs.readFile('data.json', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    }

    console.log('data was read');
    let student = JSON.parse(data);

    student.city = 'delhi';
    student.grade = 'A';
    student.address = 'hauj kaus';

    student = JSON.stringify(student,null,2);

    fs.writeFile('data.json',student,(err)=>{
        if(err){
            console.log('error in writing file');
        }

        console.log('file updated');
    })
});


