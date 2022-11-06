const { Schema, model } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      //is this the same as trimmed?
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
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thoughts',
        },
    ],
    friends: [
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
    return this.friends.length;
  });

const User = model('user', userSchema);

module.exports = User;