// MongoDB

// Model.populate(), a Mongoose method that you can use to essentially link documents across collections. This allows you to have a schema for each of them
// •	_id : Each document stored in a collection requires a unique ‘_id’ field that acts as a primary key. If an inserted document omits the _id field, the MongoDB driver automatically generates an ObjectId for the _id field.
// •	Await db.collection(‘inventory).insertMany([{STUFF},{STUFF}]
// •	await db.collection('inventory').insertOne({
// •	  item: 'canvas',
// •	  qty: 100,
// •	  tags: ['cotton'],
// •	  size: { h: 28, w: 35.5, uom: 'cm' }
// •	});
// •	const data = db.collection('inventory').find({}); = FIND ALL
// •	const data = db.collection('inventory').find({ status: 'D' });
// •	const data = db.collection('inventory').find({status: { $in: ['A', 'D'] }}); = A OR B
// •	const data = db.collection('inventory').find({status: 'A', qty: { $lt: 30 }}); = A & less than 30
// •	db.collection.updateOne/updateMany/replaceOne()
// •	await db.collection('inventory').updateOne(
// •	  { item: 'paper' },
// •	  { $set: { 'size.uom': 'cm', status: 'P' },
// •	    $currentDate: { lastModified: true }  });
// •	await db.collection('inventory').updateMany(
// •	  { qty: { $lt: 50 } },
// •	  {
// •	    $set: { 'size.uom': 'in', status: 'P' },
// •	    $currentDate: { lastModified: true }  });
// •	db.collection(‘inventory’).deleteMany/deleteOne()
// •	await db.collection('inventory').deleteMany({}); = DROP TABLE
// •	await db.collection('inventory').deleteMany({ status: 'A' });
// •	await db.collection('inventory').deleteOne({ status: 'D' });

// •	class BoardService {
// •	async getAll(userEmail) {
// return await db.Boards.find({ creatorEmail: userEmail }).populate("creator", "name picture")  }


// •	Mongoose Queries: 
// •	    Model.deleteMany()
// •	    Model.deleteOne()
// •	    Model.find()
// •	    Model.findById()
// •	    Model.findByIdAndDelete()
// •	    Model.findByIdAndRemove()
// •	    Model.findByIdAndUpdate()
// •	    Model.findOne()
// •	    Model.findOneAndDelete()
// •	    Model.findOneAndRemove()
// •	    Model.findOneAndReplace()
// •	    Model.findOneAndUpdate()
// •	    Model.replaceOne()
// •	    Model.updateMany()
// •	    Model.updateOne()
