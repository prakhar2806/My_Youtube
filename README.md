# My_Youtube

This app uses youtube api's to SEARCH videos, find CHANNELID of a particular channel,

#Usecase 1: Adding a new channel

Click Add new channel to add the channel details if you have with you before hand  and click save and if not then dont worry youtube api's are there to help you. Just type the name of the youtube channel which you want to add and keep the channelId Input EMPTY, and click save.
The entry is added to the database with the channelId provided using youtube API .

#Usecase 2: Search videos

In the search bar panel, search for any keyword which you use regularly on youtube and this app woll provide you with top results for that search.


STEP 1

Accessing MongoDb:
 Using MOngoDb atlas requires to whilist IP of the computer.
 Hence, to run the application, systems ip need to be provided for accessing my mongoDb database.

STEP 2

> route to folder of server.js
> run server: npm start

server will start on 5000 port number

STEP 3

>From another cmd route to "client" folder 
>run npm start

client react will run on 3000

url: http://localhost:3000/
to see the app working






