const { Schema, model } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      max_length: 50,
    },
    //need to validate
    email: {
      type: String,
      required: true,
      unique: true,
      max_length: 50,
      //match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    //   validate: {
    //     validator:,
    //     message: props => `${props.value} is not a valid email`
    //   }
    },
    thought: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
    ],
    friend: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property
userSchema.virtual('friendCount').get(function () {
    return this.friend.length;
  });

const User = model('User', userSchema);

module.exports = User;
