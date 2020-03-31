This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React Test App

Test task for checking the initial skills: react, redux, react-router

## Task description

- Implement an application that can display the following pages:
- / - home
/login - login and password entry page
/news - news page (any information of the same type)
Just show some
/profile - a page with free text, unavailable without authorization
On the site, in the header or basement, implement the links:
To the main (/)
News (/ news)
- https://newsapi.org/ - use this open api to show any random news.
Profile (/ profile)
If the user clicks on the &quot;profile&quot; page and he is not &quot;authorized&quot; - throw on the / login page
The login form (/ login) accepts fake data:
username: admin
password: 12345
If other data is entered, the following messages are displayed:
The username or password you entered is incorrect
If the correct data is entered, then redirect to the / profile page
User authorization information can be stored in localStorage, with a simple true / false parameter. The database
does not need to be implemented.
Also feel free to use Firebase to solve the authentication part, is task is to easy for you.
Everything you need, throw through Redux. Take your own decision what parts should be covered with Redux
Design (design) is not important just use some css framework like (https://bulma.io/ or https://getbootstrap.com/).
Make it so that you can comfortably watch an example in a browser.

## Technologies implemented

* [React](https://reactjs.org/)
* [React Router](https://reacttraining.com/react-router/)
* [Redux](https://redux.js.org/)
* [Firebase](https://firebase.google.com/)
