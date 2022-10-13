const express=require('express');
const app=express();
require('./CA/config')
const ca=require('./CA/ca')
app.use(express.json())

app.get('/currentaffairs', async(req,res)=>{
    const data = await ca.find()
    res.send(data)
})

app.post('/addca',async(req,res)=>{
    const data = new ca(req.body)
    console.log(req.body)
    const result = await data.save()
    res.send(data)
})

app.listen(3000)
console.log('app is tunning on port 3000!')