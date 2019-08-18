# Outfittr

An outfit generator that responds to your daily needs. 

http://outfittr.herokuapp.com

## Background and Overview

Outfittr is a Web App designed to take the guesswork out of choosing your outfit
for the day. This project will pull together a diverse sampling of the skills we've learned.    
Here are some challenges we foresee overcoming on our way to a finished product:

* Software Engineering: Implementation of the MERN tech stack to develop a fully
functional web app and associated logic for outfit selection.

* User Interface: Intuitive design to allow for a seamless user experience when 
using their Outfittr account and generating their outfits.

* Responsive: Being a Single Page App, Outfittr should be able to deliver generated
outfits rapidly and effectively by using front-end logic running in the client's
browser.

Outfittr is currently only serving men's clothing products and further functionality
for women's clothing selections will be addressed in later updates due to the more 
custom and less interchangeable nature of women's clothing. 

## Functionality and Minimum Viable Products

1. User Auth
    * functional Sign up and Login forms that switch on the landing page
2. Seeded Wardrobe
    * Wardrobe items and categories are seeded and functional in order to generate a random outfit.    
3. Wardrobe Item CRUD
    * Full create, show, edit, update, and delete functionality of all wardrobe items.
4. Outfit generation
    * Generate an outfit randomly at first
    * Automagically generate a new outfits based on user restrictions and inputs
    
### Backend

Our Backend utilizes MongoDB on an Express/Node stack. A Schema based database (noSQL) is efficient for our purposes: Loading a user profile, preferences, and a finite 'wardrobe' object.      
A "POJOs all the way down" philosophy also translates smoothly to our Frontend, the React/Redux cycle, preferring a flattened state. 

##### Frontend: React/Node.js

Our clothing items will be visually represented on a web app and users will be able to change selection option in order to make an appropriate and fashionable outfit for the day.

Technical challenges:
  - Organizing and displaying clothing items from all of the appropriate categories in our MongoDB
  - Constructing a display page for outfit generation that is both easy to use and aesthetically pleasing
  - Fetching items with the appropriate boolean values based on our criteria for selection e.g. (hot/cold, wet/dry, formal/informal)
  - Uploading clothing images. Images will have to be resized appropriately and we need to ensure we are getting images that will work well with the app

## UI/UX 

This app will heavily feature modals to make the user experience question free.
Modals will be used in the following places:
    * On the landing page, when displaying the team mates contact information
    * On the splash page for Wardrobe Item CRUD actions 
    * On the splash page for User show and update functionality

Landing page:
![LandingPage](/assets/images/Homepage.png)
The wireframe above shows the switching Sign Up and Login Form as well as the 
contact us button which displays a modal centered on the page of the group mates
info.

Splash Page:
![SplashPage](/assets/images/Homepage_2.png)
The wardrobe is the component on the right rendering category components which in
turn hold links to clothing category item components which render CRUD functionality
in a centered modal on the screen based on the original input action. 

The plus button on the clothing category will add a new clothing item to the clothing 
category, the input form for the new item will pop up in a modal as shown in the 
next wireframe.

Each clothing item will have a minus button next to it for fast deletion of items

Wardrobe CRUD:
![WardrobeCRUD](/assets/images/Homepage_3.png)
A user show/edit page will be available as a modal which is opened through an icon 
in the nav bar, allowing session destroy functionality as well.



## Group Members

**Nick Piper**,
**Sam Hecht**,
**Marshall Randolph**,
**Ian Ellison**

## Technologies

* NodeJS - JavaScript runtime environment
* ExpressJS - server and backend routing
* MongoDB - on the cloud via MongoDB Atlas
* ReactJS - dynamic DOM and frontend routing
* Redux - flux compliant frontend data store
