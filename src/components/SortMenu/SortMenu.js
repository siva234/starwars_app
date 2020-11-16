import React, {useState} from 'react';
import {Button, Menu, MenuItem} from '@material-ui/core';

function SortMenu({handleSortMenuItemClick}) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleSortMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleSortMenuClose = () => {
        setAnchorEl(null);
      };
    
    return (
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
                <MenuItem onClick={(event) => {handleSortMenuItemClick(event, 1); handleSortMenuClose();}}>Episode</MenuItem>
                <MenuItem onClick={(event) => {handleSortMenuItemClick(event, 2); handleSortMenuClose();}}>Year</MenuItem>
              </Menu>
        </div>
    )
}

export default SortMenu
