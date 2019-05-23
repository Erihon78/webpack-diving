require('@babel/runtime/regenerator');
require('webpack-hot-middleware/client?reload=true');
require('./main.css');
require('./index.html');

// let person_18 = [{name: 'Oleg'}];

// let object = [{name: 'Mike'}, ...person_18];

// const a = () => {
//     console.log('ES7+ is ready to testing!');
//     console.log('-------------');
//     console.log(object);
// }

// a();

let a = async () => {
    await console.log('Hello from babel');
    console.log('Done now!');
}

a();