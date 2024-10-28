import express from 'express';
import { addBookToWishlist, getWishlist } from '../controllers/wishlist.controller.js';

const router = express.Router();

// Add book to wishlist
router.post('/', addBookToWishlist);

// Get wishlist
router.get('/', getWishlist);

export default router;
