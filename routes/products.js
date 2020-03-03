// CURD Operations On Products
var express = require('express');
var router = express.Router();
var product_services = require('../controllers/product');
  
//Create Product 
router.post('/', function (req, res) {
product_services.create_product(req,res);
})

// Update Product
router.put('/:id', function (req, res) {
product_services.update_product(req,res);
})

// Delete Product
router.delete('/:id', function (req, res) {
product_services.delete_product(req,res);
})

// Read Product
router.get('/:id', function (req, res) {
  product_services.show_user_products(req,res);
})

// Read All Products
router.get('/', function (req, res) {
  product_services.show_all_products(req,res);
})

module.exports = router;