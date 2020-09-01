import React from "react";
import {
  Box,
  /*makeStyles, createStyles,*/ Typography
} from "@material-ui/core";

const TypographyDemo = () => {
  return (
    <Box>
      <Typography color="primary" variant="h1">Heading 1.</Typography>
      <Typography variant="h2">Heading 2.</Typography>
      <Typography variant="h3">Heading 3.</Typography>
      <Typography variant="h4">Heading 4.</Typography>
      <Typography variant="h5">Heading 5.</Typography>
      <Typography variant="h6">Heading 6.</Typography>
      <Typography>paragraph 1 . p tag</Typography>
    </Box>
  );
};

// const usestyles = makeStyles(theme =>
//     createStyles({

//     })
// )

export default TypographyDemo;
