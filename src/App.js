import React, {useEffect, useState} from 'react';
import './App.css';
import Movielist from './components/MovieList/MovieList';
import SideDisplay from './components/SideDisplay/SideDisplay';
import {Grid, Button, Menu, MenuItem, Input} from '@material-ui/core';

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filmsData, setFilmsData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  
  useEffect(() => {
    fetch('https://star-wars-api.herokuapp.com/films')
      .then(response => response.json())
      .then(data => setFilmsData(data));
  }, [])

  const handleSortMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSortMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleSortMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMovieClick = (value) =>{
    setDisplayData(value);
  }

  useEffect(() => {
    let sorted = [...filmsData];
    if(selectedIndex===1){
      sorted = [...filmsData].sort((a, b) => {
        if(a.fields.episode_id < b.fields.episode_id)
          return -1;
        if(a.fields.episode_id > b.fields.episode_id)
          return 1;
        return 0;
      });
    }
    if(selectedIndex===2){
      sorted = [...filmsData].sort((a, b) => {
        if(a.fields.release_date < b.fields.release_date)
          return -1;
        if(a.fields.release_date > b.fields.release_date)
          return 1;
        return 0;
      });
    }
    setFilmsData(sorted);
  }, [selectedIndex])

  const handleSearchChange = (event) => {
    let val = event.target.value;
    setSearchWord(val);
  }
  
  return (
    <Grid container justify="center" className="App" spacing={2}>
      <Grid item xs={12} className="TopBar">
        <Grid container justify="center" spacing={2} >
          <Grid item xs={4} className="SortMenuContainer">
            <div>
              <Button className="SortMenuBtn" aria-controls="simple-menu" aria-haspopup="true" onClick={handleSortMenuClick}>
                Sort by...
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleSortMenuClose}
              >
                <MenuItem onClick={(event) => handleSortMenuItemClick(event, 1)}>Episode</MenuItem>
                <MenuItem onClick={(event) => handleSortMenuItemClick(event, 2)}>Year</MenuItem>
              </Menu>
            </div>
          </Grid>
          <Grid item xs={8} className="SearchBoxContainer">
            <Input className="SearchBox" type="text" value={searchWord.value} onChange={handleSearchChange}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="DisplayBoxes">
        <Grid container justify="center" spacing={2}>
            <Grid item xs={5} className="MovieListContainer">
              {filmsData.filter(film => film.fields.title.toLowerCase().includes(searchWord.toLowerCase()) || !searchWord).map(obj => 
                  <Button key={obj.id} className="MovieListItems" onClick={() => handleMovieClick(obj.fields)}><Movielist filmobj={obj.fields}  /></Button>
              )}
            </Grid>
            <Grid item xs={5} className="SideDisplayContainer">  
              <SideDisplay displayData={displayData} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
}

export default App;

