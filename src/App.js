import logo from './logo.svg';
import React, {useState} from "react";
import Button from "./components/Button.js";
import Giphy from "./components/Giphy.js";
import Title from "./components/Title.js";
import './App.css';

function App() {
  // Variable with apiKey
  const apiKey = "ByPyJxmaH1cQ5sIJVnG0qhxNhoOJfzPe";
  // State to hold movie data
  const [gif, setGif] = useState(null);

  //Function to getGifs
  const getGifs = async () => {
    //make fetch request and store response
    const response = await fetch (
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    // Parse JSON response into a javascript object
    const data = await response.json();
    //set the Movie state to the movie
    setGif(data);
  };
  // USE OUR COMPONENTS IN APPs RETURNED JSX
  // We pass the Giphy function as a prop called getGifs
  return (
    <div className="App">
      <Title />
      <Button Giphy={getGifs} />
      <Giphy giphy={gif} />
    </div>
  );
}

export default App;
