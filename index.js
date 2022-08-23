require('dotenv').config()

const bodyParser = require('body-parser')
const express = require('express');
const cors = require('cors');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');


const app = express();

const port = 5001;

app.use(bodyParser.json());
app.use(cors());
app.use(expressLayouts);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    // res.send("Express is ready to serve");
    res.render("index");
  });

app.get("/about", (req, res) => {
    res.render("about");
  });


app.get("/contact", (req, res) => {
    res.render("contact");
  });

app.get("/pricing", (req, res) => {
    res.render("pricing");
  });

app.get("/faq", (req, res) => {
    res.render("faq");
  });

app.get("/blog-home", (req, res) => {
    res.render("blog-home");
  });

app.get("/blog-post", (req, res) => {
    res.render("blog-post");
  });

app.get("/portfolio-overview", (req, res) => {
    res.render("portfolio-overview");
  });

app.get("/portfolio-item", (req, res) => {
    res.render("portfolio-item");
  });




app.listen(port, () => console.log(`GIL app listening on port ${port}!`))
