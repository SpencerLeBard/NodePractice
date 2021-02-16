const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const circulationRepo = require("../NewspaperDemo/circulationRepo");
const data = require("./circulation.json");
const url = "mongodb://localhost:27017";
const dbName = "cirrculation";

async function main() {
  const client = new MongoClient(url);
  await client.connect();
  try {
    const results = await circulationRepo.loadData(data);
    assert.strictEqual(data.length, results.insertedCount);

    const getData = await circulationRepo.get();

    const filterData = await circulationRepo.get({
      NewsPaper: getData[4].NewsPaper,
    });
    const limitData = await circulationRepo.get({}, 3);
  } catch (error) {
    console.log(error);
  } finally {
    const admin = client.db(dbName).admin();

    //NOTE be careful with dropdatabase
    await client.db(dbName).dropDatabase();
    // console.log(await admin.listDatabases());
    client.close();
  }
}

main();

//NOTE general flow:
// mongo client = require mongo client
// require repo
// url = localhost or whatever
// async function main, client = new MongoClient(url)
// await client.connect()
// try const results = await repo.loadData(data)
// NOTE new jsfile repo
// loadData() , retutn new promise(async(resolve , reject) => { const client = new MonGoClient(url)})
// try client.connect
// const db = client.db(dbName)
// results = await db.collection('newspapers').insertMany(data)
//retrun (from load data) {loadData , get}
//get similar except use .find(query)
//NOTE back to mongo.js
// const getData = await repo.get();
// another example would be 'await db.repo/collection.get({Newspapers: getData.NewsPapers})'
