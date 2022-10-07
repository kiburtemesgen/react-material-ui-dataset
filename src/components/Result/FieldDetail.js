import { Box } from '@mui/system'
import React from 'react'

const FieldDetail = (props) => {
    const fontW = props.font
  return (
    <Box sx={{ display: "flex", flexDirection: "row", }}>
    <Box sx={{ fontWeight:  `${fontW}`,padding: '5px 10px', borderTop: "1px solid #565c61", borderLeft: "1px solid #565c61", borderRight: "1px solid #565c61", width: "50%" }}>
      {props.field}
    </Box>
    <Box sx={{fontWeight:  `${fontW}`, padding: '5px 10px', borderTop: "1px solid #565c61", borderRight: "1px solid #565c61", width: "50%" }}>
      {props.type}
    </Box>
  </Box>
  )
}

export default FieldDetail