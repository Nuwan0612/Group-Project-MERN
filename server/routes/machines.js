const express = require('express')
const {
    getMachines,
    getMachine,
    createMachine,
    deleteMachine,
    updateMachine
} = require('../controllers/machineController')

const router = express.Router()

// GET all machines
router.get('/', getMachines)

// GET a single machine
router.get('/:id', getMachine)

// POST a new machine
router.post('/', createMachine)

// DELETE a machine
router.delete('/:id', deleteMachine)

// UPDATE a machine
router.patch('/:id', updateMachine)

module.exports = router