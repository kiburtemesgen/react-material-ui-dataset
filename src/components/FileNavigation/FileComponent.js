import { Box } from '@mui/system'
import React from 'react'

const FileComponent = (props) => {
    const color = props.language === 'JS' ? 'black' : 'white'
  return (
    <Box sx={{ display: "flex", alignItems: "start", p: 0.5, pr: 0 }}>
    <Box
      style={{
        color: `${color}`,
        backgroundColor: `${props.bgColor}`,
        padding: "0 4px",
        marginRight: "5px",
        borderRadius: "12px",
      }}
    >
      {props.language}
    </Box>
    <Box sx={{color: '#c6cbcf'}}>{props.label}</Box>
  </Box>
  )
}

export default FileComponent