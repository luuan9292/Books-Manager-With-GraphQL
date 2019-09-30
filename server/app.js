const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//allow cross-origin request (cho phep 2 host khac nhau lay du lieu o day la port 4000 cua graphql va port 3000 cua reactjs)
app.use(cors());

//connect to Atlas MongoDB Database

const atlasUrl = "mongodb+srv://luuan9292:mongo1992@cluster0-bvhj3.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(atlasUrl, { useNewUrlParser: true }, () => {
    console.log("DB Connected");
});

//middleware
app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true
    })
);

app.listen(4000, () => {
    console.log("now listening for requests on port 4000");
});
