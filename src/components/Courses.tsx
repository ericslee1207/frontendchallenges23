import courses from "../data/courses.json";
import * as React from "react";
import { Grid } from "@mui/material";
import Card from "./Card";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import "./Courses.css";
import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0.1px 0.1px 10px lightgrey",
    },
  },
}));

const Courses = () => {
  const [field, setField] = React.useState("");
  const [courseStartRange, setCourseStartRange] = React.useState("");
  const filteredCourses = courses.filter(
    (c: any) =>
      (c.title.toLowerCase().includes(field) ||
        c.description.toLowerCase().includes(field) ||
        ("" + c.number).includes(field) ||
        c.dept.toLowerCase().includes(field)) &&
      (parseInt(courseStartRange) !== 0
        ? parseInt(c.number) >= parseInt(courseStartRange) &&
          parseInt(c.number) < parseInt(courseStartRange) + 100
        : true)
  );

  return (
    <div className="container">
      <div className="searchcontainer">
        <TextField
          hiddenLabel
          id="outlined-basic"
          defaultValue=""
          variant="standard"
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className="icon" />
              </InputAdornment>
            ),
          }}
          onChange={(text) => setField(text.target.value.toLowerCase())}
          className="search"
        />
        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="demo-customized-select-native">
            Filter Course Number
          </InputLabel>
          <NativeSelect
            id="demo-customized-select-native"
            value={courseStartRange}
            onChange={(event) => {
              setCourseStartRange(event.target.value);
            }}
            input={<BootstrapInput />}
          >
            <option value={0}>{"All Courses"}</option>
            <option value={100}>{"Course Number 100-199"}</option>
            <option value={200}>{"Course Number 200-299"}</option>
            <option value={300}>{"Course Number 300-399"}</option>
            <option value={400}>{"Course Number 400-499"}</option>
            <option value={500}>{"Course Number >= 500"}</option>
          </NativeSelect>
        </FormControl>
      </div>

      <Grid container spacing={1} className="gridcontainer">
        {filteredCourses.map((c: any) => (
          <div key={c.dept + "-" + c.number}>
            <Card c={c} />
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default Courses;
