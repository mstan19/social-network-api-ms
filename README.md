# social-network-api-ms

## Table of Contents
-[Description](#description) 
-[Installation](#installation) 
-[Usage](#usage)
-[License](#license)
-[Contributing](#contributing) 
-[Tests](#tests) 
-[Questions](#questions) 
-[Depolyment](#depolyment)

## Description of the Project
The purpose of the application is to build API for a social network. This dynamic application allows users to post their thoughts and add friends. Each user has a username and valid email. Also, users can react to other users' thoughts; this is called reaction. This is done using HTTP requests: get, post, put, and delete when using user and thought models. If the user is deleted, then all of their assocaited thoughts will be deleted as well. This application uses moment to create the date when a user posts a thought or reaction. 
 
This application uses Node.js, MongoDB, Mongoose, Moment, and Express to run the application. This application requires you to understand package.json and its node_modules. In additon to that, gitignore file is important to use so certain folders and files are not upload to GitHub. For example, node_modules should not be uploaded to GitHub since this folder gets created during the installition process. Lastly, this project stands out since the application has its own server and can effectively retrieve data from Mongo's database called social media database.

## Installation
To create this project, follow these several steps. This application uses Node.js, MongoDB, Mongoose (verison 6.7.1), and Express (verison 4.18.1). Step one, download Node.js. Next go to the terminal of the index.js and type this command ```npm install```. This creates package.json file and its dependencies. 


## Usage
To use this application, open the terminal, respective to the file. Run the ```npm run seed``` to populate the data tables with its respective seeds. Finally, type this command in the terminal ```nodemon server.js``` to run the application. This allows the user to perform any HTTP method on blogs, user, and comments..

This is what the Social Network API's database looks like.
//NEEDS PIC
![Social Network API mock-up](./assets/images/mockuppic.png)

## License
This application does not require any licenses.

## Contributing
If you would like to contribute to this project, please email me. My email can be found in the Questions section.

## Tests
Currently, there is no tests for this project.

## Questions

For more information about this application, please email me at melissastan91@gmail.com. Interested in my work? Checkout my GitHUb repositories. My GitHub username is mstan19, and here is my GitHub profile: https://github.com/mstan19.

## Depolyment
Click on this link for deployed application
https://github.com/mstan19/social-network-api-ms
