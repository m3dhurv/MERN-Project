require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const indexRouter = require("./routes/index")
const ownersRouter = require("./routes/owersRouter")
const productsRouter = require("./routes/productsRouter")
const usersRouter = require("./routes/usersRouter")
const flash = require("connect-flash");
const expressSession = require("express-session");

const db = require("./config/mongoose-connection"); 




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(expressSession({
    resave:false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET || 'fallback-secret-key',

}))
app.use(flash())



app.use("/", indexRouter)
app.use("/owners", ownersRouter);
app.use("/users", usersRouter)
app.use("/products", productsRouter);

app.listen(3000);

