const express = require("express");
const bodyParser = require("body-parser");
const unitController = require("./controller/unitRumah");
const customerController = require("./controller/customer")

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use("/api/unit", unitController)
app.use("/api/customer", customerController)

app.listen(3001);