import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
// import CommentIcon from "@mui/icons-material/Comment";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const options = [
  "Pasta",
  "Hamburger",
  "Salad",
  "Salmon",
  "Fries",
  "Pumpkin Soup",
];

let dailyCount: string[] = [];

function App() {
  function addToList(item: string) {
    if (item != "") {
      setSelected("");
      dailyCount.push(item);
    }
  }
  function handleChange(value: string) {
    setSelected(value);
  }
  // const [dailyCount, setDailyCount] = useState<string[]>([]);
  const [selected, setSelected] = useState<string>("");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calories</h1>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          id="list"
        >
          {dailyCount.map((value) => (
            <ListItem key={value} disableGutters>
              <ListItemText primary={`${value} calories: 200`} />
              <ListItemButton component="a" href="#simple-list">
                <RemoveCircleIcon />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          sx={{ width: 300 }}
          onChange={(event, value) => handleChange(String(value))}
          renderInput={(params) => <TextField {...params} label="Foods" />}
        />
        <Button onClick={() => addToList(selected)} variant="contained">
          Add
        </Button>
      </header>
    </div>
  );
}

export default App;
