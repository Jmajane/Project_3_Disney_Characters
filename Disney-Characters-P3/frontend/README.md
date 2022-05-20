## APP DESCRIPTION
My app is to search through disney characters. First the characters will be in alphabetical order.  When you click on a picture it will take you the character page showing you additional information about the character. You will be able to see all information about the character provided by disney.  


## WIREFRAMES
![Screen Shot 2022-05-19 at 11 11 10 AM](https://user-images.githubusercontent.com/100162086/169337356-42839370-cf10-430e-94e8-dac9a735e889.png)
![Screen Shot 2022-05-19 at 11 22 05 AM](https://user-images.githubusercontent.com/100162086/169337368-5768827c-55c4-42c1-b0a8-902f51468cbd.png)

## TECHNOLOGIES USED
- REACT
- FLEXBOX
- BOOTSTRAP

## GETTING STARTER
- Open the app/webpage and click on a character to see their information
- Additional pages at the bottom to go though all characters provided

## MVP USER STORIES
- As a user, I want to be able to see images of the all the disney characters.

- As a user, I want to be able to see what movies/video games the chacter has been in as well if they have any park attractions.

- As a user, I would like to be able to switch pages and go throught all of the character.


## API
-https://api.disneyapi.dev/characters

## PLAYERS RESPONSE
{
  "data": [
    {
      "films": [],
      "shortFilms": [],
      "tvShows": [],
      "videoGames": [],
      "parkAttractions": [],
      "allies": [],
      "enemies": [],
      "_id": 6,
      "name": "'Olu Mel",
      "imageUrl": "https://static.wikia.nocookie.net/disney/images/6/61/Olu_main.png",
      "url": "https://api.disneyapi.dev/characters/6"
    },
    {
      "films": [],
      "shortFilms": [],
      "tvShows": [
        "Gravity Falls"
      ],
      "videoGames": [],
      "parkAttractions": [],
      "allies": [],
      "enemies": [],
      "_id": 7,
      "name": ".GIFfany",
      "imageUrl": "https://static.wikia.nocookie.net/disney/images/5/51/Giffany.png",
      "url": "https://api.disneyapi.dev/characters/7"
    },
    {
      "films": [],
      "shortFilms": [],
      "tvShows": [
        "Lilo & Stitch: The Series",
        "Stitch!"
      ],
      "videoGames": [
        "Disney Tsum Tsum (game)"
      ],
      "parkAttractions": [],
      "allies": [],
      "enemies": [],
      "_id": 10,
      "name": "627",
      "imageUrl": "https://static.wikia.nocookie.net/disney/images/8/80/Profile_-_627.png",
      "url": "https://api.disneyapi.dev/characters/10"
    },
    {
      "films": [],
      "shortFilms": [],
      "tvShows": [],
      "videoGames": [],
      "parkAttractions": [
        "The Timekeeper"
      ],
      "allies": [],
      "enemies": [],
      "_id": 11,
      "name": "9-Eye",
      "imageUrl": "https://static.wikia.nocookie.net/disney/images/7/77/9-eye.jpg",
      "url": "https://api.disneyapi.dev/characters/11"
    },

- NOTE - this response returned 800+ lines of code, this is only a sample.


## COMPONENT HIERARCHY

![Screen Shot 2022-05-19 at 11 30 24 AM](https://user-images.githubusercontent.com/100162086/169337456-8c9ef06e-4851-4397-a3e2-0267b484e051.png)


## POTENTIAL ISSUES
- a user cannot use the pagination at the bottom and refresh the browser. This will bring you back to the 1st page as the URL is not being changed with pagination.

- Hitting the back button in the browser will bring you back to the previous URL.  If using pagination it wont bring you to the previos page.

- App deployed on Netlify when refreshing browser on a character page the wepbage will crash and throw an error of page not found.

## STRETCH GOALS  
- creating a search feature
- connection a MongoDB database 
- using RegEx to go through the database being able to search by name

## CONTRIBUTION GUIDELINES
- Please feel free to fork an clone my code.
- Always looking to improve any code that I have written/created.  
- For anyone looking to contribute please submit an issue or reach out via linkedin.


## SCREENSHOTS OF WEBPAGE

![Screen Shot 2022-05-19 at 11 48 21 AM](https://user-images.githubusercontent.com/100162086/169345593-028d8c2e-f484-4d38-a5a8-2cb661102e06.png)

![Screen Shot 2022-05-19 at 11 49 39 AM](https://user-images.githubusercontent.com/100162086/169345606-f9a94be5-f983-4812-9656-a36ab3927620.png)

![Screen Shot 2022-05-19 at 11 50 07 AM](https://user-images.githubusercontent.com/100162086/169345619-d78997f8-4856-4c3e-b5de-7d47516b047b.png)




