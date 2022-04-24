const Item = require("../models/item");
const express = require("express");
const router = new express.Router();

exports.post_item = async (req, res) => {
  const item = new Item({
    ...req.body,
  });

  try {
    await item.save();

    res.status(201);

    res.redirect("/");
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.delete_item = async (req, res) => {
  try {
    const item = await Item.findOneAndDelete({
      _id: req.params.id,
    });

    if (!item) {
      return res.status(404).send();
    }

    res.redirect("/");
  } catch (e) {
    res.status(500).send();
  }
};

exports.get_items = async (req, res) => {
  try {
    const items = await Item.find({});
    res.render("index", { items: items,
                          edit: false });
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.edit_item = async (req, res) => {
  try {

    
    const item = await Item.findByIdAndUpdate({_id: req.params.id,
    }, {...req.body});
   res.redirect("/");



  } catch (e) {
    res.status(500).send(e);
  }
};
