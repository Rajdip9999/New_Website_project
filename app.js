const express = require('express')
const { MongoClient } = require('mongodb')
const app = express()
const path = require('path')
const port = 80

//DataBase Information 
const url = 'mongodb://localhost:27017/'
const client = new MongoClient(url)
let db;

const dataBaseConnect = async()=>{
    try{
    await client.connect()
    db = await client.db('raaz')
    console.log("database Connect")
    app.listen(port,()=>{
     console.log(`http://localhost:${port}`)

    })



    //find DATABASE Collaction

    const collection = db.collection('list')
     await collection.createIndex({name:1,Number:1},{unique:true})
    const friendlist = await collection.find({}).toArray()
    // console.log(friendlist)
    }

    catch(err){

        console.log("DATABASE connect problem hochhe problem hochhe", err.message)        
    }

}

dataBaseConnect()

app.use(express.static(path.join(__dirname,'dd')));
app.use(express.urlencoded({}))
app.set('view engine','ejs')
app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'template/index.html'))
})
app.get('/contac',async (req,res)=>{
        const { name,number } = req.query
        if(name){
            const bb =db.collection('list')
            // const name = name
            await bb.deleteOne({name:name})
        }
    try{
    const dd = db.collection('list')
    const friends = await dd.find().toArray()
    res.status(200).render('index',{ name:friends})
    }
    catch(err){
        console.log(err.message)
    }
})

app.get('/name',(req,res)=>{
    res.status(200).send('This is name')
})
app.post('/req', async (req,res)=>{
    const {name,num} = req.body
        if(!name || name.trim()===''|| num===""|| !num){
        res.status(400).send('Please Enter Valid Details')
        return
    }
    try{
       const collection=  db.collection('list')
      const insert = await collection.insertOne({name:name, Number:num})
    let fff= await collection.find({name:name}).toArray()
           console.log(fff)
               console. log(insert)
      res.send('Welcome')
    }
    catch(err){
        
        if(err.code === 11000){
            res.status(400).send('This name AgerThekei database ye achhe error code',`${err.code}`)
        }
    }
})