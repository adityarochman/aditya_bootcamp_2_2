const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/customer");
const Schema = mongoose.Schema;

var customerSchema = new Schema({
    nama : String,
    alamat : String,
    noTelepon : Number,
    pekerjaan : String
});

var Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;