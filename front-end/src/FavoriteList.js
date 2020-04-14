import React, {useState} from 'react';
import './RecipeList.css'
import Popup from './components/Popup';
import './register.css';
import axios from 'axios'

const FavoriteList = (props) => {

  const [matchPopup, setMatchPopup] = useState(true);
  const data = {};
  axios.get('http://localhost:3000/favoritelist').then(function(response) {
            //data = res;
            console.log(response.data);
  }).catch(function(error) {
            console.log(error);
  });

  return (

    //retrieve search params from props
    //.find({ingredients = props.ingredients}, ingredients)
    //for {ingredient} in {ingredients}

    //where props.action is sending to specific recipe page with param = recipe selected

  	<div class = "flex-container">
            <button className="back-button" onClick={event => window.location.href='/home'}>Back to home</button>
        <br></br>
      {matchPopup ? <Popup id = 'instructions' 
        text='Hi! Looks like this is your first time viewing recipes. The ones in green are those that you have all ingredients for, yellow are those you have some for.' 
        closePopup={(h) => setMatchPopup(!matchPopup)} /> : null}
      {Object.keys(data).map((key, index) => {
        if(data[key].favorite){
          return(
            <p className = 'recipe' onClick={null}>
            {data[key].name}
            <img src = {require("" + data[key].image)} alt = 'image'/>
            </p>
          )
        }else return "";
      })}

    </div>
  )
}

export default FavoriteList;