# Tire fitment engine

The purpose of this challenge is to recreate the fitment engine that you see on tirebuyer.com.

Clicking the button on the home page fires an API call and returns a list of years (2018, 2017, 2016, etc.). This is already built in Angular and NGRX.

 _**Please fork this Stackblitz repo and send a link to your finished repo.**_

 [Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-fitment)

## Task 1

Style this list of years as a grid, similar to tirebuyer.com, when you click on "Year," under "Enter your vehicle information."

## Task 2

Clicking on one of the years should pass that value (e.g. "2015") to another API call, which will return a list of vehicle makes (Audi, Ford, Subaru, etc.). Display these in a similar grid format. 

Note: This Stackblitz uses dummy APIs which don't actually need params to work. However, please show how you would pass the params to the API call anyway and console log the param.

Repeat this process to also show vehicle model, trim, and options.


## Task 3:

Add a few lifecycle hooks to your components and explain why you would or would not use them.
