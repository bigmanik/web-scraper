const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const app = express();
const PORT = 8080;



const url = 'https://www.si.com/mlb/guardians/news/reports-guardians-wont-move-shane-bieber-this-offseason';

axios(url)
.then(response =>{
    const html = response.data
    const c = cheerio.load(html)
    const article = []
    c('.m-detail--body', html).each(function(){
       const title =  c(this).text()
       const uri =  c(this).find('p').attr('href')
       article.push({
        title,
        uri
       })
    })
    console.log(article)
}).catch(err => console.log(err))

app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`)
})




