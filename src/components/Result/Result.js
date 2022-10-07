import { Box } from "@mui/system";
import React from "react";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import SchemaIcon from "@mui/icons-material/Schema";
import RefreshIcon from "@mui/icons-material/Refresh";
import { FileView } from "../FileNavigation/FileView";
import CloseIcon from "@mui/icons-material/Close";
import FieldDetail from "./FieldDetail";

const Result = () => {
  return (
    <Box
      sx={{
        color: "#c6cbcf",
        backgroundColor: "#21303d",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          borderBottom: "1px solid #565c61",
        }}
      >
        <Box
          sx={{
            marginRight: "15px",
            padding: '10px',
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <ContentPasteSearchIcon />
          <Box sx={{paddingLeft: '5px'}}>Query results</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <SchemaIcon />
          <Box sx={{fontWeight: 'bold', paddingLeft: '5px'}}>Schemas</Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              marginLeft: "10px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p>Refresh</p>
            <RefreshIcon></RefreshIcon>
          </Box>
          <FileView />
        </Box>
        <Box
          sx={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderLeft: "1px solid #565c61",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", paddingLeft: '10px' }}>
              <Box
                style={{
                  color: "white",
                  backgroundColor: "#24c8d1",
                  padding: "0 6px",
                  borderRadius: "10px",
                  marginRight: '10px'
                }}
              >
                view
              </Box>
              <p>dataform_demo.dataset_1</p>
            </Box>
            <CloseIcon></CloseIcon>
          </Box>

          <FieldDetail field="Field" type="Type" font = 'bold'/>
          <FieldDetail field="date" type="date" />
          <FieldDetail field="device_type" type="character varying" />
          <FieldDetail field="country" type="character varying" />
          <FieldDetail field="sessions" type="integer" />
          <FieldDetail field="revenue" type="integer" />
        </Box>
      </Box>
    </Box>
  );
};

export default Result;
