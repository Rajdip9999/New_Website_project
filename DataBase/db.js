const { MongoClient } = require('mongodb')

const url = 'mongodb://localhost:27017/'

const client = new MongoClient(url)

//DataBase

const dbName = 'Raaz'

const CallData = async()=>{  

    try{

     await client.connect()

    console.log('DataBase Is connect')

    const Data = await client.db(dbName)

    const collection = Data.collection('friendlist')
    
    const Friendlist = await collection.findOne({"name": name}).toArray()


    console.log(Friendlist)

    }


 catch(err){

        console.log(err.message)

    }

//     finally{
//     client.close()
// }

    // console.log(Friendlist)

}