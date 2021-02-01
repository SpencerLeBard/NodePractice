const MongoClient = require('mongodb').MongoClient
const assert = require('assert');

const circulationRepo = require('./circulationRepo');
const data = require('./circulation.json')

const url = 'mongodb://localhost:27017';
const dbName = 'cirrculation';

async function main(){
  const client = new MongoClient(url);
  await client.connect();

  const results = await circulationRepo.loadData(data);
  assert.strictEqual(data.length , results.insertedCount)
  const admin = client.db(dbName).admin();

  //NOTE be careful with dropdatabase
  await client.db(dbName).dropDatabase();

  // console.log(await admin.serverStatus());
  console.log(await admin.listDatabases());
  client.close();
}


main();