# Journal App 
A responsive single page application allowing registered users to create and use personal journals. Regsitered users can peform all CRUD operations when it comes to their journals and the journal entries within them. This app is built with the MEVN stack - Mongo/Express/Vue/Node. The landing page is a recreation of the landing page of [penzu.com](https://penzu.com/).

Here you can find the **[REST API](https://github.com/rpashev/journal-app-REST)** that I have built for the app.    
> Live demo coming soon

## Table of Contents
* [General Info](#general-information)
* [Challenges](#challenges)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)


## General Information
Journaling is an interest of mine so I was very keen on creating an app that I am passionate about while improving my web development skills. CRUD operations are essential for most web applications and I had a great opportunity to practice implementing these features in this single page application. It was an amazing learning experience to work on connecting the Vue front end with the Express/Mongo [Backend](https://github.com/rpashev/rest-movie-apps) and making every feature work with error handling. This is the most complex [REST API](https://github.com/rpashev/journal-app-REST) that I have built so far and I found myself dealing with plenty of challenges. The most challenging project I've built to date.


## Challenges
- coming up with a solution for the relationship between user-journal-entry was challenging in terms of data models/schemas
- error handling on the backend and consuming it on the frontend was often frustrating but nevertheless rewarding
- first time I've used VueX + combining it with persistent state with local storage was challenging
- first time I've used the released with Vue 3 Composition API so it took time to get used to but I liked the new approach 
- implementing the entry filters with the help of "dayjs" was a challenge as comparing dates turned out to be not a trivial task, especially for custom date ranges
- first time I've implemented front end pagination
- implementing an external text editor with a custom configuration took a deep dive into the documentation and stackoverflow
- coming up with design ideas for the logged in part was hard and ultimately not very successful
- initially not thinking about responsive design proved to be a grave mistake as the CSS ended up messy and the media queries overblown and inconsistent


## Technologies Used  

### Front End
- Vue 3 with Composition API
- Vue Router
- VueX
- Vue3-editor
- Axios
  
 ### Back End
 - Node
 - Express 
 - MongoDB
 - Mongo Atlas
 - Mongoose
 - JWT
 - Axios


## Features
### All users are able to:
- view all of the 8 purely informational pages

### Anonymous users are able to:
- view the landing page
- register
- login

### Authenticated users are able to:
- create multiple journals
- edit a journal's name and description
- delete a journal
- view their journals
- view a single journal with its entries
- create a journal entry with a text editor
- edit a journal entry
- delete a journal entry
- view a journal entry
- filter entries by date including a custom date range filter
- filter for the amount of entries showing on a page
- search entries by title/content
- logout


## Setup
### To get a local copy up and running follow these simple steps:

1. Make sure you have **`node`** and **`npm`** installed globally on your machine.  

3. Clone the repo  
    ### `git clone https://github.com/rpashev/vue-journal-app.git`  

3. Install NPM packages  
    ### `npm install`    
  
4. Run the app in development mode with hot reloading  
    ### `npm run serve`  

5. You can view the app on [http://localhost:8080](http://localhost:8080)  
 
7. To build for production run the following command  
    ### `npm run build`


## Room for Improvement
- redesign the logged in part of the app 
- use a mobile first approach when styling and preferebly switch to SCSS
- refactor some of the more repetitive code on the front end by implementing composables/hooks when appropriate
- implement an "Auto Logout" functionality on JWT expiration
- break up some of the larger components
- implement a backend pagination for the journal entries
- implement a feature that allows users to add images to their entries


## Contact
Created by me - feel free to contact me!
