
import fs from "fs"
import ReactDOMServer from 'react-dom/server'
import React from "react";
// import {App} from "../view/App.js";
import { NacharbeitFetcher } from "../controller/fetcher/prototyp.js";
import { Blob } from "buffer";
import cors from 'cors'
// import ApexCharts from "apexcharts";

// import { CreateOptions } from "html-pdf";
import pdf from "html-pdf";
import express from 'express';

const HeadlessChrome = require('simple-headless-chrome')
 
const browser = new HeadlessChrome({
  headless: true, // If you turn this off, you can actually see the browser navigate with your instructions,
  chrome: {
  }
})
browser.init() 
 
 
const app = express();
const port = 4000;


// var corsOptions = {
//     origin: 'http://example.com',
//     optionsSuccessStatus: 200 
// }

app.get('/', (_req, _res) => {
    try{
        const fetcher = new NacharbeitFetcher()

        fetcher.getData().then(res => {
            // const base64Str = Buffer.from(res.data).toString('base64');

            // const index = fs.readFileSync('build/index.html', 'utf8');
            // const htmlToPDF = index.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToPipeableStream(<App src={base64Str}/>)}<div>`)
            // const options: CreateOptions = { format: 'Letter' };
            // const options= { format: 'A4' };
            //  pdf.create(htmlToPDF, options).toFile('nacharbeit.pdf', function(err, re) {
            //     if (err) {
            //         _res.send(err.message);
            //     } 
            //     console.log(re)
            // });
            _res.send(htmlToPDF);
        })
    }catch(e){
        _res.send(`${e}`);
    }
});

// app.get('/static/js/main.47131388.js',(_req, _res) => {
//     _res.send(fs.readFileSync('build/static/js/main.47131388.js', 'utf8'))
// })
// app.get('/static/css/main.31d6cfe0.css',(_req, _res) => {
//     _res.send(fs.readFileSync('build/static/css/main.31d6cfe0.css', 'utf8'))
// })
// app.get('/static/js/496.6e428f40.chunk.js',(_req, _res) => {
//     _res.send(fs.readFileSync('build/static/js/496.6e428f40.chunk.js', 'utf8'))
// })
// app.get('/static/js/244.39550c04.chunk.js',(_req, _res) => {
//     _res.send(fs.readFileSync('build/static/js/244.39550c04.chunk.js', 'utf8'))
// })
// app.get('/manifest.json',(_req, _res) => {
//     _res.send(fs.readFileSync('build/manifest.json', 'utf8'))
// })



app.get('/pdf2', async (_req, _res) => {
    try{
        const mainTab = await browser.newTab();
        // console.log(mainTab)
        await mainTab.goTo('http://localhost:3000')

        const htmlTag = await mainTab.evaluate(function(selector) {
            const selectorHtml = document.querySelector(selector)
            return selectorHtml.innerHTML
        }, 'html');
        console.log(htmlTag.result.value)
        // const html = mainTab.getNodeValue('html')
        // console.log(html)
        // await mainTab.savePdf('nacharbeit')
        const options = { format: 'A4' };
        await pdf.create(`<!DOCTYPE html><html lang="en">${htmlTag.result.value}</html>`, options).toFile('nacharbeit.pdf', function(err, re) {
            if (err) {
                _res.send(err.message);
            } 
            console.log(re)
        });
        console.log('PDF vygenerovane')
        _res.send(`<!DOCTYPE html><html lang="en">${htmlTag.result.value}</html>`);
    }catch(e){
        _res.send(`${e}`);
    }
});
app.get('/turnoff', async (_req, _res) => {
    try{
        await browser.close()
    }catch(e){
        _res.send(`${e}`);
    }
});
 
// Server setup
app.listen(port, () => {
});

