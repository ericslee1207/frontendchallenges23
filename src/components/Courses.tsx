import courses from "../data/courses.json";
import * as React from "react";
import { Grid } from "@mui/material";
import Card from "./Card";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Courses = () => {
  const [field, setField] = React.useState("");
  const filteredCourses = courses.filter(
    (c) =>
      c.title.toLowerCase().includes(field) ||
      c.description.toLowerCase().includes(field) ||
      ("" + c.number).includes(field) ||
      c.dept.toLowerCase().includes(field)
  );
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        padding: "3%",
      }}
    >
      <TextField
        hiddenLabel
        id="outlined-basic"
        defaultValue=""
        variant="standard"
        value={field}
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={(text) => setField(text.target.value.toLowerCase())}
        style={{
          width: "70%",
          marginBottom: "20px",
          borderRadius: "25px",
          boxShadow: "0.1px 0.1px 10px lightgrey",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          paddingLeft: "20px",
        }}
      />
      <Grid
        container
        spacing={1}
        style={{
          justifyContent: "center",
          // alignItems: "center",
          display: "flex",
          width: "100%",
        }}
      >
        {filteredCourses.map((c) => (
          <Card c={c} />
        ))}
      </Grid>
    </div>
  );
};

export default Courses;
