const username = [
    'capatin_Jill21',
    'bigMeatball_45',
    'catWoman_78',
    'sillymemes_85',
    'supercat_92',
    'spadaee_55',
    'impasta_75',
    'superWoman_78',
    'sillycat_85',
    'queen_122',
];

const email = [
    'professionalemail@mail.com',
    'sunnyshine@email.com',
    'student@email',
    'catchthesepaws@mail.com',
    'email@email.com',
    'random@mail.com',
    'junkmail@email.com',
    'teacher@email',
    'princess@mail.com',
    'prince@email.com',
];

const thought = [
    'i am planning to travel sometime next year. These are my cuurent pics of the places that i have been to',
    'my dog decided to get dirt when i went on the hike',
    'family road trippppp',
    'i am glad i woke up early enough to see the sunset',
    'hands down the best food ever',
    'so i tried an escape room today... it was actually pretty fun',
    'at the beach with the fam',
    'fun day at six flags',
    'i finally graduated!!!!',
    'i finally got a kitten',
];

const reaction = [
    'cool thought',
    'i have not thought about that',
    'are you sure that happened?',
    'woahhhhh cool man',
    'yooo i wanna go!!',
    'Where was this?',
    'you look so pretty!!!',
    'Man that was a fun time',
    'cute',
    'interesting',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)]

const getRandomUsername = () =>
  `${getRandomArrItem(username)} `;

// Function to generate random assignments that we can add to student object.
const getRandomThought = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
    thought: getRandomArrItem(thought),
    reaction: getRandomArrItem(reaction),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUsername, getRandomThought };