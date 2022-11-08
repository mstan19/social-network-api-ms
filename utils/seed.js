const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing Thought
  await Thought.deleteMany({});

  // Drop existing User
  await User.deleteMany({});

  // Create empty array to hold the users
  const user = [];
  const thought = getRandomThought(10);
  // Loop 10 times -- add users to the users array
  for (let i = 0; i < 10; i++) {
    

    const username = getRandomUsername();
    const email = `${username}@mail.com`;
console.log(username)
    user.push({
      username,
      email,
    });
  }

  // Add user to the collection 
  await User.collection.insertMany(user);

  // Add thought to the collection 
  await Thought.collection.insertOne({
    thoughtText: thought,
    user: [...user],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(user);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
