const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await Thought.deleteMany({});

  // Drop existing students
  await User.deleteMany({});

  // Create empty array to hold the students
  const user = [];
  const thought = getRandomThought(10);
  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 10; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    

    const username = getRandomUsername();
    const email = `${username}@mail.com`;
console.log(username)
    user.push({
      username,
      email,
    });
  }

  // Add students to the collection and await the results
  await User.collection.insertMany(user);

  // Add courses to the collection and await the results
  await Thought.collection.insertOne({
    thoughtText: thought,
    user: [...user],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(user);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
