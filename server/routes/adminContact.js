// // const express = require('express');
// // const router = express.Router();
// // const Contact = require('../models/contactModel'); // adjust path if needed

// // // GET all contact messages (admin only)
// // router.get('/contacts', async (req, res) => {
// //   try {
// //     const contacts = await Contact.find().sort({ submittedAt: -1 });
// //     res.json(contacts);
// //   } catch (err) {
// //     res.status(500).json({ message: 'Server error', error: err });
// //   }
// // });

// // module.exports = router;
// const express = require('express');
// const router = express.Router();
// const Contact = require('../models/contact'); // Adjust the path if needed

// // GET all contacts — Admin access
// router.get('/', async (req, res) => {
//   try {
//     const contacts = await Contact.find().sort({ submittedAt: -1 });
//     res.status(200).json(contacts);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to fetch contacts", error: err.message });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const Contact = require('../models/contact'); // adjust path if needed

// GET all contacts for admin
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ submittedAt: -1 });
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch contacts", error: err.message });
  }
});

module.exports = router;
