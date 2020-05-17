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

## Technologies

* NodeJS - JavaScript runtime environment
* ExpressJS - Server and backend routing
* MongoDB -  noSQL DB on the MongoDB Atlas Cloud
* ReactJS - dynamic DOM and frontend routing
* Redux - flux compliant frontend data store

## Technical Challenges

* This group project was an excellent learning opportunity to expand our knowledge of the Git version control sofware. Merging, pulling, and branching are all invaluable tools to control group dynamics. 
* Creating modular, extensible react components greatly streamlined our build process. Our [Garment Box](frontend/src/components/garments/boxes/garment_box.js) template supports every individual item, and can easily accomodate more.
* Advanced control of React lifecycle methods within nested components was another skill I learned, not just `componentDidMount()` but also `componentWillReceiveProps(newState)` and `componentWillMount()`. A useful trick here is to only set state if the new state differs, this avoids being stuck in an infinitely updating loop.
* Another issue I faced was JavaScript's inability to compare objects; they have no uniquely identifiable object id. After researching this shortcoming of the programming language, I came up with a solution. I marked the objects, each representing a clothing item or outfit, with an extra property representing its original index number.

        let tops = this.props.tops.map(a=> Object.assign({}, a))
        let pants = this.props.pants.map(a=> Object.assign({}, a))
        let topsI = tops.map((top, index) => (
        top.index = index
        ))
        let pantsI = pants.map((pant, index) => (
        pant.index = index
        ))
    The array of clothing items is filtered depending on user input, changing the indices within the data structure.       
    This solution allows me to track my objects and efficiently retrieve them from the props array, as indexing is an O(1) operation.

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




