
import fs from "fs"
import ReactDOMServer from 'react-dom/server'
import React from "react";
import {App} from "../view/App.js";
import { NacharbeitFetcher } from "../controller/fetcher/prototyp.js";


// import { CreateOptions } from "html-pdf";
import pdf from "html-pdf";
import express from 'express';
 
const app = express();
const port = 4000;


app.get('/pdf', (_req, _res) => {
    try{
        // console.log(window, '4')
        const index = fs.readFileSync('build/index.html', 'utf8');
        // const index = fs.readFileSync('public/index.html', 'utf8');
        const htmlToPDF = index.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App/>)}<div>`)
        // const options: CreateOptions = { format: 'Letter' };
        const options= { format: 'Letter' };
        pdf.create(htmlToPDF, options).toFile('nacharbeit.pdf', function(err, res) {
            if (err) {
                _res.send(err.message);
            } 
        });
        _res.send(htmlToPDF);
    }catch(e){
        _res.send(`${e}`);
    }
});
 
// Server setup
app.listen(port, () => {
});

