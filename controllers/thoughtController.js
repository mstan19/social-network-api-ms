const { User, Thought } = require('../models');

module.exports = {
    // Get all thoughts
    getAllThoughts(req, res) {
        Thought.find()
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
        },
// Get a thought
    getOneThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) =>
            !thought
                ? res.status(404).json({ message: 'No thought with that ID' })
                : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
// Create a Thought
//needs work
    createThought(req, res) {
        Thought.create(req.body)
        .then((thought) => {
            return User.findOneAndUpdate(
              { _id: req.body.userId },
              { $addToSet: { thought: thought._id } },
              { new: true }
            );
          })
          .then((user) =>
            !user
              ? res.status(404).json({
                  message: 'thought created, but found no user with that ID',
                })
              : res.json('thought created ')
          )
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
// Update a Thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
            !user
                ? res.status(404).json({ message: 'No Thought with this id!' })
                : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    }, 
// Delete a thought
//needs work
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
            !thought
                ? res.status(404).json({ message: 'No thought with that ID' })
                : User.deleteMany({ _id: { $in: thought.users } })
            )
            .then(() => res.json({ message: 'users and thoughts are deleted!' }))
            .catch((err) => res.status(500).json(err));
    }, 
// create a reaction to a thought
    createReaction(req, res) {
        Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { assignments: req.body } },
        { runValidators: true, new: true }
        )
        .then((thought) =>
            !thought
            ? res
                .status(404)
                .json({ message: 'No thought found with that ID' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
//delete a reaction by reactionId
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reaction: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
            !thought
                ? res
                    .status(404)
                    .json({ message: 'No thought found with that ID' })
                : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    }
}