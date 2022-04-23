var express = require("express");
var router = express.Router();
const Item = require('../models/item')

var item_controller = require('../controllers/itemController')














router.get("/", item_controller.get_items);

// router.get('/', function(req, res, next) {
//     res.render('layout', item_controller.get_items);
//   });

module.exports = router;



/* GET home page. */
