const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Basic validation
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      message,
    });

    const savedContact = await newContact.save();
    res.status(201).json({
      success: true,
      data: savedContact,
      msg: 'Message sent successfully!'
    });
  } catch (err) {
    console.error('Error saving contact:', err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
