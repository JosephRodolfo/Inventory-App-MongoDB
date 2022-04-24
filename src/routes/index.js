var express = require("express");
var router = express.Router();
const Item = require('../models/item')
router.use(express.urlencoded());
router.use(express.json());    

const item_controller = require('../controllers/itemController')


router.get("/", item_controller.get_items);



router.get("/new", (req, res) => {
    res.render("form");
  });



 router.post('/new', item_controller.post_item) 

 router.post('/items/delete/:id', item_controller.delete_item)
module.exports = router;



