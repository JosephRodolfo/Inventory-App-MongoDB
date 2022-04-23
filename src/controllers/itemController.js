const Item = require('../models/item')
const express = require('express')
const router = new express.Router()

exports.post_item = ('/items', async (req, res) => {
    const item = new Item(req.body)

    try {
        await item.save()

        res.status(201).send(item)
    } catch (e) {
        res.status(400).send(e)
    }
})

exports.get_items = ('/items', async (req, res) => {
    try {
        const items = await Item.find({})
        res.render('layout', {items: items})

       // res.send(items)
       
    } catch (e) {
        res.status(500).send(e)
    }
})