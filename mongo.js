const MongoClient = require('mongodb').MongoClient

const circulationRepo = require('./circulationRepo');
const data = require('./circulation.json')

const url = 'mongodb://localhost:27017';
const dbName = 'cirrculation';

async function main(){
  const client = new MongoClient(url);
  await client.connect();

  const results = await circulationRepo.loadData(data);
  // console.log(results.insertedCount , results.ops);
  const admin = client.db(dbName).admin();
  // console.log(await admin.serverStatus());
  console.log(await admin.listDatabases());
}


main();