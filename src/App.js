import React, {useEffect, useState} from 'react'
import Gallery from './components/Gallery.jsx'
import SearchBar from './components/SearchBar.jsx'


function App() {

  //make api call to the NASA API using 
const [pictures, setPictures] = useState([]);

//date format is const YYYY-MM-DD

// const todaysDate = new Date();

// const dd = String(todaysDate.getDate()).padStart(2, '0');
// const mm = String(todaysDate.getMonth() + 1).padStart(2, '0'); //January is 0!
// const yyyy = todaysDate.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;

// const [userDate, setUserDate] = useState('');

const findPicture = (date) => {
  const test = date;

  return test
}
 
useEffect(() => {
  fetch(
    `https://api.nasa.gov/planetary/apod/?api_key=5cZFNCM0aq4xVfTvhV0tn0vRYmMkOQVS63odyt1a&${userDate}`
  )
  .then(result => result.json())
  .then(data => {
    setPictures(data);
  })
}, [])



console.log(pictures)



  return (
    <div className="App">
      <p>NASA Picture of the Day!</p>
      <SearchBar findPicture={findPicture}/>
      <Gallery pictures={pictures} />
    </div>
  );
}

export default App;
