const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Routes for reviews
router.post('/', reviewController.createReview);
router.get('/:reviewId', reviewController.getReviewById);
router.put('/:reviewId', reviewController.updateReview);
router.delete('/:reviewId', reviewController.deleteReview);

module.exports = router;