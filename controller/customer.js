const express = require("express");
const Customer = require("../model/customer");
const router = express.Router();

router.get("/:id", (req, res) => {

    Customer.findById(req.params.id, (error, result) => {
        if (error) {
            res.statusCode(500).json(error);
        }
        else {
            res.json(result)
        }
    });

});

router.get("/", (req, res) => {

    Customer.find({}, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });
});

router.post("/", (req, res) => {

    let newObj = new Customer({
        nama: req.body.nama,
        alamat: req.body.alamat,
        noTelepon: req.body.noTelepon,
        pekerjaan: req.body.pekerjaan
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

    Customer.findByIdAndRemove(req.params.id, (error, result) => {
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
        nama: req.body.nama,
        alamat: req.body.alamat,
        noTelepon: req.body.noTelepon,
        pekerjaan: req.body.pekerjaan
    };
    Customer.findByIdAndUpdate(req.body._id, newObj, (error, result) => {
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