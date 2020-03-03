// CURD Operation on Review
var express = require('express');
var Review_services = require('../controllers/review');
var router = express.Router();
    
//Create Review 
router.post('/', function (req, res) {
    Review_services.create_review(req,res);
})

// Update Review
router.put('/:p_id/:id', function (req, res) {
    Review_services.update_review(req,res);
})

// Read Review
router.get('/:p_id', function (req, res) {
    Review_services.show_product_reviews(req,res);
})

// Delete Review
router.delete('/:p_id/:id', function (req, res) {
    Review_services.delete_review(req,res);
})

module.exports = router; 