# FriendFinder
Matching App (Dating APP) That uses a users responses from a survey to calculate the best match for a user. Will Use Express Routing to Handle User Input and Requests. 

## Notes About Running Friend Finder 
 * Enter npm i or npm install to install the necessary node packages for the app.
 * __'express'__ was used for Routing, __'body-parser'__ was used for parsing and sending data through routes.
 * The Defualt Port written in the app is 8080. Connect using localhost: 8080, or change configuration on server.js.

## Ways to run 
 
 * __"cd [directory-name]"__ of the directory where the __"server.js"__ file is. 
 * use __"node server.js"__ or __"nodemon server.js"__ to start the server

## Survey Route

### localhost:8080/survey
* Displays A Survery Form for users to fill out to find their match. 
* Once the survey is completed their match will be displayed. 

![bamazonCustomer gif](/README_GIFS/survey.gif)

## API Route

### localhost:8080/api/friends
* Shows JSON Data of the Friends List on the server. 

![bamazonCustomer gif](/README_GIFS/api.gif)

## Home Route (Any Other Route)

### localhost:8080/* (Anything else localhost:8080/[Anything else])

* Shows The Home Page for the Friend Finder App. Just a landing page for the user. 

![bamazonCustomer gif](/README_GIFS/home.gif)

