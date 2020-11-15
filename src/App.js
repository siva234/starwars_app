import React, {useEffect, useState} from 'react';
import './App.css';
import Movielist from './components/MovieList/MovieList';
import SideDisplay from './components/SideDisplay/SideDisplay';
import Grid from '@material-ui/core/Grid';
import { Button, Input } from '@material-ui/core';

function App() {
  const [filmsData, setFilmsData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  
  useEffect(() => {
    fetch('https://star-wars-api.herokuapp.com/films')
      .then(response => response.json())
      .then(data => setFilmsData(data));
    console.log("SearchWord".searchWord);
  }, [])

  const handleMovieClick = (value) =>{
    console.log(value);
    setDisplayData(value);
  }
  let handleSearchChange = event => {
    let val = {value: event.target.value};
    console.log("SearchWord".val);
    setSearchWord(val);
  };
  
  return (
    <Grid container justify="center" className="App" spacing={2}>
      <Grid item xs={12} className="TopBar">
        <Grid container justify="center" spacing={2} >
          <Grid item className="SortMenu"></Grid>
          <Grid item className="SearchBox"></Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="DisplayBoxes">
        <Grid container justify="center" spacing={2}>
            <Grid item xs={5} className="MovieList">
              {filmsData.filter(film => film.fields.title.includes({searchWord}) || !searchWord).map(obj =>                
                  <a className="MovieListItems" onClick={() => handleMovieClick(obj.fields)}><Movielist key={obj.fields.id} filmobj={obj.fields}  /></a>
              )}
            </Grid>
            <Grid item xs={5} className="SideDisplay">  
              <SideDisplay displayData={displayData} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
}

export default App;

