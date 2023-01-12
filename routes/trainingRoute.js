const {Router} = require('express')
const {addTraining, updateTraining, deleteTraining, getTraining, getAllTraining, getTrainingBySpecify} = require('../controllers/training.js')


const router = Router()

router.get('/', getAllTraining)
router.get('/:id', getTraining)
router.get('/', getTrainingBySpecify)

//   //TODO:
     

router.post('/', addTraining)
router.put('/update/:id', updateTraining)
router.delete('/delete/:id', deleteTraining)


module.exports = router






