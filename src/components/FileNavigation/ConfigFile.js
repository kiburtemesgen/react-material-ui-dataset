import { Box } from '@mui/system'
import React from 'react'

const ConfigFile = (props) => {
  return (
    <Box
    sx={{ display: "flex", alignItems: "start", padding: '5px 10px', pr: 0 }}
  >
    <Box
      style={{
        color: "white",
        backgroundColor: "#24c8d1",
        padding: "2px 4px",
        marginRight: "5px",
        borderRadius: "10px",
      }}
    >
      config
    </Box>
    <Box sx={{color: '#c6cbcf'}}>{props.label}</Box>
  </Box>
  )
}

export default ConfigFile