var express = require('express');
var router = express.Router();

/* GET defender-game page. */
router.get('/', function(req, res, next) {
  res.render('defender-game', { title: 'davidblatcher.co.uk' });
});

module.exports = router;
