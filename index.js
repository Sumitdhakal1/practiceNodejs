const fs = require('fs'); //reading and wrting data access to file system
const http = require('http');
const url = require('url');
const slugify = require ('slugify')

const replaceTemplate =require('./modules/replaceTemplates')
//read file 
//blocking i/o synchronous
// const textInput= fs.readFileSync('./txt/input.txt', 'utf-8');

// console.log(textInput);

// const textOut =`this is what you know about avocardo: ${textInput}.\n create on ${Date.now()}`

// fs.writeFileSync('./txt/output.txt', textOut);

// console.log('file written!')


// non-blocking asynchronous
// fs.readFile('./txt/start.txt','utf-8', (err, data1)=>{
//     if(err) return console.log('error😰')

//     fs.readFile(`./txt/${data1}.txt`,'utf-8', (err, data2)=>{
//         console.log(data2);
//         fs.readFile('./txt/append.txt','utf-8', (err, data3)=>{
//             console.log(data3)

//             fs.writeFile('./txt/final.txt',`${data2}\n${data3}` , 'utf-8', err =>{
//               console.log('your file has been written 😁')
//             })
//          })
//      })
// })
// console.log('will read file');

//////////////////////////////////

//server
//req holds the req url
//res gives us tools gives us for sending response

// const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8')
// const tempCard= fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8')
// const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8')
// const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
//     const dataObject = JSON.parse(data);

//     const slug = dataObject.map(el =>slugify(el.productName, {lower: true}))

//     console.log(slug)
// const server = http.createServer((req, res) => {
//    const {query, pathname} = url.parse(req.url, true) 

//     //overview
//     if (pathname === '/' || pathname === '/overview') {
//         res.writeHead(200, {'Contnet-type' : 'text/html'})

//         const cardsHtml = dataObject.map( el => replaceTemplate (tempCard, el)).join('')
//          const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml)
//         res.end(output);

//         //product page
//     } else if (pathname === '/product') {
//         res.writeHead(200, {'Contnet-type' : 'text/html'})
//         const product = dataObject[query.id];
//         const output = replaceTemplate (tempProduct, product)
//         res.end(output);

//         //api
//     } else if (pathname === '/api') {
//             res.writeHead(200, {'Contnet-type' : 'application/json'})
//             res.end(data)  
        
//        //not found     
//     } else {
//         res.writeHead(404, {
//             'Content-type': 'text/html',
//             'my-own-header': 'hellohello'
//         });

//         res.end('<h1>page not found</h1>')
//     }

// });

// server.listen(8000, () => {
//     console.log('listening to request on port 8000')
// });

