import { Box } from '@mui/system'
import React from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const RunOptions = (props) => {
  return (
    <Box
    sx={{
      margin: "0 10px",
      padding: '5px 0',
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderTop: "1px solid grey",

    }}
  >
    <Box
      sx={{
        color: "#c6cbcf",
        padding: "5px",
      }}
    >
      {props.title}
    </Box>
    <KeyboardArrowDownIcon style={{color: 'grey'}} />
  </Box>
  )
}

export default RunOptions