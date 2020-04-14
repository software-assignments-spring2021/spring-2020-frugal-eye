import React, {useState, useEffect} from 'react';
import './RecipeList.css'
import Popup from './components/Popup';
import NavBar from './NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './register.css'
import axios from 'axios'
const RecipeList = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/favoritelist').then(function(response) {
            console.log(response.data);
            setData(response.data);
    });
  }, []);
  return (
    //retrieve search params from props
    //.find({ingredients = props.ingredients}, ingredients)
    //for {ingredient} in {ingredients}
    //where props.action is sending to specific recipe page with param = recipe selected
    //onclick the name of the recipe from the recipelist will store the name in props and load recipe page
    <div class = "flex-container">
      <NavBar/>
      {Object.keys(data).map((key, index) => {
        return(
          <p className = 'recipe' onClick={event => window.location.href="/recipe/"+key}>
          {data[key].name}
          <img src = {require("" + data[key].image)} alt = 'image'/>
          </p>
        )
      })}
    </div>
  )
}
export default RecipeList;