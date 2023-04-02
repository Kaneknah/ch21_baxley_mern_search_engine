# ch21_MERN_search_engine_app

## Table of Contents:

- [Description](#description)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Credits](#credits)
- [License](#license)

## Description

This project was the refactoring of a RESTfull API application to a full MERN application utilizing starter code. The application is a online book search app, that allows a user to search for and saved books into their user file. The user can also delete these books. the application utilizes the MongooseDB, Express.js, React.js, and Node.js to be a full MERN application. the application will run on a Heroku server for this demonstration.

## Acceptance Criteria

GIVEN a social network API <br>
WHEN I enter the command to invoke the application <br>
THEN my server is started and the Mongoose models are synced to the MongoDB database<br>
WHEN I open API GET routes in Insomnia for users and thoughts<br>
THEN the data for each of these routes is displayed in a formatted JSON<br>
WHEN I test API POST, PUT, and DELETE routes in Insomnia<br>
THEN I am able to successfully create, update, and delete users and thoughts in my database<br>
WHEN I test API POST and DELETE routes in Insomnia<br>
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list<br>

## Installation

A user will need to instal the package.json modules in order to run this application. The user may do this by simply running "npm i" in the terminal. the user may also need to instal the apollo server by running "npm instal npm install apollo-server".

## Usage

![Alt text](./assets/images/Screenshot%202023-03-30%20190509.png)

The user will begin the application by entering "npm start" in the terminal. The user will then be presented with the front end UI that displays the main page of the application. The user will be able to login or create a user login by signing up. Once signed up, the user will be able to search books and save or delete them to their own database. The book API will utilize google as a vehicle for providing the list of books. <br>

## Contribution

N/A

## Testing

No testing was utilized for this project

## Credits

### Team Members:

- James Baxley | Github: [Kaneknah](https://github.com/Kaneknah)

### Technologies utilized:

- MongoDB
- React.js
- Express.js
- Node.js
- Dotenv.
- Heroku

### GitHub Link: <https://github.com/Kaneknah/ch21_baxley_mern_search_engine>

## License

Apache License 2.0
...
