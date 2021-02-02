var express = require('express');
var server = express();
var port = 3000

server.get('/' , (req , res) =>{
  res.send("nihao")
  console.log("nihao");
})
server.listen(port , () => {
  console.log("listening on port " + port);
})



var collection = [
  { "_id": 1, "name": "apples", "qty": 5, "rating": 3 },
  { "_id": 2, "name": "bananas", "qty": 7, "rating": 1, "microsieverts": 0.1 },
  { "_id": 3, "name": "oranges", "qty": 6, "rating": 2 },
  { "_id": 4, "name": "avocados", "qty": 3, "rating": 5 },
]

const query = { "name": "apples" };
const cursor = collection.find(query);
await cursor.forEach(console.dir);
// OR await db.collection.find({"name" : "apples"}).forEach(console.dir)
// OR await db.collection('animals').find({'name': 'animals'})


async function findAnimals(){
var results = await collection('animals').find({
  Animal: "pig"
});
console.log(results);
}
findAnimals();