const express = require("express");
const Unit = require("../model/unitRumah");
const router = express.Router();

router.get("/:id", (req, res) => {

    Unit.findById(req.params.id, (error, result) => {
        if (error) {
            res.statusCode(500).json(error);
        }
        else {
            res.json(result)
        }
    });

});

router.get("/", (req, res) => {

    Unit.find({}, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });
});

router.post("/", (req, res) => {

    let newObj = new Unit({
        tipeUnit: req.body.tipeUnit,
        hargaUnit: req.body.hargaUnit,
        stockUnit: req.body.stockUnit,
        statusUnit: req.body.statusUnit
    });

    newObj.save((error) => {
        if (error) {
            res.statusCode(500).send(error);
        }
        else {
            res.json(newObj);
        }
    });
});


router.delete("/:id", (req, res) => {

    Unit.findByIdAndRemove(req.params.id, (error, result) => {
        if (error) {
            res.statusCode(500).json(error);
        }
        else {
            res.json({ message: "Data deleted" })
        }
    });

});

router.put("/", (req, res) => {

    let newObj = {
        tipeUnit: req.body.tipeUnit,
        hargaUnit: req.body.hargaUnit,
        stockUnit: req.body.stockUnit,
        statusUnit: req.body.statusUnit
    };
    Unit.findByIdAndUpdate(req.body._id, newObj, (error, result) => {
        if (error) {
            res.statusCode(500).json(error);
        }
        else {
            res.json({ message: "Data Updated" })
        }
    });
});

module.exports = (function(){
    return router;
})();