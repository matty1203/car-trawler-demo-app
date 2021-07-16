# Car Trawler Static APP(Interview Purpose)
***
This application is developed for interview purpose based on the requirements given by th interviewer.

***

## Table of Contents
1. [General Info](#general-info)
2. [Packages Used](#packages-used)
3. [Installation](#installation)
4. [File Directory Explanation](#file-directory)

## General Info
***
### Requirements Given
1. Parse message from URL feed 
2. Create a visual representation of the list of cars using JavaScript , HTML5 and SASS techniques. 
3. Each car block must contain all attribute data supplied in feed e.g. Vendor, Passenger, Quantity, and Fuel Type etc. 
4. When you click a car you should be presented with a page showing information for just that car ( can be the same information as on the full car list ) 
5. Default order of cars must be driven by ‘Price’ with a dropdown to be able to sort it.
6. Extract the Pickup/Return information and display as ‘Legend’ above car list. 
7. Focus on a scalable/accessible solution .

### Screenshots
![Home Desktop View](/screenshots/home-desktop.png)
![Home Mobile View](/screenshots/home-mobile.png)

## Packages Used
***
List of packages used within this project:
* [bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
* [parcel-bundler](https://parceljs.org/getting_started.html)
* [sass](https://sass-lang.com/install)
* [@babel/core](https://babeljs.io/docs/en/babel-core)
* [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime)
* [@babel/runtime-corejs2](https://babeljs.io/docs/en/babel-runtime-corejs2)


## Installation
***
1. You can clone the repository by using the below code
```
$ git clone https://github.com/matty1203/car-trawler-demo-app
```

2. Run the npm install 
```
$ npm install
```

3. To Run locally
```
$ npm run dev
```

4. To generate the production build
```
$ npm run build
```

## File Directory Explanation

In this Directory there are mainly three folders to explain.
1. Public
2. Src

### Public
This folder have ```index.js``` file and an absdtracts folder which contains the common ```.scss``` files that are used.

#### Abstracts Folder
1. _colors.scss : Contains all the color varibale sused in the project.
2. _mixins.scs : common mixins used for this project.
3. _responsive.scss : contains a mixin of media query to make the code more understandable.
4. _utils.scss : Common CSS classes that are used in this project.

### src 
This folder contains the JS file and a scss file of each module and a service folder.
1. app.js and app.scss : They are the main Javascript and SCSS files in this project.
2. cars-list, car-info, top-bar : They are the different modules used in this project.
3. services-js : THis folder contains all the common javascript functions that are used in different modules of this project.

#### data-tdyr.js
It is a common javascript file created to make the JSON data more readable javascript objects. This function  helps for data tidying and sorting.


