//jshint esversion:6

const express = require("express");
const router = express.Router();

const product_controller = require("../controllers/product.controller");

//router.get("/create", product_controller.create);

router.post("/create", product_controller.product_create);

router.get('/:id/details', product_controller.product_details);

router.put('/:id/update', product_controller.product_update);

router.delete('/:id/delete', product_controller.product_delete);


module.exports = router;
