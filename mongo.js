const MongoClient = require('mongodb').MongoClient
const assert = require('assert');
const circulationRepo = require('./circulationRepo');
const data = require('./circulation.json')
const url = 'mongodb://localhost:27017';
const dbName = 'cirrculation';



async function main(){
  const client = new MongoClient(url);
  await client.connect();

  try{
  const results = await circulationRepo.loadData(data);
  assert.strictEqual(data.length , results.insertedCount)
  
  const getData = await circulationRepo.get();
  assert.strictEqual(data.length , getData.length);
  
  } catch(error) {
  } finally{
  const admin = client.db(dbName).admin();

  //NOTE be careful with dropdatabase
  await client.db(dbName).dropDatabase();
  console.log(await admin.listDatabases());
  client.close();
  }
}


main();
