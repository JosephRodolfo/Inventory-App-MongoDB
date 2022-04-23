const express = require('express')
const Item = require('../models/item')
const router = new express.Router()

// exports.post_item = ('/items', async (req, res) => {
//     const item = new Item(req.body)

//     try {
//         await item.save()
//         res.status(201).send(item)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// exports.get_items = ('/items', async (req, res) => {
//     try {
//         const items = await Item.find({})
//         res.send(items)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

router.get('/items/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const item = await Item.findById(_id)

        if (!item) {
            return res.status(404).send()
        }

        res.send(item)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/items/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'name']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!item) {
            return res.status(404).send()
        }

        res.send(item)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/items/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id)

        if (!item) {
            res.status(404).send()
        }

        res.send(item)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router