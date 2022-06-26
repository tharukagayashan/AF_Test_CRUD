const koa = require("koa");
const mongoose = require("mongoose");
const cors = require("@koa/cors");
const bodyParser = require("koa-bodyparser");
require('dotenv/config');

const app = new koa();

app.use(cors());
app.use(bodyParser());

const PORT = 7000 || process.env.PORT;
const MONGODB = process.env.MONGODB;

mongoose.connect(MONGODB)
.then(()=>{
    console.log("Mongo DB Connected..");
})
.catch((err)=>{
    console.log(err.message);
})

const userRoute = require('./routes/user.route');
app.use(userRoute.routes()).use(userRoute.allowedMethods());

app.listen(PORT,()=>{
    console.log(`App is running on URL: http://localhost:${PORT}`);
});