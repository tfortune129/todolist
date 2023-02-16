import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
// import CommentIcon from '@mui/icons-material/Comment';
import { RiEyeCloseLine } from 'react-icons/ri';

export default function CheckboxList(props) {
  const [checked, setChecked] = useState([]);
    console.log(props)
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {props.myList.map((value, i) => {
        const labelId = `checkbox-list-label-${i}`;

        return (
          <ListItem
            key={i}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <RiEyeCloseLine onClick={()=>props.deleteToDo(i)} />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(i)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(i) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${i + 1}. ${value}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}