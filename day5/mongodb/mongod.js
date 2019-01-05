const {MongoClient} = require('mongodb');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = '1810';
// Use connect method to connect to the server
MongoClient.connect(url, (err, client) => {
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection('students');
  collection.insertMany([
    {name:123,age:18}
  ],(err, result)=>{
    console.log("Inserted 3 documents into the collection");
  })
  client.close();
});