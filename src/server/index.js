// import register from '@babel/register'
// register({
//     ignore: [/node_modules/],
//     presets: ['@babel/preset-env', '@babel/preset-react', "@node-loader/babel"]
// })
// import {install} from 'jsx-node'
// install({
//     replace: {
//       preact: 'jsx-node',
//     },
//     extension: ['.jsx'],
//     presets: [ 'es2015-node6' , '@babel/preset-env', '@babel/preset-react' ],
//     plugins: [
//         'add-module-exports',
//     ]
//   });
// import './config/window.js'
// import './server.js' 
require('@babel/register')({
    ignore: [/node_module/],
    presets: ['@babel/preset-env', '@babel/preset-react']
})
require('./config/window')
require('./server')