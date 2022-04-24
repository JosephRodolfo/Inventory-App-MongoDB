const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const itemRouter = require('./routers/item')
const hbs = require("hbs");


var path = require("path");



const app = express();


const port = process.env.PORT || 3000;

const partialsPath = path.join(__dirname, '/templates/partials');
hbs.registerPartials(partialsPath);

app.use(express.json());
app.use(userRouter);
app.use(itemRouter)
var indexRouter = require("./routes/index");

app.set("views", path.join(__dirname, "/templates/views"));

app.set("view engine", "hbs");
app.use('/', express.static(path.join(__dirname, '../public')));
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));


app.use("/", indexRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

module.exports = app;

