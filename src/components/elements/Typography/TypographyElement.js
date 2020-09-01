import React from "react";
import {
  Box,
  /*makeStyles, createStyles,*/ Typography, TextField
} from "@material-ui/core";

const TypographyDemo = () => {


  return (
    <Box>
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      <Typography variant="h1">Heading 1.</Typography>
      <Typography variant="h2">Heading 2.</Typography>
      <Typography variant="h3">Heading 3.</Typography>
      <Typography variant="h4">Heading 4.</Typography>
      <Typography variant="h5">Heading 5.</Typography>
      <Typography variant="h6">Heading 6.</Typography>
      <Typography variant="body1">paragraph body1</Typography>
      <Typography variant="body2">paragraph body2</Typography>
      <Typography variant="caption">Caption</Typography> <br/>
      <Typography variant="overline">Overline</Typography>
    </Box>
  );
};

// const usestyles = makeStyles(theme =>
//     createStyles({

//     })
// )

export default TypographyDemo;
