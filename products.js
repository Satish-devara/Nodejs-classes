import fs from 'fs';
import readline from 'readline/promises';

const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout,
    prompt: 'enter details'
})

let products = [];

fs.stat('data.json',(err) => {
    if(err){
        console.log('file does not exists');
        fs.writeFileSync('data.json', '[]');
    }
    console.log('enter the details in the formal: id name price');
    rl.prompt();
    
    rl.on('line', (line) => {
        const input = line.trim();
        if(input.toLowerCase() === 'exit'){
            const existingData = JSON.parse(fs.readFileSync('data.json','utf-8',(err,data) => {
                if(err){
                    console.log(err);
                }
            }));

            if (!Array.isArray(existingData)) {
        existingData = [];
      }
        existingData.push(...products);
            fs.writeFileSync('data.json',JSON.stringify(existingData,null ,2),(err) => {
                if(err){
                    console.log('error in writing data');
                }

                
            });
            console.log('✅ Products saved successfully to data.json!');
                rl.close();
                return;
        }

        const[id, name, price] = input.split(' ');
        if(!id || !name || !price){
            console.log('enter the details in the formal: id name price');
            rl.prompt();
        }else{
            const product = {id, name, price};
            products.push(product);
            console.log(`✅ Added: ${JSON.stringify(product)}`);
        }
        rl.prompt();
    })
})