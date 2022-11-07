const router = require('express').Router();

const {
    getAllThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// /api/thought
router.route('/').get(getAllThoughts).post(createThought);

// /api/thought/:thoughtId 
router.route('/:thoughtId')
.get(getOneThought)
.put(updateThought)
.delete(deleteThought);

//  /api/thought/:thoughtId/reaction 
router.route('/:thoughtId/reaction')
.post(createReaction);

// /api/thought/:thoughtId/reaction/:reactionId 
router.route('/:thoughtId/reaction/:reactionId')
.delete(deleteReaction);


module.exports = router;