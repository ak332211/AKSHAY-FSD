const express = require('express');
const chalk = require('chalk');
const path = require('path');


const bodyparser = require('body-parser');      //body-parser module
const cors = require('cors');                   //cors module


const app = new express();


var nav =   [
    {   
        link:"/" , 
        title:"HOME"
    },

    { 
        link:"/contactus" , 
        title:"CONTACT US"

    },

    {   
        link:"/signup" , 
        title:"SIGN UP" 
    },

    { 
        link:"/login" , 
        title:"LOGIN"
    }, 
    
    { 
        link:"/books" , 
        title:"BOOKS"
    },

    { 
        link:"/authors" , 
        title:"AUTHORS"
    },

    {
        link:"/books/add",
        title:"ADD BOOK"
    }
];

const booksRouter = require('./src/routes/bookRoutes')(nav);        //passig nav to 'booksRouter' seperate file...we r passing 
                                                                    //'nav' array as an argument to the function in booksrouter page

const authorRouter = require('./src/routes/authorRoutes')(nav);




app.use(express.static(path.join(__dirname, "/public")));


app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));


app.use('/books', booksRouter);        //for booksRouter
app.use('/authors', authorRouter);      //for authorRouter

app.use('/addbooks', booksRouter);


app.set('views', './src/views');            //we are setting the 'views' from the specified path on the right
app.set('view engine', 'ejs');              //we are setting the 'view engine' as 'ejs'





app.get('/', function(req, res){            //either app.all() or app.get()

    res.render('index',
    {
        nav ,
        title:"Library",
    });

});


app.listen(4000, function(){
    // console.log("listening to port 8000")
    console.log("Listening to port " + chalk.yellow('4000'));

});