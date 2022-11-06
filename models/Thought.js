const { Schema, model } = require('mongoose');
const moment = require('moment')

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      minLength: 1,
      maxLength: 280,
      required: true,
    },
    //get
    createdAt: {
      type: Date,
      default: Date.now(),
      get: formatDate => moment(formatDate).format("MMM DD, YYYY [at] hh:mm a"),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Schema to create a reaction model
const reactionSchema = new Schema(
    {
      reactionId: { 
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now(),
        get: formatDate => moment(formatDate).format("MMM DD, YYYY [at] hh:mm a"),
      }
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );

reactionSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;