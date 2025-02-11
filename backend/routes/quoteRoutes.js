const express = require('express');
const { getRandomQuote, getUserQuotes, getAllQuotes, createQuote, updateQuote, deleteQuote } = require('../controllers/quoteController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/random', authMiddleware, getRandomQuote);
router.get('/all', authMiddleware, getAllQuotes);
router.get('/:username', authMiddleware, getUserQuotes);
router.post('/', authMiddleware, createQuote);
router.put('/:id', authMiddleware, updateQuote);
router.delete('/:id', authMiddleware, deleteQuote);

module.exports = router;
