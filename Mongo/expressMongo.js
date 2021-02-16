var express = require("express");
var server = express();
const bookRouter = express.Router();
var port = process.env.PORT || 3000;

server.get("/", (req, res) => {
  res.send("WELCOME TO THE JUNGLE");
});

server.listen(port, () => {
  console.log("Running on port " + port);
});

server.use("/api", bookRouter);

bookRouter.route("/books").get((req, res) => {
  //NOTE if query did not have hits
  const query = {};
  if (req.query.genre) {
    query.genre = req.query.genre;
  }
  Book.find((err, books) => {
    if (err) {
      return res.send(err);
    }
    return res.json(books);
  });
});

//NOTE by id
bookRouter.route("/books/:bookId").get((req, res) => {
  Book.findById(req.params.bookId, (err, book) => {
    if (err) {
      return res.send(err);
    }
    return res.json(book);
  });
});

//NOTE if mongodb/mongoose hooked up
const { Schema } = mongoose;
const bookModel = new Schema({
  title: { type: string },
  author: { type: string },
  genre: { type: string },
});

module.exports = mongoose.model("Book", bookModel);
