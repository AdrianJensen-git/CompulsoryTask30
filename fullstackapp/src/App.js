/*
Task:                App.js
Assigned to:         Admin
Date assigned:       09th July 2023
Due date:            09th July 2023
Task complete?       Yes
Task description:    Create an file called App.js
*/

import React from "react";
import './App.css';
import helmut from "helmut";

const express = require('express');
const app = express();
app.use(helmut());

const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

// I used coding shiksha to help with this.
// https://www.youtube.com/watch?v=CcqgGRol95U
function search() {

  const  api = fetch("https://docs.github.com/en/rest?apiVersion=2022-11-28");

  app.get('/', (request, respond) => {
    respond.render('App.js', {data: ''});
  });
  
  // Below uses the users name to search.
  app.get('/requestName', (request, respond) => {
    api(request.body.name)
    .then((data) => {
      console.log(data);
    });
  });

  // Below displays the returned information
  return (
    <h3> Please enter the name of the user you are looking for: </h3>,
    <form method='get' action="/requestName">
      <div className='div1'>
        <input type='text' id='search'/>
        <input type='submit' value='Enter' />
      </div>
      <div id='returns'>
        <ul>
        <li> Profile Picture: <img src="{data.avatar_url}"/> </li>
          <li> Name: {data.name} </li>
          <li> Email: {data.email} </li>
          <li> Bio: {data.bio} </li>
          <li> Repo: {data.repo} </li>
          <li> Description: {data.description} </li>
        </ul>
      </div>
    </form>
  ) // return
} // search

search();
export default App;
app.listen(3000);