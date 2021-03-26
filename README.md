# AMAZON FULL-STACK

This is the Amazon Clone full stack, built by React on the frontend, backend designed by Nodejs, hosted on Firebase, among some features below:

- The Home page
- The Checkout page
- Total price in cart
- The Login page
- User authentication
- The payment page
- Payment processing

This website is deployed at https://clone-ed564.web.app/

When hosting our local app into the link above, there is an issue with ES6. Thus, when the customer place an order, proceed to checkout, enter the credit/debit card, click on "Buy Now" button, it will display "processing". I will figure out with the functions firebase.

However, it runs successfully on the local machine. You can follow the instruction below:

- Clone my project into your local machine: <strong>git clone "https://github.com/tuyenphk/amazon-fullstack.git"</strong>
- Run on the front end first: <strong>cd "folder located"</strong> then <strong>npm install</strong> then <strong>npm start</strong>
- Firebase Console: create the project, choose Web App and then copy <strong>Config Firebase SDK</strong> into firebase.js
- Authentication: choose "Authentication" in Firebase Console, then <strong>enabled</strong> the Email/Password
- Remember to run firebase in your local project: <strong>npm install -g firebase-tools</strong>
- Go to https://stripe.com/, it is used for navigating the creadit/debit card information. Sign in this website and go to the "Dashboard", choose "Developers" mode on the left side-bar, then API key. At this page, you will get the "Publishable Key" and "Secret Key"
- The "Publishable key" will be added into the App.js
- Create the Functions Firebase (backend for payment page): <strong>firebase init</strong> then choose <strong>Functions</strong>
- When the backend folder is created, add the "Secret key" into the functions/index.js at stripe
- Run backend: <strong>cd "backend located"</strong> then <strong>npm install express cors stripe</strong> then <strong>firebase emulators:start</strong>
- Remember to run both frontend and backend so that when clicking on "Buy Now" button, the confirmation order will be displayed.