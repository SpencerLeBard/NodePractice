var express = require('express');
var app = express();
var db = "mongodb://localhost:27017";

app.get('/' , (req , res) =>{
  res.send("yoyoyoyo")
})


const query = { "name": "apples" };
const cursor = collection.find(query);
await cursor.forEach(console.dir);

await collection.insertMany([
  { "_id": 1, "name": "apples", "qty": 5, "rating": 3 },
  { "_id": 2, "name": "bananas", "qty": 7, "rating": 1, "microsieverts": 0.1 },
  { "_id": 3, "name": "oranges", "qty": 6, "rating": 2 },
  { "_id": 4, "name": "avocados", "qty": 3, "rating": 5 },
]);

async function findAnimals(){
var results = await db.collection('animals').find({
  Animal: "pig"
});
console.log(results);
}
findAnimals();