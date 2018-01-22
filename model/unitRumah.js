const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/unitRumah");
const Schema = mongoose.Schema;

var unitSchema = new Schema({
    tipeUnit : String,
    hargaUnit : String,
    stockUnit : String,
    statusUnit : String
});

var Unit = mongoose.model('unit', unitSchema);

module.exports = Unit;