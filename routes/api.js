/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

module.exports = function (app, books) {
  app
    .route("/api/books")
    .get(function (req, res) {
      //response will be array of book objects
      //json res format: [{"_id": bookid, "title": book_title, "commentcount": num_of_comments },...]
      const booksWithCommentCount = books.map((book) => {
        return {
          _id: book._id,
          title: book.title,
          commentcount: book.comments.length,
        };
      });
      res.json(booksWithCommentCount);
    })

    .post(function (req, res) {
      let title = req.body.title;
      //response will contain new book object including at least _id and title
      if (!title) {
        return res.send("missing required field title");
      }
      const newBook = {
        _id: (books.length + 1).toString(),
        title: title,
        comments: [],
      };
      books.push(newBook);
      res.json(newBook);
    })

    .delete(function (req, res) {
      //if successful response will be 'complete delete successful'
    });

  app
    .route("/api/books/:id")
    .get(function (req, res) {
      let bookid = req.params.id;
      //json res format: {"_id": bookid, "title": book_title, "comments": [comment,comment,...]}
    })

    .post(function (req, res) {
      let bookid = req.params.id;
      let comment = req.body.comment;
      //json res format same as .get
    })

    .delete(function (req, res) {
      let bookid = req.params.id;
      //if successful response will be 'delete successful'
    });
};
