var express = require('express');
var server = express();
var port = 3000

server.get('/' , (req , res) => {
  res.send("home")
  console.log("welcome home");
})
server.listen(port , () => {
  console.log("listening on port " + port);
})


//NOTE insert
const fruitDocument = [
  {"name": "apples", "qty": 5, "rating": 3 },
  {"name": "bananas", "qty": 7, "rating": 1, "microsieverts": 0.1 },
  {"name": "oranges", "qty": 6, "rating": 2 },
  {"name": "avocados", "qty": 3, "rating": 5 },
]
const insert = await db.fruitCollection.insertMany(fruitDocument) 
console.dir(insert.insertedCount)

//NOTE query/find
const cursor = collection.find({ "name": "apples" });
await cursor.forEach(console.dir);
//OR
await db.collection.find({"name" : "apples"}).forEach(console.dir)
await db.collection('animals').find({'name': 'animals'}) 

// sorting - assending order of length
const query = {};
const sort = { length: -1 };
const cursor = collection.find(query).sort(sort);
await cursor.forEach(console.dir);
await collection.find({}).sort({length: -1}).forEach(console.dir);
// OR add .limit(3) before sort ... OR .skip(3) after

//NOTE delete 





async function findAnimals(){
var results = await collection('animals').find({
  Animal: "pig"
});
console.log(results);
}
findAnimals();