# Outfittr

An outfit generator that responds to your daily needs. 

placeholder for heroku link

## Background and Overview

Outfittr is a Web App designed to take the guesswork out of choosing one's outfit
for the day. This project will pull together some challenges to create a finished
product. These challenges include:

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
    * Wardrobe items and categories are seeded and functional in order to generate
    a random outfit.
3. Outfit generation


##### Frontend: React/Node.js

Our clothing items will be visually represented on a web app and users will be able to change selection option in order to make an appropriate and fashionable outfit for the day.

Technical challenges:
  - Organizing and displaying clothing items from all of the appropriate categories in our MongoDB
  - Constructing a display page for outfit generation that is both easy to use and aesthetically pleasing
  - Fetching items with the appropriate boolean values based on our criteria for selection e.g. (hot/cold, wet/dry, formal/informal)
  - Uploading clothing images. Images will have to be resized appropriately and we need to ensure we are getting images that will work well with the app



## Group Members & Work Breakdown

**Nick Piper**,
**Sam Hecht**,
**Marshall Randolph**,
**Ian Ellison**

### July 13 and 14
  - User Auth -  **Full Team**
  - Decide on MVP's and app overview - **Nick**
  - Proposal - **Full Team**  

### July 15 - Continue and complete the basic work from Sunday - **All**
  - Push frontend to project **Sam and Marshall**
  - Front end for landing page **Ian**
  - Decide which data to save in database, and how to structure it **All will discuss**
  - Finish wireframes and general overview
  - Seed database - **Full Team**

### July 16

  - Finish backend for Wardrobe/Outfit Generation **Sam**
  - Finish Frontend for Wardrobe/Outfit generation page

### July 17
  - Production Readme **Full Team**
  - Polish up CSS
## Technologies

### Backend

Our Backend utilizes MongoDB on an Express/Node stack. A Schema based database (noSQL) is efficient for our purposes: Loading a user profile, preferences, and a finite 'wardrobe' object.      
A "POJOs all the way down" philosophy also translates smoothly to our Frontend, the React/Redux cycle, preferring a flattened state. 