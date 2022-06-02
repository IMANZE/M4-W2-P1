# M4-W2-P1
 Below are the details of this exercise;
 PICTURE GALLERY EXERCISE
Starting from the current bootstrap layout, implement as many of the following features as you can

 

FIRST STEPS:
Download the template you find at the bottom of this page.
Create an account on pexels to retrieve your API key: https://www.pexels.com/api/new/ You can find the API key by hovering on your profile picture and then on Image and video API.
The key needs to go into the headers of your HTTP request, using the Authorization property:
{Authorization: "YOUR API KEY"}
This should be enough to make your GET request successful

 

⚠️HINTS!⚠️
Test Pexels APIs and Authorization with Postman first
You can replace the images src attribute for making your pictures appear on button click, 
or you can use template literals to re-create all the cards from scratch.
Use arrow functions to practice them!
💻EXERCISES:
 

 1) When pressing on Load Images button, load the pictures from 
https://api.pexels.com/v1/search?query=[your-query]   2) When pressing on Load Seconday Images, load the pictures from 
https://api.pexels.com/v1/search?query=[your-secondary-query]

3) The Edit button should be replaced with a "Hide" button. 

4) When the hide button is pressed, the whole picture card should disappear.

5) Replace the "9 mins" string in the card template with the ID of the Image    6) Add in the "jumbotron" a search field. Use the value of the search field to search new images 
and replace the existing ones.

💻EXTRAS:
Handle API errors gracefully, using alert components with a custom message inside
Add a carousel at the bottom of the page with images from another API call
When the user clicks on the view button inside a card, open that image in a modal
💻MORE EXTRAS:
Use the .map method to create, from your API response, an array containing just the url strings (you can display the result with a console.log)
Use the .filter method to modify the result of the API call. Keep only the images from a specific author or your chose (you can display the result with a console.log)
 

Docs for the search endpoint: https://www.pexels.com/api/documentation/?language=javascript#photos-search
