const express = require('express');
const path = require('path');
const upload = require('../utils/fileUpload');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// @route   POST /api/upload
// @desc    Upload a file
// @access  Private
router.post('/', protect, upload.single('file'), (req, res) => {
  res.json({
    success: true,
    filePath: `/${req.file.path.replace(/\\/g, '/')}`,
    fileName: req.file.filename
  });
});

module.exports = router;
