const express = require('express')


const {
    getRooms, 
    getRoom, 
    createRoom, 
    deleteRoom, 
    updateRoom
} = require('../controllers/roomControllers')

const router = express.Router()

// GET all workouts 
router.get('/', getRooms)

// GET a single workout
router.get('/:id', getRoom)

// POST a new workout
router.post('/', createRoom)

// DELETE a new workout
router.delete('/:id', deleteRoom)

// UPDATE a new workout
router.patch('/:id', updateRoom)

module.exports = router
