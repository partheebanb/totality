# Introducing Totality!

Totality is an easy-to-use goal/habit tracker for iOS and Android developed using React Native, Expo and Formik.

At the moment there is only a unitless daily tracker that has to be reset manually, but automatic resets, units and weekly, monthly and annual trackers are on the way along with history! It will also provide a mechanism to break down large goals so you have a plan to achieve them. After all, you can't learn a language in a day. 

And let me know if you have any ideas or found any bugs :)

### Installation Guide

To use on your local machine first install <a href="https://nodejs.org/en">Node.js</a>

Then run 

`npm install`

to install the dependencies. After this is complete run 

`npm start`

The Expo development environment will open up in your browser. Choose 'Run in web browser' to run locally. You can also use a simulator or install Expo Go on your mobile device and scan the QR code provided by Expo to run directly it on your phone.

### Here's the default view

<img src="./screenshots/default.PNG" height=320 width=180/>

### You can add goals

Add any goal you want! You can also set your own targets.

<div>
  <img src="./screenshots/keyboard.PNG" height=320 width=180/>

  <img src="./screenshots/addNewTasks.PNG" height=320 width=180/>
</div>


### Update them using the + and - buttons

The UI for each goal is color-coded. It's pink if you've completed less than 50% of your goal, yellow if less than 100% and green if you've completed that goal. The tracker at the top updates automatically whenever you complete a goal.

<img src="./screenshots/updatedTasks.PNG" height=320 width=180/>

### Remove them by holding down for 2 seconds

<img src="./screenshots/deletedTask.PNG" height=320 width=180/>

### And reset your progress by pressing "End day"

<img src="./screenshots/endedDay.PNG" height=320 width=180/>


