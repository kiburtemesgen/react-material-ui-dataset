import { Box } from '@mui/system'
import React from 'react'

const RunButtons = () => {
  return (
    <Box
    sx={{
      margin: "15px 10px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <button
      style={{
        padding: "10px",
        color: "white",
        backgroundColor: "#4d5e6c",
        borderRadius: "12px",
        border: "none",
      }}
    >
      Execute query
    </button>
    <button
      style={{
        padding: "10px",
        color: "white",
        backgroundColor: "#477cde",
        borderRadius: "12px",
        border: "none",
      }}
    >
      Run this code
    </button>
  </Box>
  )
}

export default RunButtons