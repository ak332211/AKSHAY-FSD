var express = require('express');
var booksRouter = express.Router();


var books = [

    {
        title: "Mein Kampf",
        genre: "Autobiography",
        author: "Adolf Hitler",
        image: "mein.jpg"
    },

    {
        title: "Alchemist",
        genre: "Novel",
        author: "Paulo Coelho",
        image: "alchemist.jpg"
    },
    {
        title: "Monk who sold his ferrari",
        genre: "fable",
        author: "Robin Sharma",
        image: "monk.jpg"
    },
    {
        title: "Wings of fire",
        genre: "Autobiography",
        author: "APJ Abdul Kalam",
        image: "wings.jpg"
    }


]


function router(nav) {


    booksRouter.route('/')
        .get(function (req, res) {
            res.render('books',
                {
                    nav,
                    title: "Books",
                    books
                });

        })

    booksRouter.route('/add')
        .get(function (req, res) {
            res.render('addbook',
                {
                    nav,
                    title: "ADD BOOK",

                });
        })

    booksRouter.route('/save')
        .post(function (req, res) {
            
            // res.send("Form Submitted");

            console.log(req.body.title);




        })


    booksRouter.route('/:id')                       //used for accepting value coming from html page
        .get(function (req, res) {
            const id = req.params.id;

            res.render('book',
                {
                    nav,
                    title: "Book",
                    book: books[id]
                });

        })

    return booksRouter;

}

module.exports = router;