// function greet(name, callback){
//     console.log(`hello ${name} `);
//     callback();
// }

// function sayGoodBye(){
//     console.log('Goodbye');
// }

// greet('satish',sayGoodBye);

function calculate(a,b, callback){
    let result = a+b;
    callback(result);
}

calculate(5, 10, function(sum){
    console.log('the sum is ', sum);
})