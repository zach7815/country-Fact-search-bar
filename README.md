# Country Fact Search tool

This is a simple Search tool that displays some basic facts about all the countries of the world. 

## Table of contents

- [Overview](#overview)
  - [What I found challenging](#What-I-found-challenging)
  - [Screenshot](#screenshot)
  - [Link](#link)
- [My process](#my-process)
  - [Built with](#built-with)
    -[project status](#project-status)


## Overview
I had recently watched some videos on using the fetch API and I wanted to challenge myself to create a simple page that relayed facts about different countries using an API. 
The current version of this project is based of a tutorial from WebDev simplified, though with some modifications as I am using a different API and I am pulling and displaying a lot more data. 
The project also adds the feature to produce facts around a random country. 


###What I found challenging.
The API returns a lot of data, of which are different arrays with nested objects. So trying to extract the exact data I wanted was not as straightforward as my previous projects or exercises have been. 
Additionally as this is  a more complicated version of a search bar than the tutorial it is based on, it was much harder to filter out countries so as to only display the data a user types in.
Finally, the current version only shows 180 countries of the possible 250 returned by the API call. While I have found a way around this and I am working on it via the refactoring branch of this project, I haven't quite worked out why it is only returning 180 countries. 

### Screenshot

![](images/Desktop-View.png)
![](images/Mobile-View.png)

### Link
 [Live site](https://zach7815.github.io/country-Fact-search-bar/)

## My process
This project was originally based off a tutorial based by webdev simplified. However, I have modified it to use a different API. The API data is more complex that the tutorial and is harder to access and display. This project therefore
builds on the tutorial and uses the core concepts on how to make api calls using fetch. Initially, to build this project I followed the tutorial but quickly adapted it to meet my needs. I am currently working on refactoring it and changing 
how it pulls data from the API. This is because the current version of the project is too verbose and not in good keeping with DRY principles.  Therefore, I am looking to adapt the current code to take advantage of 
Destructing and Template literals that should allow me to write cleaner and easier to maintain code. 


### Built with

- HTML 5
- Grid
- Flexbox
- Fetch API

###project status

I am currently working on refactoring the code to make it cleaner, and easier to read. In addition I am working on solving the issue of the API currently only displaying 180/250 countries. 

